# Tator.Membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique integer identifying a membership. | [optional] 
**project** | **Number** | Unique integer identifying project for this membership. | [optional] 
**user** | **Number** | Unique integer identifying a user. | [optional] 
**username** | **String** | Username for the membership. | [optional] 
**firstName** | **String** | First name of user. | [optional] 
**lastName** | **String** | Last name of user. | [optional] 
**email** | **String** | Email address of user. | [optional] 
**permission** | **String** | User permission level for the project. | [optional] 
**defaultVersion** | **Number** | Unique integer identifying a version. | [optional] 



## Enum: PermissionEnum


* `View Only` (value: `"View Only"`)

* `Can Edit` (value: `"Can Edit"`)

* `Can Transfer` (value: `"Can Transfer"`)

* `Can Execute` (value: `"Can Execute"`)

* `Full Control` (value: `"Full Control"`)




