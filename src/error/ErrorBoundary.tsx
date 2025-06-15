import { Component, ReactNode } from 'react'

interface State {
    hasError: boolean
    info?: Error | null
}
export interface ErrorFallbackProps<ErrorType extends Error = Error> {
    error: ErrorType
    reset: (...args: unknown[]) => void
}
export type ErrorFallbackComponent = <ErrorType extends Error>(
    props: ErrorFallbackProps<ErrorType>
) => JSX.Element
interface Props {
    errorFallback: ErrorFallbackComponent
    children?: ReactNode
    resetQuery?: () => void
    keys?: unknown[]
}
const initialState: State = { hasError: false, info: null }

const compareArr = (prevArr: unknown[], nextArr: unknown[]) =>
    prevArr.length === nextArr.length &&
    prevArr.some((item, index) => !Object.is(item, nextArr[index]))

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = initialState
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, info: error }
    }

    reset() {
        this.setState(initialState)
    }
    resetBoundary = () => {
        const { resetQuery } = this.props
        resetQuery?.()
        this.reset()
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        const { info } = this.state
        const { keys } = this.props
        if (keys === undefined) return

        if (
            info !== null &&
            prevState.info !== null &&
            prevProps.keys &&
            compareArr(prevProps.keys, keys)
        ) {
            this.resetBoundary()
        }
    }

    render() {
        const { hasError, info } = this.state
        const isError = hasError && info !== null
        const fallbackErrorUI = (err: ErrorFallbackProps['error']) =>
            this.props.errorFallback({ error: err, reset: this.resetBoundary })
        if (isError && info) return fallbackErrorUI(info)

        return this.props.children
    }
}
