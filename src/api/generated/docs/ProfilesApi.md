# ProfilesApi

All URIs are relative to *https://api.example.com/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**profilesGet**](#profilesget) | **GET** /profiles | Get current profile|

# **profilesGet**
> ProfileDto profilesGet()


### Example

```typescript
import {
    ProfilesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfilesApi(configuration);

const { status, data } = await apiInstance.profilesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ProfileDto**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Profile details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

