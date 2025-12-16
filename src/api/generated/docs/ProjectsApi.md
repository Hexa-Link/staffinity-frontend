# ProjectsApi

All URIs are relative to *https://api.example.com/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**projectsGet**](#projectsget) | **GET** /projects | Get projects|

# **projectsGet**
> Array<ProjectDto> projectsGet()


### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

const { status, data } = await apiInstance.projectsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ProjectDto>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of projects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

