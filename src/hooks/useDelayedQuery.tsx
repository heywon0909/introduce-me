import { DefaultError, QueryClient, QueryKey, QueryObserverBaseResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { FetchingDelay, fetchingDelay } from '@utils/fetchingDelay';

export const useDelayedQuery = async <TQueryFnData = unknown, TError = DefaultError,TData = TQueryFnData,TQueryKey extends QueryKey = QueryKey>(options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, queryClient?: QueryClient):Promise<QueryObserverBaseResult> => {
    let result;
    try {
        result = await fetchingDelay<UseQueryResult<TData, TError>>(useQuery(options, queryClient));
        console.log('result',result)
    } catch {
        console.warn(result)
    }
    return result;
}

