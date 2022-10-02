# Tator.StateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique integer identifying a state type. | [optional] 
**project** | **Number** | Unique integer identifying project for this state type. | [optional] 
**dtype** | **String** | String indicating data type. Always equal to \&quot;state\&quot;. | [optional] 
**media** | **[Number]** | List of integers identifying media types that this state type may apply to. | [optional] 
**name** | **String** | Name of the state type. | [optional] 
**description** | **String** | Description of the state type. | [optional] 
**association** | **String** | Type of object this state type is associated with. | [optional] 
**interpolation** | **String** | Interpolation method used by the web interface. | [optional] [default to &#39;latest&#39;]
**visible** | **Boolean** | Whether this state type should be displayed. | [optional] 
**groupingDefault** | **Boolean** | Whether to group elements in the UI by default. | [optional] [default to true]
**attributeTypes** | [**[AttributeType]**](AttributeType.md) | Attribute type definitions. | [optional] 
**deleteChildLocalizations** | **Boolean** | True if child localizations should be deleted when this state is deleted. Localizations will only be deleted if they are not associated with another state.  | [optional] [default to false]
**defaultLocalization** | **Number** | If this is a track type, this is a unique integer identifying the default localization type that is created when a track is created via the web interface. | [optional] 



## Enum: AssociationEnum


* `Media` (value: `"Media"`)

* `Frame` (value: `"Frame"`)

* `Localization` (value: `"Localization"`)





## Enum: InterpolationEnum


* `none` (value: `"none"`)

* `latest` (value: `"latest"`)

* `attr_style_range` (value: `"attr_style_range"`)




