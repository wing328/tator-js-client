# Tator.MediaTypeUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the media type. | [optional] 
**description** | **String** | Description of the media type. | [optional] 
**fileFormat** | **String** | File extension. If omitted, any recognized file extension for the given dtype is accepted for upload. Do not include a dot prefix. | [optional] 
**archiveConfig** | [**[ArchiveConfig]**](ArchiveConfig.md) | Archive config definitions. If null, the raw file will be uploaded to Tator. | [optional] 
**streamingConfig** | [**[ResolutionConfig]**](ResolutionConfig.md) | Streaming config definition. If null, the default will be used. | [optional] 
**visible** | **Boolean** | Visible configuration | [optional] 
**defaultVolume** | **Number** | Default audio volume for this media type. | [optional] 
**defaultBox** | **Number** | Unique integer identifying default box type for drawing. | [optional] 
**defaultLine** | **Number** | Unique integer identifying default line type for drawing. | [optional] 
**defaultDot** | **Number** | Unique integer identifying default dot type for drawing. | [optional] 


