import { bytesToBase64DataUrl } from '@utils/imageEncoding'
import { useEffect, useState } from 'react'

export const useImgEncoding = (url: string) => {
    const [isLoading, setIsLoading] = useState(true)
    const [image, setImage] = useState<string>()
    const getResult = (res: DOMException | string) => {
        if (typeof res === 'string') {
            setImage(res)
        }
        setIsLoading(false)
        return res
    }

    useEffect(() => {
        void bytesToBase64DataUrl(url).then((res) =>
            getResult(res as DOMException | string)
        )
    }, [url])

    return { image, isLoading }
}
