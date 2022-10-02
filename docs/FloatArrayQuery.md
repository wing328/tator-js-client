# Tator.FloatArrayQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the attribute. | 
**center** | **[Number]** | Center of the query. | 
**metric** | **String** | Distance metric from center of query. | [optional] [default to &#39;l2norm&#39;]
**lowerBound** | **Number** | Return results with metric greater than this value. | [optional] [default to 0]
**upperBound** | **Number** | Return results with metric less than this value. | [optional] 
**order** | **String** | Order in which results should be returned. | [optional] [default to &#39;asc&#39;]



## Enum: MetricEnum


* `l2norm` (value: `"l2norm"`)

* `l1norm` (value: `"l1norm"`)





## Enum: OrderEnum


* `asc` (value: `"asc"`)

* `desc` (value: `"desc"`)




