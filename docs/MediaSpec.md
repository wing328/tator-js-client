# Tator.MediaSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **Number** | Unique integer identifying a media type. Use -1 to automatically select the media type if only one media type exists in a project. | 
**gid** | **String** | Group ID for the upload group of this media. | [optional] 
**uid** | **String** | Unique ID for the upload of this media. | [optional] 
**url** | **String** | Upload URL for the image if this is an image type, URL of hosted original media if this is a video type. For video types this field is just for reference. | [optional] 
**thumbnailUrl** | **String** | Upload URL for the media thumbnail if already generated. | [optional] 
**thumbnailGifUrl** | **String** | Upload URL for the video gif thumbnail if already generated. | [optional] 
**section** | **String** | Media section name. | 
**name** | **String** | Name of the file. | 
**md5** | **String** | MD5 sum of the media file. | 
**numFrames** | **Number** | Number of frames for videos. | [optional] 
**fps** | **Number** | Frame rate for videos. | [optional] 
**codec** | **String** | Codec for videos. | [optional] 
**width** | **Number** | Horizontal resolution in pixels. | [optional] 
**height** | **Number** | Vertical resolution in pixels. | [optional] 
**summaryLevel** | **Number** | If supplied, this video is best summarized at this frame interval | [optional] 
**attributes** | **Object** | Attributes for the media | [optional] 


