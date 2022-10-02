# Tator.State

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique integer identifying the state. | [optional] 
**meta** | **Number** | Unique integer identifying the entity type. | [optional] 
**media** | **[Number]** | List of media IDs that this state applies to. | [optional] 
**localizations** | **[Number]** | List of localization IDs that this state applies to. | [optional] 
**segments** | **[[Number]]** | List of contiguous frame ranges where a localization associated state has localization data. | [optional] 
**attributes** | [**{String: AttributeValue}**](AttributeValue.md) | Object containing attribute values. | [optional] 
**createdDatetime** | **Date** | Datetime this state was created. | [optional] 
**modifiedDatetime** | **Date** | Datetime this state was last modified. | [optional] 
**modifiedBy** | **Number** | Unique integer identifying the user who last modified this state. | [optional] 
**createdBy** | **Number** | Unique integer identifying the user who created this state. | [optional] 
**version** | **Number** | Unique integer identifying the version. | [optional] 
**frame** | **Number** | Frame number this state applies to. | [optional] 


