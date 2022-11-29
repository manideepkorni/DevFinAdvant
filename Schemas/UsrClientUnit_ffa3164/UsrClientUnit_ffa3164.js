define("UsrClientUnit_ffa3164", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrReason": {
				"e69b568f-c046-4b53-a906-65fcc4eb37f4": {
					"uId": "e69b568f-c046-4b53-a906-65fcc4eb37f4",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Description",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 5,
					"attribute": "UsrStageValue"
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
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
				"name": "LOOKUPb5ce5b64-d233-4743-bbbf-48e6ff0609f9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
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
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING0d6ab840-33ea-460d-b0c2-3d3e105474e0",
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
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});
