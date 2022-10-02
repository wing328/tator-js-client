# Tator.AlgorithmSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Unique name of the algorithm workflow. | 
**user** | **Number** | Unique integer identifying the user registering the algorithm. | 
**description** | **String** | Description of the algorithm. | [optional] 
**manifest** | **String** | Server URL to argo manifest file (.yaml) | 
**cluster** | **Number** | Unique integer identifying the job cluster. | [optional] 
**filesPerJob** | **Number** | Number of media files to be submitted to each workflow. | 
**categories** | **[String]** | List of categories the algorithm workflow belongs to | [optional] 
**parameters** | [**[AlgorithmParameter]**](AlgorithmParameter.md) | List of algorithm workflow parameters | [optional] 


