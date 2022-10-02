# Tator.LocalizationSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mediaId** | **Number** | Unique integer identifying a media. | 
**type** | **Number** | Unique integer identifying a localization type. | 
**version** | **Number** | Unique integer identifying the version. | [optional] 
**x** | **Number** | Normalized horizontal position of left edge of bounding box for &#x60;box&#x60; localization types, start of line for &#x60;line&#x60; localization types, or position of dot for &#x60;dot&#x60; localization types. | [optional] 
**y** | **Number** | Normalized vertical position of top edge of bounding box for &#x60;box&#x60; localization types, start of line for &#x60;line&#x60; localization types, or position of dot for &#x60;dot&#x60; localization types. | [optional] 
**width** | **Number** | Normalized width of bounding box for &#x60;box&#x60; localization types. | [optional] 
**height** | **Number** | Normalized height of bounding box for &#x60;box&#x60; localization types. | [optional] 
**u** | **Number** | Horizontal vector component for &#x60;line&#x60; localization types. | [optional] 
**v** | **Number** | Vertical vector component for &#x60;line&#x60; localization types. | [optional] 
**points** | **[[Number]]** | List of normalized [x, y] pairs for &#x60;poly&#x60; localization types. | [optional] 
**frame** | **Number** | Frame number of this localization if it is in a video. | 
**parent** | **Number** | If a clone, the pk of the parent. | [optional] 


