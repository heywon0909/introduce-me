export const fetchingDelay = <T>(fetchingAPI: T) => {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(fetchingAPI)
        }, 5000)
    }).catch((e) => console.warn(e.error))
}

export type FetchingDelay = Awaited<ReturnType<typeof fetchingDelay>>
