import { Component } from 'react'

interface State {
    hasError: boolean
    info?: Error
}
interface Props {
    children?: React.ReactNode
}
const initialState: State = { hasError: false }
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

    componentDidCatch(error: Error, errorInfo) {
        // 에러 로깅 등의 작업을 수행할 수 있습니다.
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>문제가 발생했습니다.</h1>
        }

        return this.props.children
    }
}
