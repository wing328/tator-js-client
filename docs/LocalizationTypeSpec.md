# Tator.LocalizationTypeSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the localization type. | 
**description** | **String** | Description of the localization type. | [optional] 
**dtype** | **String** | Shape of this localization type. | 
**colorMap** | [**ColorMap**](ColorMap.md) |  | [optional] 
**lineWidth** | **Number** | Width of the line used to draw the localization. | [optional] 
**visible** | **Boolean** | Whether this type should be displayed in the UI. | [optional] [default to true]
**drawable** | **Boolean** | Whether this type can be drawn in the UI. Must also be visible. | [optional] [default to true]
**groupingDefault** | **Boolean** | Whether to group elements in the UI by default. | [optional] [default to true]
**attributeTypes** | [**[AttributeType]**](AttributeType.md) | Attribute type definitions. | [optional] 
**mediaTypes** | **[Number]** | List of integers identifying media types that this localization type may apply to. | 



## Enum: DtypeEnum


* `box` (value: `"box"`)

* `line` (value: `"line"`)

* `dot` (value: `"dot"`)

* `poly` (value: `"poly"`)




