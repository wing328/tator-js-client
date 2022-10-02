# Tator.Algorithm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique integer identifying the registered algorithm. | [optional] 
**project** | **Number** | Unique integer identifying the project associated with the algorithm. | [optional] 
**name** | **String** | Unique name of the algorithm workflow. | [optional] 
**user** | **Number** | Unique integer identifying the user registering the algorithm. | [optional] 
**description** | **String** | Description of the algorithm. | [optional] 
**manifest** | **String** | Server URL to argo manifest file (.yaml) | [optional] 
**cluster** | **Number** | Unique integer identifying the job cluster. | [optional] 
**filesPerJob** | **Number** | Number of media files to be submitted to each workflow. | [optional] 
**categories** | **[String]** | List of categories the algorithm workflow belongs to | [optional] 
**parameters** | [**[AlgorithmParameter]**](AlgorithmParameter.md) | List of algorithm workflow parameters | [optional] 


