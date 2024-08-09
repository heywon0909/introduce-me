import { useRouteError } from 'react-router'

export const ErrorPage: React.FC = () => {
    const error = useRouteError()
    console.error(error)

    // Uncaught ReferenceError: path is not defined
    return (
        <>
            <div>error is found</div>
        </>
    )
}
