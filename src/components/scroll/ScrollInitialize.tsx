import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

export const ScrollInitialLize = () => {
    const location = useLocation()
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    return null
}
