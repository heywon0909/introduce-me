import ReactMarkdown from 'react-markdown'
import { useQuery } from '@tanstack/react-query'
import { Loading } from '@components/loading/Loading'

interface Props {
    fetchUrl: string
}

export default function CareerDetail({ fetchUrl }: Props) {
    const { isLoading, data } = useQuery({
        queryKey: [`${fetchUrl}`],
        queryFn: () => fetch(fetchUrl).then((response) => response.text()),
    })

    if (isLoading) return <Loading />

    return (
        <ReactMarkdown
            components={{
                ul: ({ children }) => (
                    <ul
                        style={{
                            color: '#fff',
                            fontSize: '1rem',
                            padding: '2px',
                            width: '100%',
                        }}
                    >
                        {children}
                    </ul>
                ),
                li: ({ children }) => (
                    <li style={{ color: '#fff', padding: '5px' }}>
                        {children}
                    </li>
                ),
                p: ({ children }) => (
                    <p style={{ padding: '3px' }}>{children}</p>
                ),
                h2: ({ children }) => (
                    <h2
                        style={{
                            padding: '10px',
                            fontSize: '1rem',
                            color: '#a5bdfd',
                        }}
                    >
                        {children}
                    </h2>
                ),
            }}
        >
            {data}
        </ReactMarkdown>
    )
}
