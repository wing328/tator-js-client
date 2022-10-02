# Tator.AttributeTypeUpdateNewAttributeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the attribute. | [optional] 
**description** | **String** | Description of the attribute. | [optional] 
**dtype** | **String** | Data type of the attribute. | [optional] 
**required** | **Boolean** | True if this attribute is required for POST requests. | [optional] 
**order** | **Number** | Integer specifying relative order this attribute is displayed in the UI. Negative values are hidden by default. | [optional] 
**_default** | [**AttributeValue**](AttributeValue.md) |  | [optional] 
**minimum** | **Number** | Lower bound for int or float dtype. | [optional] 
**maximum** | **Number** | Upper bound for int or float dtype. | [optional] 
**choices** | **[String]** | Array of possible values; required for enum dtype. | [optional] 
**labels** | **[String]** | Array of labels for enum dtype. | [optional] 
**autocomplete** | [**AutocompleteService**](AutocompleteService.md) |  | [optional] 
**useCurrent** | **Boolean** | True to use current datetime as default for datetime dtype. | [optional] 
**size** | **Number** | Number of elements for &#x60;float_array&#x60; dtype. | [optional] 
**style** | **String** | Available options: disabled|long_string|start_frame|end_frame|start_frame_check|end_frame_check   Multiple options can be chained together separated by white space. \&quot;disabled\&quot; will not allow the user to edit the attribute in the Tator GUI. Create a text area string if \&quot;long_string\&quot; is combined with \&quot;string\&quot; dtype. \&quot;start_frame\&quot; and \&quot;end_frame\&quot; used in conjunction with \&quot;attr_style_range\&quot; interpolation. \&quot;start_frame_check and \&quot;end_frame_check\&quot; are used in conjunction with \&quot;attr_style_range\&quot; interpolation. \&quot;range_set and in_video_check\&quot; is used in conjunction with \&quot;attr_style_range\&quot; interpolation. When associated with a bool, these checks will result in Tator GUI changes with the corresponding start_frame and end_frame attributes. | [optional] 



## Enum: DtypeEnum


* `bool` (value: `"bool"`)

* `int` (value: `"int"`)

* `float` (value: `"float"`)

* `enum` (value: `"enum"`)

* `string` (value: `"string"`)

* `datetime` (value: `"datetime"`)

* `geopos` (value: `"geopos"`)

* `float_array` (value: `"float_array"`)




