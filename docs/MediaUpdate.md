# Tator.MediaUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the media. | [optional] 
**mediaFiles** | [**MediaFiles**](MediaFiles.md) |  | [optional] 
**lastEditStart** | **Date** | Datetime of the start of the session when this media or its annotations were last edited. | [optional] 
**lastEditEnd** | **Date** | Datetime of the end of the session when this media or its annotations were last edited. | [optional] 
**attributes** | [**{String: AttributeValue}**](AttributeValue.md) | Object containing attribute values. | [optional] 
**numFrames** | **Number** | Number of frames in the video. | [optional] 
**fps** | **Number** | Frame rate of the video. | [optional] 
**codec** | **String** | Codec of the original video. | [optional] 
**width** | **Number** | Pixel width of the video. | [optional] 
**height** | **Number** | Pixel height of the video. | [optional] 
**summaryLevel** | **Number** | If supplied, this video is best summarized at this frame interval | [optional] 
**multi** | [**MultiDefinition**](MultiDefinition.md) |  | [optional] 
**live** | [**LiveUpdateDefinition**](LiveUpdateDefinition.md) |  | [optional] 
**concat** | [**[ConcatDefinition]**](ConcatDefinition.md) | List of concated videos | [optional] 
**archiveState** | **String** | Marks media for archival or retrieval. Media may not be set directly to &#x60;live&#x60; or &#x60;archived&#x60;, the system performs that transition for the user. | [optional] 



## Enum: ArchiveStateEnum


* `archive` (value: `"to_archive"`)

* `live` (value: `"to_live"`)




