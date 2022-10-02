# Tator.EncodeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vcodec** | **String** | Video codec. | [optional] [default to &#39;hevc&#39;]
**crf** | **Number** | Constant rate factor. | [optional] [default to 23]
**preset** | **String** | Preset for ffmpeg encoding. | [optional] [default to &#39;fast&#39;]
**movflags** | **String** | Movflags to specify to packager | [optional] [default to &#39;&#39;]
**tune** | **String** | Tune setting for ffmpeg. | [optional] [default to &#39;fastdecode&#39;]



## Enum: VcodecEnum


* `copy` (value: `"copy"`)

* `h264` (value: `"h264"`)

* `hevc` (value: `"hevc"`)





## Enum: PresetEnum


* `ultrafast` (value: `"ultrafast"`)

* `superfast` (value: `"superfast"`)

* `veryfast` (value: `"veryfast"`)

* `faster` (value: `"faster"`)

* `fast` (value: `"fast"`)

* `medium` (value: `"medium"`)

* `slow` (value: `"slow"`)

* `slower` (value: `"slower"`)

* `veryslow` (value: `"veryslow"`)





## Enum: TuneEnum


* `film` (value: `"film"`)

* `animation` (value: `"animation"`)

* `grain` (value: `"grain"`)

* `stillimage` (value: `"stillimage"`)

* `fastdecode` (value: `"fastdecode"`)

* `zerolatency` (value: `"zerolatency"`)

* `psnr` (value: `"psnr"`)

* `ssim` (value: `"ssim"`)




