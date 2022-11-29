define("UsrClientUnit_1661e8a", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "Button-be6148b819154a0791eaee8f1635d859",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.SaveDataButtonCaption"
					},
					"click": {
						"bindTo": "onSaveButtonClick"
					},
					"enabled": true
				}
			},
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
				"name": "LOOKUP2879df93-770a-4a88-9b92-d49f35079125",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrAgent",
					"enabled": true,
					"contentType": 5,
					"isRequired": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
