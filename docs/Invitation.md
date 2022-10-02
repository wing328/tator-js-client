# Tator.Invitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique integer identifying an invitation. | [optional] 
**organization** | **Number** | Unique integer identifying an organization. | [optional] 
**createdBy** | **Number** | Unique integer identifying a user. | [optional] 
**createdUsername** | **String** | Username of creator of the invitation. | [optional] 
**createdDatetime** | **Date** | Datetime this invitation was created. | [optional] 
**status** | **String** | Status of the invitation. | [optional] 
**email** | **String** | Email address of invitee. | [optional] 
**permission** | **String** | User permission level for the organization. | [optional] 



## Enum: StatusEnum


* `Pending` (value: `"Pending"`)

* `Expired` (value: `"Expired"`)

* `Accepted` (value: `"Accepted"`)





## Enum: PermissionEnum


* `Member` (value: `"Member"`)

* `Admin` (value: `"Admin"`)




