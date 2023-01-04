define("LeadPageV2", ["ProcessModuleUtilities","css!OpportunityCommonCSS"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "Lead",
		attributes: {
			"UsrMood": {
				lookupListConfig: {
					orders: [{columnPath: "Position"}]
				}
			},
			"DaysInFunnel": {
				"dataValueType": Terrasoft.DataValueType.TEXT,
				"value": "0"
			},
			"UsrAnnualRevenueForecast":{
				dataValueType: Terrasoft.DataValueType.FLOAT,
				dependencies: [
                    {
                        columns: ["UsrFXtransactions", "UsrNumberofTransactions_Monthly"],
                        methodName: "CalculateRevenue"
                    }
				]
			},
			"Status":{
				dependencies:[{
					columns:["UsrLeadOpportunityStages"],
					methodName: "selectValidReason"
				}]
			}
			
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"SiteEventDetailV23f8ee442": {
				"schemaName": "SiteEventDetailV2",
				"entitySchemaName": "SiteEvent",
				"filter": {
					"detailColumn": "BpmSessionId",
					"masterColumn": "BpmSessionId"
				}
			},
			"LeadProductDetailV241d7605e": {
				"schemaName": "LeadProductDetailV2",
				"entitySchemaName": "LeadProduct",
				"filter": {
					"detailColumn": "Lead",
					"masterColumn": "Id"
				}
			},
			"CallDetail130d2d62": {
				"schemaName": "CallDetail",
				"entitySchemaName": "Call",
				"filter": {
					"detailColumn": "Lead",
					"masterColumn": "Id"
				}
			},
			"OpportunityHistoryActivityDetail802203a9": {
				"schemaName": "OpportunityHistoryActivityDetail",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "Lead",
					"masterColumn": "Id"
				}
			},
			"EmailDetailV2d142390e": {
				"schemaName": "EmailDetailV2",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "Lead",
					"masterColumn": "Id"
				}
			},
			"VwLeadToOpportunityLogTableView": {
				"schemaName": "UsrSchemadcb8c81fDetail",
				"entitySchemaName": "UsrVwLeadToOpportunityLogTableView",
				"filter": {
					"detailColumn": "UsrvwChangeTrackedId",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrTotalAmount": {
				"4c341117-cee7-43b9-97cf-484c8fb694ff": {
					"uId": "4c341117-cee7-43b9-97cf-484c8fb694ff",
					"enabled": true,
					"removed": true,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 0,
								"dataType": 32,
								"operatorType": 1,
								"leftExpression": {
									"type": 1,
									"dataType": 32,
									"operandType": 1,
									"columnPath": "UsrSubscriptionFee",
									"columnOperandType": 0
								},
								"rightExpression": {
									"type": 1,
									"dataType": 32,
									"operandType": 1,
									"columnPath": "UsrOnBoardingFee",
									"columnOperandType": 0
								},
								"arithmeticOperatorType": 0
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrSubscriptionFee"
							}
						},
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrOnBoardingFee"
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			CalculateRevenue : function(){
				var fxtransactions = this.get("UsrFXtransactions");
				if(!fxtransactions){
					fxtransactions = 0;
				}
				var numberoftransactions = this.get("UsrNumberofTransactions_Monthly");
				if(!numberoftransactions){
					numberoftransactions = 0;
				}
				var totalRevenue = (((fxtransactions * 0.005) + (numberoftransactions * 0.35)) * 12);
				this.set("UsrAnnualRevenueForecast",totalRevenue);
			},
			getLookupQuery: function(filter, columnName) {
				var esq = this.callParent(arguments);
				if (columnName === "UsrMood") {
					esq.addMacrosColumn(Terrasoft.QueryMacrosType.PRIMARY_IMAGE_COLUMN, "primaryImageValue");
				}
				return esq;
			},
			isLabelMetricsContainerVisible: function() {
				return this.get("DaysAtStageVisible");
			},                
			/** * @private * @deprecated */
			isMetricsContainerVisible: function() {
				return this.getIsFeatureEnabled("OpportunityMetrics");
			},
			getProbabilityMetricValue: function() {
				var probValue = this.get("UsrProbability");
				if(probValue !== undefined){
					return  probValue.displayValue;
				}
				return null;
			},
			updateDaysInFunnelValue: function() {
				dueDate = new Date();
				var createdOnValue = this.get("CreatedOn");
				var dateNow = Terrasoft.clearTime(dueDate);
				createdOnValue = Terrasoft.clearTime(createdOnValue);
				var days = Terrasoft.dateDiffDays(createdOnValue, dateNow);
				days = Terrasoft.getFormattedNumberValue(days,
														 {
					type: Terrasoft.DataValueType.INTEGER,
					useThousandSeparator: false
				});
				this.set("DaysInFunnel", days > 0 ? days : "0");
			},
			onEntityInitialized : function(){
				this.callParent(arguments);
				this.updateDaysInFunnelValue();
			},
			onSaved: function() {
				this.callParent(arguments);
				this.updateDaysInFunnelValue();
			},
			getProbabilityMetricCaption: function() {
				return this.get("Resources.Strings.ProbabilityCaption");
			},
			getProbabilityMetricHint: function() {
				return this.get("Resources.Strings.ProbabilityMetricHint");
			},
			
			
			
			
			// Multilead closure selectValidReason starts
			selectValidReason:function(){
		var moduleIds = this.getModuleIds();
				moduleIds.push(this.sandbox.id);
				var value = this.get("UsrLeadOpportunityStages");
				var id = this.get("Id");				
				if(value.displayValue == "Closed Lost" || value.value == "490654f5-f75a-45db-8b69-c74075706772")
					{
						
						console.log("Inside closed lost");
						//call valid reason - opportunity bp
						var args = {
							sysProcessName:"UsrSelectValidReasonOpportunity",
							parameters: {
								RecordId : id
						}
						};
						
				ProcessModuleUtilities.executeProcess(args); 
						
					/*	const runProcessRequest = Ext.Create("Terrasoft.RunProcessRequest",{
						 "schemaName": "UsrSelectValidReasonOpportunity", 
							  "schemaUId": "fb8033e7-8d00-433e-8113-ca6bc27a5132", 
							"parameterValues": { 
                        "RecordId": id
               			     }, 
						});
					
						runProcessRequest.execute(function(response){
							
							if(response.isSuccess()){
								
								Terrasoft.showInformation("Success");
							}
							
						},this);*/
						
						
						
						
					}
				else if (value.displayValue == "Rejected" || value.value == "b5785719-5c53-4e96-8847-c6c0ff064043")
					{
						
						console.log("Inside rejected");
						var leadargs = {
							sysProcessName:"UsrSelectValidReason",
							parameters: {
								RecordId:id
						}
						};
						 ProcessModuleUtilities.executeProcess(leadargs);
					}
				
				
				}
			
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "QualificationProcessButton",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "insert",
				"name": "MetricsContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					},
					"itemType": 7,
					"classes": {
						"wrapClassName": [
							"ts-metrics-container"
						]
					},
					"items": [],
					"visible": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MoodContainer",
				"values": {
					"items": [],
					"itemType": 7,
					"classes": {
						"wrapClassName": [
							"ts-metric-item",
							"ts-mood-container"
						]
					}
				},
				"parentName": "MetricsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityMood",
				"values": {
					"generator": "ImageListGenerator.generateImageList",
					"bindTo": "UsrMood",
					"id": "MoodImageList",
					"schemaName": "OpportunityMood",
					"schemaColumn": "Image",
					"caption": "ManagerMood",
					"controlConfig": {
						"wrapClasses": [
							"opportunity-mood-image-list image-list"
						],
						"modalBoxClasses": [
							"opportunity-mood-image-list"
						]
					},
					"markerValue": "OpportunityMood",
					"tips": []
				},
				"parentName": "MoodContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MoodTip",
				"values": {
					"content": "Manager Mood"
				},
				"parentName": "OpportunityMood",
				"propertyName": "tips",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MoodCaption",
				"values": {
					"itemType": 6,
					"caption": "Manager Mood",
					"classes": {
						"labelClass": [
							"ts-metric-item-caption"
						]
					}
				},
				"parentName": "MoodContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProbabilityContainer",
				"values": {
					"items": [],
					"itemType": 7,
					"classes": {
						"wrapClassName": [
							"ts-metric-item",
							"ts-probability-container"
						]
					},
					"tips": []
				},
				"parentName": "MetricsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProbabilityValue",
				"values": {
					"generator": "ConfigurationRoundProgressBarGenerator.generateProgressBar",
					"controlConfig": {
						"value": {
							"bindTo": "getProbabilityMetricValue"
						},
						"size": 78,
						"borderWidth": 2,
						"clockwise": true,
						"classes": [
							"ts-font-light"
						]
					}
				},
				"parentName": "ProbabilityContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProbabilityCaption",
				"values": {
					"caption": {
						"bindTo": "getProbabilityMetricCaption"
					},
					"classes": {
						"labelClass": [
							"ts-metric-item-caption"
						]
					},
					"itemType": 6
				},
				"parentName": "ProbabilityContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProbabilityMetricHint",
				"values": {
					"content": {
						"bindTo": "getProbabilityMetricHint"
					},
					"markerValue": {
						"bindTo": "getProbabilityMetricHint"
					}
				},
				"parentName": "ProbabilityContainer",
				"propertyName": "tips",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DaysInFunnelContainer",
				"values": {
					"items": [],
					"itemType": 7,
					"classes": {
						"wrapClassName": [
							"ts-metric-item",
							"ts-days-in-funnel-container"
						]
					}
				},
				"parentName": "MetricsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DaysInFunnelValue",
				"values": {
					"generator": "ConfigurationRoundProgressBarGenerator.generateProgressBar",
					"controlConfig": {
						"caption": {
							"bindTo": "DaysInFunnel"
						},
						"captionSuffix": "",
						"value": 100,
						"size": 78,
						"borderWidth": 2,
						"classes": [
							"ts-font-light"
						]
					}
				},
				"parentName": "DaysInFunnelContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DaysInFunnelCaption",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.DaysInFunnelCaption"
					},
					"classes": {
						"labelClass": [
							"ts-metric-item-caption"
						]
					},
					"itemType": 6
				},
				"parentName": "DaysInFunnelContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "NewLeadType",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadPredictiveScoreContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeadPageSQLTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "Email",
				"values": {
					"enabled": true
				}
			},
			{
				"operation": "insert",
				"name": "SiteEventDetailV23f8ee442",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GeneralInfoTabGroup7deb7543",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.GeneralInfoTabGroup7deb7543GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GeneralInfoTabGridLayout10d16cab",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "GeneralInfoTabGroup7deb7543",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadMediumaafe13de-9463-4656-88fb-d2de9700118b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "GeneralInfoTabGridLayout10d16cab"
					},
					"bindTo": "LeadMedium"
				},
				"parentName": "GeneralInfoTabGridLayout10d16cab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BpmRef0f964596-07e1-4394-ae5f-3aaefe6989f8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "GeneralInfoTabGridLayout10d16cab"
					},
					"bindTo": "BpmRef"
				},
				"parentName": "GeneralInfoTabGridLayout10d16cab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadSource7cbf75ae-73b0-4513-aacf-ab1a00d90282",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "GeneralInfoTabGridLayout10d16cab"
					},
					"bindTo": "LeadSource"
				},
				"parentName": "GeneralInfoTabGridLayout10d16cab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WebForm87a51484-ff55-4ef4-a39f-c39d06617459",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "GeneralInfoTabGridLayout10d16cab"
					},
					"bindTo": "WebForm"
				},
				"parentName": "GeneralInfoTabGridLayout10d16cab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RegisterMethod51f7fc9a-921c-4c00-be91-776a6b897ff6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "GeneralInfoTabGridLayout10d16cab"
					},
					"bindTo": "RegisterMethod"
				},
				"parentName": "GeneralInfoTabGridLayout10d16cab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Campaignfb51c3df-9154-417c-b4bb-4af85e0844ca",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "GeneralInfoTabGridLayout10d16cab"
					},
					"bindTo": "Campaign"
				},
				"parentName": "GeneralInfoTabGridLayout10d16cab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Eventc4fef6c7-e0e4-42d1-9307-c9e56ed83927",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "GeneralInfoTabGridLayout10d16cab"
					},
					"bindTo": "Event"
				},
				"parentName": "GeneralInfoTabGridLayout10d16cab",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "BulkEmail24101e43-1c01-4325-ba1e-1fd41a5300e5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "GeneralInfoTabGridLayout10d16cab"
					},
					"bindTo": "BulkEmail"
				},
				"parentName": "GeneralInfoTabGridLayout10d16cab",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "GeneralInfoTabGroup37f9f3e8",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.GeneralInfoTabGroup37f9f3e8GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "GeneralInfoTabGridLayout715c48fe",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "GeneralInfoTabGroup37f9f3e8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadTypeStatusfe19cc0d-a3e5-4586-b26c-8d8d7578d3e6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "GeneralInfoTabGridLayout715c48fe"
					},
					"bindTo": "LeadTypeStatus"
				},
				"parentName": "GeneralInfoTabGridLayout715c48fe",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Commentary5fa9ddf0-7c94-4d1e-b262-2b788c94b5a3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 3,
						"column": 0,
						"row": 1,
						"layoutName": "GeneralInfoTabGridLayout715c48fe"
					},
					"bindTo": "Commentary",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "GeneralInfoTabGridLayout715c48fe",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadProduct",
				"values": {
					"itemType": 2
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "merge",
				"name": "DealSpecificsTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "Opportunity",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "move",
				"name": "Opportunity",
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "SalesOwner",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "SalesOwner",
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "OpportunityDepartment",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "insert",
				"name": "UsrOnBoardingFee22b0b09c-fe96-43b7-aa27-af16c3ee92bd",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrOnBoardingFee"
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrSubscriptionFeef78c5ad4-2e1d-485b-83f7-9816059996b4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrSubscriptionFee"
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "UsrProbability5b0f9aea-f2b3-4dcb-8c0d-1eea30c97db8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrProbability"
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "UsrTotalAmount1c046169-1914-4c8a-8139-70b8d84da787",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrTotalAmount",
					"enabled": false
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "UsrFXtransactions558ac858-e6f4-4a41-b0f5-54d22d4483cf",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrFXtransactions"
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "UsrTurnover6a9ef49d-0558-4ddc-8110-76f552da50fb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrTurnover",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "UsrAnnualRevenueForecast235ddd6f-6982-47b6-951d-4c7ed8d44616",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrAnnualRevenueForecast",
					"enabled": false
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "UsrNumberofTransactions_Monthlyca6a501f-fe82-4dd4-93b3-0195c415cca6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 6,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrNumberofTransactions_Monthly"
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "UsrOwnerCompliance03817182-73c7-4a2e-99c8-9a94587ad446",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrOwnerCompliance"
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "UsrAvgSizeofTransaction94d41c10-4303-4b46-9b83-398da55eb995",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 7,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrAvgSizeofTransaction"
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "UsrOpportunitySourceedfbecc6-9a57-4441-ad37-126a9ccacc9e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrOpportunitySource"
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "UsrOwnerSales4c615b50-aaae-4719-ba26-4cc8a8939df2",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 8,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "UsrOwnerSales"
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "CreatedOn525e17c8-a248-4cfc-8ce8-d87b6e2de9f5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 9,
						"layoutName": "LeadPageDealInformationBlock"
					},
					"bindTo": "CreatedOn"
				},
				"parentName": "LeadPageDealInformationBlock",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "merge",
				"name": "NotesTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "insert",
				"name": "VwLeadToOpportunityLogTableView",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TimelineTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CallDetail130d2d62",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TimelineTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OpportunityHistoryActivityDetail802203a9",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TimelineTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "EmailDetailV2d142390e",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TimelineTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "WrongBrowserInfoDescription",
				"values": {
					"layout": {
						"colSpan": 20,
						"rowSpan": 5,
						"column": 3,
						"row": 7
					}
				}
			},
			{
				"operation": "remove",
				"name": "NewLeadDisqualifyReason"
			},
			{
				"operation": "remove",
				"name": "NeedInfoTab"
			},
			{
				"operation": "remove",
				"name": "LeadTypeControlGroup"
			},
			{
				"operation": "remove",
				"name": "LeadTypeBlock"
			},
			{
				"operation": "remove",
				"name": "LeadTypeStatus"
			},
			{
				"operation": "remove",
				"name": "Commentary"
			},
			{
				"operation": "remove",
				"name": "SpecificationInLead"
			},
			{
				"operation": "remove",
				"name": "LeadProduct"
			},
			{
				"operation": "remove",
				"name": "LeadEngagementTab"
			},
			{
				"operation": "remove",
				"name": "SiteEvent"
			},
			{
				"operation": "remove",
				"name": "LeadEngagementTabContainer"
			},
			{
				"operation": "remove",
				"name": "LeadPageSourceGroup"
			},
			{
				"operation": "remove",
				"name": "LeadPageSourceInfoBlock"
			},
			{
				"operation": "remove",
				"name": "LeadMedium"
			},
			{
				"operation": "remove",
				"name": "BpmRef"
			},
			{
				"operation": "remove",
				"name": "LeadSource"
			},
			{
				"operation": "remove",
				"name": "WebForm"
			},
			{
				"operation": "remove",
				"name": "RegisterMethod"
			},
			{
				"operation": "remove",
				"name": "Campaign"
			},
			{
				"operation": "remove",
				"name": "BulkEmail"
			},
			{
				"operation": "remove",
				"name": "Event"
			},
			{
				"operation": "remove",
				"name": "HistoryTab"
			},
			{
				"operation": "remove",
				"name": "QualifyStatusInLead"
			},
			{
				"operation": "remove",
				"name": "Calls"
			},
			{
				"operation": "remove",
				"name": "Activities"
			},
			{
				"operation": "remove",
				"name": "LeadEmail"
			}
		]/**SCHEMA_DIFF*/
	};
});
