import ReactMarkdown from 'react-markdown'
import { useDelayedQuery } from '@hooks/useDelayedQuery'
import { BunneyLoading } from 'bunney-ui/BunneyLoading'

interface Props {
    fetchUrl: string
}

export default function CareerDetail({ fetchUrl }: Props) {
    const { isLoading, data } = useDelayedQuery({
        queryKey: [`${fetchUrl}`],
        queryFn: fetch(fetchUrl).then((response) => response.text()),
    })

    if (isLoading) return <BunneyLoading />

    return (
        <ReactMarkdown
            components={{
                code: ({ children }) => (
                    <code
                        style={{
                            color: '#fff',
                            fontSize: '1rem',
                            padding: '2px',
                            width: '100%',
                            fontFamily: 'NotoSansKR-Light',
                        }}
                    >
                        {children}
                    </code>
                ),
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
                    <li
                        style={{
                            color: '#fff',
                            padding: '5px',
                        }}
                    >
                        {children}
                    </li>
                ),
                p: ({ children }) => (
                    <p
                        style={{
                            padding: '3px',
                        }}
                    >
                        {children}
                    </p>
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
