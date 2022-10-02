# Tator.MediaBulkUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**{String: AttributeValue}**](AttributeValue.md) | Attribute values to bulk update an entity list. | [optional] 
**archiveState** | **String** | Marks media for archival or retrieval. Media may not be set directly to &#x60;live&#x60; or &#x60;archived&#x60;, the system performs that transition for the user. | [optional] 
**ids** | **[Number]** | Array of media IDs to retrieve. | [optional] 
**localizationIds** | **[Number]** | Array of child localization IDs for which media should be retrieved. | [optional] 
**stateIds** | **[Number]** | Array of child state IDs for which media should be retrieved. | [optional] 
**floatArray** | [**[FloatArrayQuery]**](FloatArrayQuery.md) | Searches on &#x60;float_array&#x60; attributes. | [optional] 



## Enum: ArchiveStateEnum


* `archive` (value: `"to_archive"`)

* `live` (value: `"to_live"`)




