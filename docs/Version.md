# Tator.Version

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique integer identifying a membership. | [optional] 
**name** | **String** | Name of the version. | [optional] 
**description** | **String** | Description of the version. | [optional] [default to &#39;&#39;]
**showEmpty** | **Boolean** | Whether to show this version on media for which no annotations exist. | [optional] [default to true]
**bases** | **[Number]** | Array of other version IDs that are dependencies of this version. | [optional] 
**number** | **Number** | Version number. | [optional] 
**project** | **Number** | Unique integer identifying a project. | [optional] 
**createdBy** | **String** | Name of user who created the last unmodified annotation in this version. | [optional] 


