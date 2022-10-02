# Tator.Localization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique integer identifying this localization. | [optional] 
**project** | **Number** | Unique integer identifying project of this localization. | [optional] 
**meta** | **Number** | Unique integer identifying entity type of this localization. | [optional] 
**media** | **Number** | Unique integer identifying media of this localization. | [optional] 
**thumbnailImage** | **String** | URL of thumbnail corresponding to this localization. | [optional] 
**version** | **Number** | Unique integer identifying a version. | [optional] 
**attributes** | [**{String: AttributeValue}**](AttributeValue.md) | Object containing attribute values. | [optional] 
**createdDatetime** | **Date** | Datetime this localization was created. | [optional] 
**modifiedDatetime** | **Date** | Datetime this localization was last modified. | [optional] 
**modifiedBy** | **Number** | Unique integer identifying the user who last modified this localization. | [optional] 
**user** | **Number** | Unique integer identifying the user who created this localization. | [optional] 
**x** | **Number** | Normalized horizontal position of left edge of bounding box for &#x60;box&#x60; localization types, start of line for &#x60;line&#x60; localization types, or position of dot for &#x60;dot&#x60; localization types. | [optional] 
**y** | **Number** | Normalized vertical position of top edge of bounding box for &#x60;box&#x60; localization types, start of line for &#x60;line&#x60; localization types, or position of dot for &#x60;dot&#x60; localization types. | [optional] 
**width** | **Number** | Normalized width of bounding box for &#x60;box&#x60; localization types. | [optional] 
**height** | **Number** | Normalized height of bounding box for &#x60;box&#x60; localization types. | [optional] 
**u** | **Number** | Horizontal vector component for &#x60;line&#x60; localization types. | [optional] 
**v** | **Number** | Vertical vector component for &#x60;line&#x60; localization types. | [optional] 
**points** | **[[Number]]** | List of normalized [x, y] pairs for &#x60;poly&#x60; localization types. | [optional] 
**frame** | **Number** | Frame number of this localization if it is in a video. | [optional] 
**parent** | **Number** | If a clone, the pk of the parent. | [optional] 


