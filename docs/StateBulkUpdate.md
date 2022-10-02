# Tator.StateBulkUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**{String: AttributeValue}**](AttributeValue.md) | Attribute values to bulk update an entity list. | [optional] 
**mediaQuery** | **String** | Query string used to filter media IDs. This can be used to avoid serialization and download of a media ID list. | [optional] 
**mediaIds** | **[Number]** | Array of parent media IDs for which states should be retrieved. | [optional] 
**localizationIds** | **[Number]** | Array of child localization IDs for which states should be retrieved. | [optional] 
**ids** | **[Number]** | Array of state IDs to retrieve. | [optional] 
**floatArray** | [**[FloatArrayQuery]**](FloatArrayQuery.md) | Searches on &#x60;float_array&#x60; attributes. | [optional] 


