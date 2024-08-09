import { ErrorFallback } from '@common/error/ErrorFallback'
import { ErrorBoundary } from './ErrorBoundary'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { useCallback } from 'react'
import { useLocation } from 'react-router'
interface Props {
    children: React.ReactNode
}
export const ErrorCatchWrapper = ({ children }: Props) => {
    const { reset } = useQueryErrorResetBoundary()
    const resetQuery = useCallback(() => reset(), [])
    const location = useLocation()

    return (
        <ErrorBoundary
            errorFallback={({ error, reset: resetQuery }) => {
                return <ErrorFallback error={error} reset={resetQuery} />
            }}
            resetQuery={resetQuery}
            keys={[location]}
        >
            {children}
        </ErrorBoundary>
    )
}
