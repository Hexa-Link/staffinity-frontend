# OrganizationsApi

All URIs are relative to *https://api.example.com/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**orgsGet**](#orgsget) | **GET** /orgs | Get organizations|

# **orgsGet**
> Array<OrganizationDto> orgsGet()


### Example

```typescript
import {
    OrganizationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationsApi(configuration);

const { status, data } = await apiInstance.orgsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<OrganizationDto>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of organizations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

