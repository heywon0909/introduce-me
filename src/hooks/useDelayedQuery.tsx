import {
    DefaultError,
    QueryKey,
    useSuspenseQuery,
    UseSuspenseQueryResult,
} from '@tanstack/react-query'
import { fetchingDelay } from '@utils/fetchingDelay'

export const useDelayedQuery = <
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData
>({
    queryKey,
    queryFn,
}: {
    queryKey: QueryKey
    queryFn: Promise<TQueryFnData>
}): UseSuspenseQueryResult<TData, TError> =>
    useSuspenseQuery({
        queryKey,
        queryFn: () => fetchingDelay(queryFn) as TQueryFnData,
    })
