define("UsrClientUnit_2d1666b", [], function() {
	return {
		entitySchemaName: "",
		attributes: {
			"UsrMainStageValues":{
				dataValueType: Terrasoft.DataValueType.TEXT,
				dependencies: [
                    {
                        columns: ["UsrStage"],
                        methodName: "SetStageValue"
                    }
				]
			},
			"UsrStage": {
                "dataValueType": Terrasoft.DataValueType.LOOKUP,
                "lookupListConfig": {
                    "filters": [
                        function() {
                            var filterGroup = Ext.create("Terrasoft.FilterGroup");
                            filterGroup.logicalOperation = this.Terrasoft.LogicalOperatorType.OR;
                            
                            filterGroup.add("DisqualifiedFilter",
                                Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
                                    "Name", "Disqualified"));
                            filterGroup.add("NotInterestedFilter",
                                Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
                                    "Name", "Not Interested"));
                            return filterGroup;
                        }
                    ]
                }
            }
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrReason": {
				"76ebe373-7659-4cc9-81bc-7620b9127a6f": {
					"uId": "76ebe373-7659-4cc9-81bc-7620b9127a6f",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Description",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 5,
					"attribute": "UsrMainStageValues"
				},
				"6f5e9d51-27d8-4493-a4c4-e0942742bfc9": {
					"uId": "6f5e9d51-27d8-4493-a4c4-e0942742bfc9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 5,
								"attribute": "UsrStage"
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			SetStageValue : function(){
				console.log("Check ", this.get("UsrStage"));
				var stageValue = this.get("UsrStage");
				if(stageValue === null){
					this.set("UsrReason", "");
				}
				else{
					this.set("UsrMainStageValues", stageValue.displayValue);
					if((this.get("UsrReason")) !== null){
						this.set("UsrReason", "");
					}
				}

			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "Button-3a8ac667899d4aa68021a07eb1c7c49c",
				"values": {
					"style": "red",
					"caption": {
						"bindTo": "Resources.Strings.ClosePageButtonCaption"
					},
					"click": {
						"bindTo": "onCancelProcessElementClick"
					},
					"enabled": true
				}
			},
			{
				"operation": "insert",
				"name": "LOOKUP9fbf71cd-7fdf-4d99-95e7-bf08c613e2e8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrStage",
					"enabled": true,
					"contentType": 3,
					"isRequired": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP168cd164-2679-4f1a-811f-2aca8e280e7a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrReason",
					"enabled": true,
					"contentType": 3,
					"isRequired": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING7e8854e2-610e-44d9-aea6-41ce4e3c40bd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 4,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrComments",
					"enabled": true,
					"isRequired": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_DIFF*/
	};
});
