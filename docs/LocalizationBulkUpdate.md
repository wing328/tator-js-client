# Tator.LocalizationBulkUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**{String: AttributeValue}**](AttributeValue.md) | Attribute values to bulk update an entity list. | [optional] 
**version** | **Number** | Unique integer identifying a version. | [optional] 
**mediaQuery** | **String** | Query string used to filter media IDs. This can be used to avoid serialization and download of a media ID list. | [optional] 
**mediaIds** | **[Number]** | Array of parent media IDs for which localizations should be retrieved. | [optional] 
**ids** | **[Number]** | Array of localization IDs to retrieve. | [optional] 
**stateIds** | **[Number]** | Array of parent state IDs for which localizations should be retrieved. | [optional] 
**floatArray** | [**[FloatArrayQuery]**](FloatArrayQuery.md) | Searches on &#x60;float_array&#x60; attributes. | [optional] 


