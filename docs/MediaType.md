# Tator.MediaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique integer identifying a media type. | [optional] 
**project** | **Number** | Unique integer identifying project for this media type. | [optional] 
**name** | **String** | Name of the media type. | [optional] 
**description** | **String** | Description of the media type. | [optional] [default to &#39;&#39;]
**dtype** | **String** | Type of the media, image or video. | [optional] 
**fileFormat** | **String** | File extension. If omitted, any recognized file extension for the given dtype is accepted for upload. Do not include a dot prefix. | [optional] 
**defaultVolume** | **Number** | Default audio volume for this media type. | [optional] 
**attributeTypes** | [**[AttributeType]**](AttributeType.md) | Attribute type definitions. | [optional] 
**archiveConfig** | [**[ArchiveConfig]**](ArchiveConfig.md) | Archive config definitions. If null, the raw file will be uploaded to Tator. | [optional] 
**streamingConfig** | [**[ResolutionConfig]**](ResolutionConfig.md) | Streaming config definition. If null, the default will be used. | [optional] 
**overlayConfig** | **{String: Object}** | Overlay configuration | [optional] 
**visible** | **Boolean** | Visible configuration | [optional] 
**defaultBox** | **Number** | Unique integer identifying default box type for drawing. | [optional] 
**defaultLine** | **Number** | Unique integer identifying default line type for drawing. | [optional] 
**defaultDot** | **Number** | Unique integer identifying default dot type for drawing. | [optional] 



## Enum: DtypeEnum


* `image` (value: `"image"`)

* `video` (value: `"video"`)

* `multi` (value: `"multi"`)

* `live` (value: `"live"`)




