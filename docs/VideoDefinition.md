# Tator.VideoDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **String** | Relative URL to the file. | 
**size** | **Number** | File size in bytes. | [optional] 
**bitRate** | **Number** | Bit rate in bits per second | [optional] 
**codec** | **String** | Human readable codec. | 
**resolution** | **[Number]** | Resolution of the video in pixels (height, width). | 
**segmentInfo** | **String** | Path to json file containing segment info. Required if media role is &#x60;streaming&#x60;. | [optional] 
**host** | **String** | If supplied will use this instead of currently connected host, e.g. https://example.com | [optional] 
**httpAuth** | **String** | If specified will be used for HTTP authorization in request for media, i.e. \&quot;bearer TOKEN\&quot;. | [optional] 
**codecMime** | **String** | Example mime: \&quot;video/mp4; codecs&#x3D;\&quot;avc1.64001e\&quot;\&quot;. Only relevant for streaming files, will assume example above if not present. | [optional] 
**codecDescription** | **String** | Description other than codec. | [optional] 


