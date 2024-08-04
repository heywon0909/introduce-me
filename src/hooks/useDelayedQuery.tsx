import { QueryKey, useQuery } from '@tanstack/react-query';
import {AsyncFunction, fetchingDelay } from '@utils/fetchingDelay';

export const useDelayedQuery = <T extends QueryKey,A, O>(key:T,fn:AsyncFunction<A,O>) => {
    return useQuery({
        queryKey:key,
        queryFn: ()=>fetchingDelay(fn)
    })
}

