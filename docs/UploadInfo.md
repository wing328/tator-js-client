# Tator.UploadInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**urls** | **[String]** | One or more URLs for upload via one PUT request per URL. | [optional] 
**key** | **String** | An object key that can be supplied to the &#x60;Transcode&#x60; or &#x60;Media&#x60; or &#x60;File&#x60; endpoint after the file has been uploaded. | [optional] 
**uploadId** | **String** | An upload ID that can be supplied to the &#x60;UploadCompletion&#x60; endpoint after the file has been uploaded. Only contains a value if &#x60;num_parts&#x60; &gt; 1. | [optional] 


