export const bytesToBase64DataUrl = async (url: string): Promise<string> => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${String(response.status)}`)
        }
        const blob = await response.blob()
        return await new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => {
                resolve(reader.result as string)
            }
            reader.onerror = reject
            reader.readAsDataURL(blob)
        })
    } catch (error) {
        console.error('Failed to fetch or encode image:', error)
        throw error
    }
}
