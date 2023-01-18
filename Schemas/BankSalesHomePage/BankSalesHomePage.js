define("BankSalesHomePage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "IndicatorWidget_vq1mh16",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 20,
						"colSpan": 3,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_vq1mh16_title)#",
						"data": {
							"providing": {
								"schemaName": "Lead",
								"aggregation": {
									"column": {
										"expression": {
											"expressionType": 1,
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											}
										}
									}
								},
								"filters": {
									"filter": {
										"items": {
											"3cc79964-afa1-4867-bc4f-e62195ee4dc3": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "UsrLeadOpportunityStages"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "UsrLeadOpportunityStages",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Awaiting Sale",
																"Id": "4ad7af8a-db29-4d24-8c8f-d55b5aeb9f94",
																"value": "4ad7af8a-db29-4d24-8c8f-d55b5aeb9f94",
																"displayValue": "Awaiting Sale"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Compliance",
																"Id": "b45d6ac4-9c9d-4190-b826-44e092e2215a",
																"value": "b45d6ac4-9c9d-4190-b826-44e092e2215a",
																"displayValue": "Compliance"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Sales Agreed",
																"Id": "30d56fb5-af58-47e1-a03d-899e63e498e7",
																"value": "30d56fb5-af58-47e1-a03d-899e63e498e7",
																"displayValue": "Sales Agreed"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
									}
								},
								"sectionBindingColumn": {
									"path": null
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_vq1mh16_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "violet"
						},
						"theme": "full-fill"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_4rodscr",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 20,
						"colSpan": 3,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_4rodscr_title)#",
						"data": {
							"providing": {
								"schemaName": "Lead",
								"aggregation": {
									"column": {
										"expression": {
											"expressionType": 1,
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "UsrTotalAmount"
											}
										}
									}
								},
								"filters": {
									"filter": {
										"items": {
											"6a23af76-05c9-4734-ad47-522683085534": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "UsrLeadOpportunityStages"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "UsrLeadOpportunityStages",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Awaiting Sale",
																"Id": "4ad7af8a-db29-4d24-8c8f-d55b5aeb9f94",
																"value": "4ad7af8a-db29-4d24-8c8f-d55b5aeb9f94",
																"displayValue": "Awaiting Sale"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Compliance",
																"Id": "b45d6ac4-9c9d-4190-b826-44e092e2215a",
																"value": "b45d6ac4-9c9d-4190-b826-44e092e2215a",
																"displayValue": "Compliance"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Sales Agreed",
																"Id": "30d56fb5-af58-47e1-a03d-899e63e498e7",
																"value": "30d56fb5-af58-47e1-a03d-899e63e498e7",
																"displayValue": "Sales Agreed"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
									}
								},
								"sectionBindingColumn": {}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_4rodscr_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "violet"
						},
						"theme": "full-fill"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_1mn6a0h",
				"values": {
					"layoutConfig": {
						"column": 7,
						"row": 20,
						"colSpan": 3,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_1mn6a0h_title)#",
						"data": {
							"providing": {
								"schemaName": "Lead",
								"aggregation": {
									"column": {
										"expression": {
											"expressionType": 1,
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											}
										}
									}
								},
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
									}
								},
								"sectionBindingColumn": {}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_1mn6a0h_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "violet"
						},
						"theme": "full-fill"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 19
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_pd3nz3g",
				"values": {
					"layoutConfig": {
						"column": 10,
						"row": 20,
						"colSpan": 3,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_pd3nz3g_title)#",
						"data": {
							"providing": {
								"schemaName": "Lead",
								"aggregation": {
									"column": {
										"expression": {
											"expressionType": 1,
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											}
										}
									}
								},
								"filters": {
									"filter": {
										"items": {
											"9b3a9240-1a7e-4644-a97d-0bd5b0ba0067": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "UsrProbability"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "UsrOpportunityProbability",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "90",
																"Id": "7b94ecbd-9cfb-4583-8c0a-fad1dff3e134",
																"value": "7b94ecbd-9cfb-4583-8c0a-fad1dff3e134",
																"displayValue": "90"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
									}
								},
								"sectionBindingColumn": {
									"path": null
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_pd3nz3g_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "violet"
						},
						"theme": "full-fill"
					},
					"selected": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 20
			},
			{
				"operation": "insert",
				"name": "ChartWidget_mmdklgd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 23,
						"colSpan": 12,
						"rowSpan": 5
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_mmdklgd_title)#",
						"color": "violet",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "#ResourceString(ChartWidget_mmdklgd_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(ChartWidget_mmdklgd_yAxis)#",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_mmdklgd_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"schemaName": "Lead",
										"rowCount": 50,
										"sectionBindingColumn": {},
										"grouping": {
											"column": {
												"expression": {
													"expressionType": 0,
													"columnPath": "UsrLeadOpportunityStages"
												}
											},
											"type": "by-value"
										},
										"aggregation": {
											"column": {
												"expression": {
													"expressionType": 1,
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													}
												}
											}
										},
										"filters": {
											"filter": {
												"items": {
													"1bc0a4c5-768d-4059-800a-713a0844af71": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrLeadOpportunityStages"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "UsrLeadOpportunityStages",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Awaiting Sale",
																		"Id": "4ad7af8a-db29-4d24-8c8f-d55b5aeb9f94",
																		"value": "4ad7af8a-db29-4d24-8c8f-d55b5aeb9f94",
																		"displayValue": "Awaiting Sale"
																	}
																}
															},
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Closed Won",
																		"Id": "a2f1e837-a2f7-465b-8045-7b5fc27d27bd",
																		"value": "a2f1e837-a2f7-465b-8045-7b5fc27d27bd",
																		"displayValue": "Closed Won"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrLeadOpportunityStages"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-aggregation-value",
							"direction": 1,
							"seriesIndex": 0
						}
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 21
			},
			{
				"operation": "insert",
				"name": "ChartWidget_m8n2i6k",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 28,
						"colSpan": 12,
						"rowSpan": 4
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_m8n2i6k_title)#",
						"color": "violet",
						"theme": "full-fill",
						"scales": {
							"stacked": true,
							"xAxis": {
								"name": "#ResourceString(ChartWidget_m8n2i6k_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(ChartWidget_m8n2i6k_yAxis)#",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_m8n2i6k_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"schemaName": "Lead",
										"rowCount": 50,
										"sectionBindingColumn": {},
										"grouping": {
											"column": {
												"expression": {
													"expressionType": 0,
													"columnPath": "UsrProbability"
												}
											},
											"type": "by-value"
										},
										"aggregation": {
											"column": {
												"expression": {
													"expressionType": 1,
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "UsrTotalAmount"
													}
												}
											}
										},
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrProbability"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 22
			},
			{
				"operation": "insert",
				"name": "ChartWidget_xbnyyki",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 32,
						"colSpan": 12,
						"rowSpan": 4
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_xbnyyki_title)#",
						"color": "violet",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_xbnyyki_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"schemaName": "Lead",
										"rowCount": 50,
										"sectionBindingColumn": {
											"path": null
										},
										"grouping": {
											"column": {
												"expression": {
													"expressionType": 0,
													"columnPath": "UsrLeadOpportunityStages"
												}
											},
											"type": "by-value"
										},
										"aggregation": {
											"column": {
												"expression": {
													"expressionType": 1,
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													}
												}
											}
										},
										"filters": {
											"filter": {
												"items": {
													"86ecbc59-58d8-4f34-90e8-4f266fc2a8f3": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "OpportunityDepartment"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "OpportunityDepartment",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "UK Prospects",
																		"Id": "ff0a20e1-f717-48d1-af0c-cc4243d2d5a6",
																		"value": "ff0a20e1-f717-48d1-af0c-cc4243d2d5a6",
																		"displayValue": "UK Prospects"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrLeadOpportunityStages"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 23
			},
			{
				"operation": "insert",
				"name": "ChartWidget_dcvqsb9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 36,
						"colSpan": 12,
						"rowSpan": 5
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_dcvqsb9_title)#",
						"color": "violet",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_dcvqsb9_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"schemaName": "Lead",
										"rowCount": 50,
										"sectionBindingColumn": {},
										"grouping": {
											"column": {
												"expression": {
													"expressionType": 0,
													"columnPath": "UsrLeadOpportunityStages"
												}
											},
											"type": "by-value"
										},
										"aggregation": {
											"column": {
												"expression": {
													"expressionType": 1,
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													}
												}
											}
										},
										"filters": {
											"filter": {
												"items": {
													"14708b21-31ca-4bb5-87aa-016130bb177d": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "OpportunityDepartment"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "OpportunityDepartment",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "EU Prospects",
																		"Id": "78436943-2540-41fe-b712-62e3bb4f4b15",
																		"value": "78436943-2540-41fe-b712-62e3bb4f4b15",
																		"displayValue": "EU Prospects"
																	}
																}
															},
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "EU non-Dutch",
																		"Id": "80412700-3d93-40c1-a80c-12f412b8c77d",
																		"value": "80412700-3d93-40c1-a80c-12f412b8c77d",
																		"displayValue": "EU non-Dutch"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrLeadOpportunityStages"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 24
			},
			{
				"operation": "insert",
				"name": "ChartWidget_81c4ofw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 41,
						"colSpan": 6,
						"rowSpan": 8
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_81c4ofw_title)#",
						"color": "violet",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"type": "tsfunnel",
								"label": "#ResourceString(ChartWidget_81c4ofw_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"schemaName": "Lead",
										"rowCount": 50,
										"sectionBindingColumn": {},
										"grouping": {
											"column": {
												"expression": {
													"expressionType": 0,
													"columnPath": "UsrProbability"
												}
											},
											"type": "by-value"
										},
										"aggregation": {
											"column": {
												"expression": {
													"expressionType": 1,
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													}
												}
											}
										},
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrProbability"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-aggregation-value",
							"direction": 1,
							"seriesIndex": 0
						}
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 25
			},
			{
				"operation": "insert",
				"name": "ChartWidget_7y9jnfz",
				"values": {
					"layoutConfig": {
						"column": 7,
						"row": 41,
						"colSpan": 6,
						"rowSpan": 8
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_7y9jnfz_title)#",
						"color": "violet",
						"theme": "full-fill",
						"scales": {
							"stacked": true,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_7y9jnfz_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"schemaName": "Lead",
										"rowCount": 50,
										"sectionBindingColumn": {},
										"grouping": {
											"column": {
												"expression": {
													"expressionType": 0,
													"columnPath": "OpportunityDepartment"
												}
											},
											"type": "by-value"
										},
										"aggregation": {
											"column": {
												"expression": {
													"expressionType": 1,
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "UsrTotalAmount"
													}
												}
											}
										},
										"filters": {
											"filter": {
												"items": {
													"f98d2867-00ff-4c62-84e9-0c1aa70608e9": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "OpportunityDepartment"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "OpportunityDepartment",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "UK Prospects",
																		"Id": "ff0a20e1-f717-48d1-af0c-cc4243d2d5a6",
																		"value": "ff0a20e1-f717-48d1-af0c-cc4243d2d5a6",
																		"displayValue": "UK Prospects"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "OpportunityDepartment"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 26
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_awj45wc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 49,
						"colSpan": 3,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_awj45wc_title)#",
						"data": {
							"providing": {
								"schemaName": "Lead",
								"aggregation": {
									"column": {
										"expression": {
											"expressionType": 1,
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											}
										}
									}
								},
								"filters": {
									"filter": {
										"items": {
											"414eb489-d426-41b6-b2e4-d26c26190318": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "OpportunityDepartment"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "OpportunityDepartment",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "UK Prospects",
																"Id": "ff0a20e1-f717-48d1-af0c-cc4243d2d5a6",
																"value": "ff0a20e1-f717-48d1-af0c-cc4243d2d5a6",
																"displayValue": "UK Prospects"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
									}
								},
								"sectionBindingColumn": {}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_awj45wc_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "violet"
						},
						"theme": "full-fill"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 27
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_1e0045y",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 3,
						"rowSpan": 3,
						"row": 49
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_1e0045y_title)#",
						"data": {
							"providing": {
								"schemaName": "Lead",
								"aggregation": {
									"column": {
										"expression": {
											"expressionType": 1,
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											}
										}
									}
								},
								"filters": {
									"filter": {
										"items": {
											"75685dd6-fee9-4465-8c65-3828c3261604": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "OpportunityDepartment"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "OpportunityDepartment",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "EU non-Dutch",
																"Id": "80412700-3d93-40c1-a80c-12f412b8c77d",
																"value": "80412700-3d93-40c1-a80c-12f412b8c77d",
																"displayValue": "EU non-Dutch"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "EU Prospects",
																"Id": "78436943-2540-41fe-b712-62e3bb4f4b15",
																"value": "78436943-2540-41fe-b712-62e3bb4f4b15",
																"displayValue": "EU Prospects"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
									}
								},
								"sectionBindingColumn": {}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_1e0045y_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "violet"
						},
						"theme": "full-fill"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 28
			},
			{
				"operation": "insert",
				"name": "ChartWidget_y8bucxe",
				"values": {
					"layoutConfig": {
						"column": 7,
						"row": 49,
						"colSpan": 6,
						"rowSpan": 7
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_y8bucxe_title)#",
						"color": "violet",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_y8bucxe_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"schemaName": "Lead",
										"rowCount": 50,
										"sectionBindingColumn": {},
										"grouping": {
											"column": {
												"expression": {
													"expressionType": 0,
													"columnPath": "OpportunityDepartment"
												}
											},
											"type": "by-value"
										},
										"aggregation": {
											"column": {
												"expression": {
													"expressionType": 1,
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "UsrTotalAmount"
													}
												}
											}
										},
										"filters": {
											"filter": {
												"items": {
													"c6cb796e-4538-49e3-9b2d-49ffcfcc86aa": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "OpportunityDepartment"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "OpportunityDepartment",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "EU non-Dutch",
																		"Id": "80412700-3d93-40c1-a80c-12f412b8c77d",
																		"value": "80412700-3d93-40c1-a80c-12f412b8c77d",
																		"displayValue": "EU non-Dutch"
																	}
																}
															},
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "EU Prospects",
																		"Id": "78436943-2540-41fe-b712-62e3bb4f4b15",
																		"value": "78436943-2540-41fe-b712-62e3bb4f4b15",
																		"displayValue": "EU Prospects"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "OpportunityDepartment"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 29
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_syzgxtg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 52,
						"colSpan": 6,
						"rowSpan": 4
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_syzgxtg_title)#",
						"data": {
							"providing": {
								"schemaName": "Lead",
								"aggregation": {
									"column": {
										"expression": {
											"expressionType": 1,
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											}
										}
									}
								},
								"filters": {
									"filter": {
										"items": {
											"09602acf-8bb1-48d5-82d8-b848aad70a0d": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": true,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "CreatedOn"
												},
												"isAggregative": false,
												"dataValueType": 7,
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"macrosType": 19
												}
											},
											"0f883da0-4930-4ebb-8d70-ea59d3cb21d4": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": true,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "CreatedOn"
												},
												"isAggregative": false,
												"dataValueType": 7,
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"macrosType": 10
												}
											},
											"2d5d9860-7b56-49bc-8d6b-30fcecedddd6": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "UsrLeadOpportunityStages"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "UsrLeadOpportunityStages",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Awaiting Sale",
																"Id": "4ad7af8a-db29-4d24-8c8f-d55b5aeb9f94",
																"value": "4ad7af8a-db29-4d24-8c8f-d55b5aeb9f94",
																"displayValue": "Awaiting Sale"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Compliance",
																"Id": "b45d6ac4-9c9d-4190-b826-44e092e2215a",
																"value": "b45d6ac4-9c9d-4190-b826-44e092e2215a",
																"displayValue": "Compliance"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Sales Agreed",
																"Id": "30d56fb5-af58-47e1-a03d-899e63e498e7",
																"value": "30d56fb5-af58-47e1-a03d-899e63e498e7",
																"displayValue": "Sales Agreed"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Closed Lost",
																"Id": "490654f5-f75a-45db-8b69-c74075706772",
																"value": "490654f5-f75a-45db-8b69-c74075706772",
																"displayValue": "Closed Lost"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Closed Won",
																"Id": "a2f1e837-a2f7-465b-8045-7b5fc27d27bd",
																"value": "a2f1e837-a2f7-465b-8045-7b5fc27d27bd",
																"displayValue": "Closed Won"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Closed",
																"Id": "249f67c5-74f3-4b2e-a03d-0daecbc3a849",
																"value": "249f67c5-74f3-4b2e-a03d-0daecbc3a849",
																"displayValue": "Closed"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
									}
								},
								"sectionBindingColumn": {
									"path": null
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_syzgxtg_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "violet"
						},
						"theme": "full-fill"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 30
			},
			{
				"operation": "insert",
				"name": "ChartWidget_2dr2bmh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 56,
						"colSpan": 6,
						"rowSpan": 8
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_2dr2bmh_title)#",
						"color": "violet",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_2dr2bmh_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"schemaName": "Lead",
										"rowCount": 50,
										"sectionBindingColumn": {},
										"grouping": {
											"column": [
												{
													"isVisible": true,
													"expression": {
														"functionType": 3,
														"datePartType": 3,
														"expressionType": 1,
														"functionArgument": {
															"columnPath": "CreatedOn",
															"expressionType": 0
														}
													}
												},
												{
													"isVisible": true,
													"expression": {
														"functionType": 3,
														"datePartType": 4,
														"expressionType": 1,
														"functionArgument": {
															"columnPath": "CreatedOn",
															"expressionType": 0
														}
													}
												}
											],
											"type": "by-date-part"
										},
										"aggregation": {
											"column": {
												"expression": {
													"expressionType": 1,
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "UsrTotalAmount"
													}
												}
											}
										},
										"filters": {
											"filter": {
												"items": {
													"70a21e55-eb54-466a-82dd-b218e8757fab": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrCurrentStage"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "UsrCurrentStage",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Opportunity",
																		"Id": "8eb3525b-0edb-4e6c-838d-b480178a20cc",
																		"value": "8eb3525b-0edb-4e6c-838d-b480178a20cc",
																		"displayValue": "Opportunity"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 31
			},
			{
				"operation": "insert",
				"name": "ChartWidget_06e2hn7",
				"values": {
					"layoutConfig": {
						"column": 7,
						"row": 56,
						"colSpan": 6,
						"rowSpan": 8
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_06e2hn7_title)#",
						"color": "violet",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "#ResourceString(ChartWidget_06e2hn7_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(ChartWidget_06e2hn7_yAxis)#",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "orange",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_06e2hn7_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"schemaName": "Lead",
										"rowCount": 50,
										"sectionBindingColumn": {},
										"grouping": {
											"column": [
												{
													"isVisible": true,
													"expression": {
														"functionType": 3,
														"datePartType": 3,
														"expressionType": 1,
														"functionArgument": {
															"columnPath": "CreatedOn",
															"expressionType": 0
														}
													}
												},
												{
													"isVisible": true,
													"expression": {
														"functionType": 3,
														"datePartType": 4,
														"expressionType": 1,
														"functionArgument": {
															"columnPath": "CreatedOn",
															"expressionType": 0
														}
													}
												}
											],
											"type": "by-date-part"
										},
										"aggregation": {
											"column": {
												"expression": {
													"expressionType": 1,
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													}
												}
											}
										},
										"filters": {
											"filter": {
												"items": {
													"227e998c-5a05-474c-b835-7f6f9b404753": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrProbability"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "UsrOpportunityProbability",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "30",
																		"Id": "a498c72b-808e-4db3-ba0f-0fe13eb0f589",
																		"value": "a498c72b-808e-4db3-ba0f-0fe13eb0f589",
																		"displayValue": "30"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								}
							},
							{
								"color": "light-green",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_06e2hn7_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"schemaName": "Lead",
										"rowCount": 50,
										"sectionBindingColumn": {},
										"grouping": {
											"column": [
												{
													"isVisible": true,
													"expression": {
														"functionType": 3,
														"datePartType": 3,
														"expressionType": 1,
														"functionArgument": {
															"columnPath": "CreatedOn",
															"expressionType": 0
														}
													}
												},
												{
													"isVisible": true,
													"expression": {
														"functionType": 3,
														"datePartType": 4,
														"expressionType": 1,
														"functionArgument": {
															"columnPath": "CreatedOn",
															"expressionType": 0
														}
													}
												}
											],
											"type": "by-date-part"
										},
										"aggregation": {
											"column": {
												"expression": {
													"expressionType": 1,
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													}
												}
											}
										},
										"filters": {
											"filter": {
												"items": {
													"227e998c-5a05-474c-b835-7f6f9b404753": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrProbability"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "UsrOpportunityProbability",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "60",
																		"Id": "25bbdc9d-f6ff-4b98-940e-66e50dd46841",
																		"value": "25bbdc9d-f6ff-4b98-940e-66e50dd46841",
																		"displayValue": "60"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								}
							},
							{
								"color": "dark-green",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_06e2hn7_series_2)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"schemaName": "Lead",
										"rowCount": 50,
										"sectionBindingColumn": {},
										"grouping": {
											"column": [
												{
													"isVisible": true,
													"expression": {
														"functionType": 3,
														"datePartType": 3,
														"expressionType": 1,
														"functionArgument": {
															"columnPath": "CreatedOn",
															"expressionType": 0
														}
													}
												},
												{
													"isVisible": true,
													"expression": {
														"functionType": 3,
														"datePartType": 4,
														"expressionType": 1,
														"functionArgument": {
															"columnPath": "CreatedOn",
															"expressionType": 0
														}
													}
												}
											],
											"type": "by-date-part"
										},
										"aggregation": {
											"column": {
												"expression": {
													"expressionType": 1,
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													}
												}
											}
										},
										"filters": {
											"filter": {
												"items": {
													"227e998c-5a05-474c-b835-7f6f9b404753": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrProbability"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "UsrOpportunityProbability",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "90",
																		"Id": "7b94ecbd-9cfb-4583-8c0a-fad1dff3e134",
																		"value": "7b94ecbd-9cfb-4583-8c0a-fad1dff3e134",
																		"displayValue": "90"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-aggregation-value",
							"direction": 1,
							"seriesIndex": 0
						}
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 32
			},
			{
				"operation": "move",
				"name": "crt.FunnelWidget52ecd7b8-dfa2-1823-37d9-043ae5bf440a",
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "move",
				"name": "crt.IndicatorWidget7ecf25f6-c73c-9840-14b2-f7711a862669",
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "move",
				"name": "crt.ChartWidgetde335e37-b065-ed6e-4b3c-9ca30415677c",
				"parentName": "Main",
				"propertyName": "items",
				"index": 15
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});