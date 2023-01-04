define("LeadSectionV2", ["ProcessModuleUtilities","AccountSectionV2Resources", "terrasoft", "ControlGridModule", "BaseProgressBarModule","EntityHelper", "css!BaseProgressBarModule"], function(ProcessModuleUtilities,resources,Terrasoft) {
	return {
		entitySchemaName: "Lead",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "DataGridActiveRowQualificationProcessAction",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					//"className": "Terrasoft.Button",
					//"style": Terrasoft.controls.ButtonEnums.style.GREEN,
					//"caption": {"bindTo": "getQualificationProcessButtonCaption"},
					//"tag": "onLeadManagementSectionButtonClick",
					//"iconAlign": Terrasoft.controls.ButtonEnums.iconAlign.RIGHT,
					//"imageConfig": resources.localizableImages.QualificationProcessActionImage,
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "DataGrid",
				"parentName": "DataGridContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.GRID,
					"type": {"bindTo": "GridType"},
					"listedZebra": true,
					"activeRow": {"bindTo": "ActiveRow"},
					"collection": {"bindTo": "GridData"},
					"isEmpty": {"bindTo": "IsGridEmpty"},
					"isLoading": {"bindTo": "IsGridLoading"},
					"multiSelect": {"bindTo": "MultiSelect"},
					"primaryColumnName": "Id",
					"selectedRows": {"bindTo": "SelectedRows"},
					"sortColumn": {"bindTo": "sortColumn"},
					"sortColumnDirection": {"bindTo": "GridSortDirection"},
					"sortColumnIndex": {"bindTo": "SortColumnIndex"},
					"selectRow": {"bindTo": "rowSelected"},
					"linkClick": {"bindTo": "linkClicked"},
					"needLoadData": {"bindTo": "needLoadData"},
					"activeRowAction": {"bindTo": "onActiveRowAction"},
					"className": "Terrasoft.ControlGrid",
					"controlColumnName": "UsrLeadOpportunityStages",
					"applyControlConfig": {"bindTo": "applyControlConfig"},
					"getEmptyMessageConfig": {"bindTo": "prepareEmptyGridMessageConfig"}
				}
			}
 
		]/**SCHEMA_DIFF*/,
		
	
		methods: {
			getGridDataColumns: function () {
				var gridDataColumns = this.callParent(arguments);
				gridDataColumns.UsrAccStage = gridDataColumns.UsrAccStage || {path:"UsrLeadOpportunityStages"};
				gridDataColumns["UsrLeadOpportunityStages.UsrStageNumber"] =
				gridDataColumns["UsrLeadOpportunityStages.UsrStageNumber"] || {path: "UsrLeadOpportunityStages.UsrStageNumber"};
				return gridDataColumns;
			},
			applyControlConfig: function(control) {
				control.config = {
					className: "Terrasoft.BaseProgressBar",
					value: {
						"bindTo": "UsrLeadOpportunityStages",
						"bindConfig": {"converter": "getUsrLeadOpportunityStagesValue"}
					},
					width: "158px",
					maxValue: 4,
				};
			},
			getUsrLeadOpportunityStages: function(id) {
				var activeRow;
				if (id) {
					var gridData = this.getGridData();
					activeRow = gridData.get(id);
				} else {
					activeRow = this.getActiveRow();
				}
				if (!activeRow) {
					return null;
				}
				var leadOppStage = activeRow.get("UsrLeadOpportunityStages");
				return (leadOppStage) ? leadOppStage.value : null;
			},
			addColumnLink: function(item) {
				item.getUsrLeadOpportunityStagesValue = function(leadOppStage) {
					if (!leadOppStage) {
						return null;
					} else {
						return {
							value: this.get("UsrLeadOpportunityStages.UsrStageNumber"),
							displayValue: leadOppStage.displayValue
						};
					}
				};
				return this.callParent(arguments);
			},
 
			initLeadManagementButtonVisibility: function(entity) {
				this.callParent(arguments);

				var showQualifyButton = false; //set show/hide conditions
				this.set("LeadManagementButtonVisible", showQualifyButton);
			},
			
			//Add button to action menu
		getSectionActions: function () {
				var actionMenuItems = this.callParent(arguments);
				actionMenuItems.addItem(this.getButtonMenuSeparator());

				actionMenuItems.addItem(this.getButtonMenuItem({
					"Caption": "Agent Assignment",
					"Click": {
						"bindTo": "showselectiontDialog"
					},
					"Visible": true

				}));
			actionMenuItems.addItem(this.getButtonMenuSeparator());
				
				actionMenuItems.addItem(this.getButtonMenuItem({
					"Caption": "Multple lead closure",
					"Click": {
						"bindTo": "MultipleLeadClosure"
					},
					"Visible": true

				}));
				return actionMenuItems;
			},
			//MultipleLeadClosure Starts here
			MultipleLeadClosure: function(){
					var selectedRows = this.get("SelectedRows");
				var item = this.getActiveRow();
				if(selectedRows.length > 0){
				var selectedLeads = JSON.stringify(selectedRows);					
					var args1 = {
						sysProcessName: "UsrMultipleLeadClosure",
						parameters: {
							LeadList: selectedLeads
						}
					};
					ProcessModuleUtilities.executeProcess(args1);
				}
				else if(item ){
					var LeadId = item.get("Id");
					var args = {
						sysProcessName: "UsrMultipleLeadClosure",
						parameters: {
							SingleLeadId: LeadId
						}
					};
					ProcessModuleUtilities.executeProcess(args);
				}
				
				
			},
			//MultipleLeadClosure ends here
			//Selection Dialog Starts
			showselectiontDialog : function(){
				var selectedRows = this.get("SelectedRows");
				var item = this.getActiveRow();
				if(selectedRows.length > 0){
				var selectedLeads = JSON.stringify(selectedRows);					
					var args1 = {
						sysProcessName: "UsrAgentAssignment",
						parameters: {
							LeadList: selectedLeads
						}
					};
					ProcessModuleUtilities.executeProcess(args1);
				}
				else if(item ){
					var LeadId = item.get("Id");
					var args = {
						sysProcessName: "UsrAgentAssignment",
						parameters: {
							SingleLeadId: LeadId
						}
					};
					ProcessModuleUtilities.executeProcess(args);
				}
			},
			
			
		}
	};
});
