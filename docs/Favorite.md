# Tator.Favorite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique integer identifying a favorite. | [optional] 
**user** | **Number** | Unique integer identifying a user. | [optional] 
**meta** | **Number** | Unique integer identifying entity type of this entry. | [optional] 
**name** | **String** | Name of the favorite. | [optional] 
**values** | **{String: Object}** | Attribute name/value pairs. | [optional] 
**page** | **Number** | Integer specifying page to display on. Should be 1-10. | [optional] [default to 1]
**entityTypeName** | **String** | Name of entity type associated with the favorite | [optional] 



## Enum: EntityTypeNameEnum


* `Localization` (value: `"Localization"`)

* `State` (value: `"State"`)




