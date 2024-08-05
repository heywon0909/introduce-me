export const fetchingDelay = async <TQueryFnData = unknown>(
    fetchingAPI: Promise<TQueryFnData>
) => {
    let result
    try {
        result = new Promise((resolve) =>
            setTimeout(() => resolve(fetchingAPI), 1000)
        )
    } catch (error) {
        console.warn(error)
    }
    return result
}

export type FetchingDelay = Awaited<ReturnType<typeof fetchingDelay>>
