# Tator.TranscodeSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **Number** | Unique integer identifying a video type. | 
**gid** | **String** | UUID generated for the job group. This value may be associated with messages generated during upload via the &#x60;Progress&#x60; endpoint, or it may be newly generated. The transcode workflow will use this value to generate progress messages. | 
**uid** | **String** | UUID generated for the individual job. This value may be associated with messages generated during upload via the &#x60;Progress&#x60; endpoint, or it may be newly generated. The transcode workflow will use this value to generate progress messages. | 
**url** | **String** | Upload URL for the raw video. | 
**size** | **Number** | Size of the file in bytes. This parameter is required if the supplied URL is external (not produced by &#x60;DownloadInfo&#x60; and cannot accept HEAD requests. | [optional] 
**section** | **String** | Media section name to upload to. | 
**name** | **String** | Name of the file. | 
**md5** | **String** | MD5 sum of the media file. | 
**attributes** | **Object** | Attributes to apply upon upload | [optional] 
**mediaId** | **Number** | ID of an existing media. If given, this media will be used for the transcode operation rather than creating a new object. | [optional] 


