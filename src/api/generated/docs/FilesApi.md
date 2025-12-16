# FilesApi

All URIs are relative to *https://api.example.com/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**filesPresignPost**](#filespresignpost) | **POST** /files/presign | Get presigned URL for file upload|

# **filesPresignPost**
> PresignedUrlResponse filesPresignPost()


### Example

```typescript
import {
    FilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

const { status, data } = await apiInstance.filesPresignPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PresignedUrlResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Presigned URL details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

