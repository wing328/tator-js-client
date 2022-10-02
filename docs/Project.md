# Tator.Project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique integer identifying the project. | [optional] 
**name** | **String** | Name of the project. | [optional] 
**summary** | **String** | Summary of the project. | [optional] [default to &#39;&#39;]
**organization** | **Number** | Unique integer identifying an organization. | [optional] 
**enableDownloads** | **Boolean** | Whether the UI should allow downloads for this project. | [optional] [default to true]
**bucket** | **Number** | Unique integer identifying a bucket. | [optional] 
**uploadBucket** | **Number** | Unique integer identifying a bucket for uploads. | [optional] 
**backupBucket** | **Number** | Unique integer identifying a bucket for backups. | [optional] 
**thumb** | **String** | S3 key of thumbnail used to represent the project. | [optional] 
**created** | **String** | Datetime when this project was created. | [optional] 
**numFiles** | **Number** | Number of files in the project. | [optional] 
**size** | **Number** | Size of the project in bytes. | [optional] 
**duration** | **Number** | Total duration of all video in the project. | [optional] 
**usernames** | **[String]** | List of usernames of project members. | [optional] 
**permission** | **String** | Permission level of user making request. | [optional] 


