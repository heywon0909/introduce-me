import { ReactNode } from 'react'

interface Props {
    src: string
    fallbackComponent: ReactNode
}
export const LazyImage = ({ src, fallbackComponent }: Props) => {
    return (
        <picture>
            <source srcSet={src} type="image/webp"></source>
            {fallbackComponent}
        </picture>
    )
}
