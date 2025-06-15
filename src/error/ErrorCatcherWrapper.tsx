import { ErrorFallback } from '@common/error/ErrorFallback'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { ReactNode, useCallback } from 'react'
import { useLocation } from 'react-router'
import { ErrorBoundary } from './ErrorBoundary'
interface Props {
    children: ReactNode
}
export const ErrorCatchWrapper = ({ children }: Props) => {
    const { reset } = useQueryErrorResetBoundary()
    const resetQuery = useCallback(() => {
        reset()
    }, [])
    const location = useLocation()

    return (
        <ErrorBoundary
            errorFallback={({ error, reset: resetQuery }) => (
                <ErrorFallback error={error} reset={resetQuery} />
            )}
            resetQuery={resetQuery}
            keys={[location]}
        >
            {children}
        </ErrorBoundary>
    )
}
