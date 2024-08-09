import { QueryKey, useSuspenseQuery } from '@tanstack/react-query'
import { fetchingDelay } from '@utils/fetchingDelay'

export const useDelayedQuery = <
    TQueryFnData = unknown,
    TQueryKey extends QueryKey = QueryKey
>({
    queryKey,
    queryFn,
}: {
    queryKey: TQueryKey
    queryFn: Promise<TQueryFnData>
}) => {
    return useSuspenseQuery({
        queryKey,
        queryFn: () => fetchingDelay(queryFn) as TQueryFnData,
    })
}
