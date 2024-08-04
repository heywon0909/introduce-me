export type AsyncFunction<A, O> = (...args: Array<A>) => Promise<O>
export const fetchingDelay = <A, O>(fetchingAPI: AsyncFunction<A, O>) => {
    return new Promise((resolve) =>
        setTimeout(() => resolve(fetchingAPI), 1000)
    )
}

export type FetchingDelay = Awaited<ReturnType<typeof fetchingDelay>>
