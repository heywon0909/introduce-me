import ReactMarkdown from 'react-markdown'
import { useDelayedQuery } from '@hooks/useDelayedQuery'

interface Props {
    fetchUrl: string
}

export default function CareerDetail({ fetchUrl }: Props) {
    const { data } = useDelayedQuery({
        queryKey: [fetchUrl],
        queryFn: fetch(fetchUrl).then((response) => response.text()),
    })

    return (
        <ReactMarkdown
            components={{
                code: ({ children }) => (
                    <code
                        style={{
                            color: '#fff',
                            fontSize: 'clamp(0.9rem,4vw,1rem)',
                            padding: '2px',
                            width: '100%',
                            fontFamily: 'NotoSansKR-Regular',
                        }}
                    >
                        {children}
                    </code>
                ),
                ul: ({ children }) => (
                    <ul
                        style={{
                            color: '#fff',
                            fontSize: 'clamp(0.9rem,4vw,1rem)',
                            padding: '2px',
                            width: '100%',
                            fontFamily: 'NotoSansKR-Regular',
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
                            fontSize: 'clamp(0.8rem,4vw,0.9rem)',
                            fontFamily: 'NotoSansKR-Regular',
                        }}
                    >
                        {children}
                    </li>
                ),
                p: ({ children }) => (
                    <p
                        style={{
                            padding: '3px',
                            fontSize: 'clamp(0.8rem,4vw,0.9rem)',
                            fontFamily: 'NotoSansKR-Light',
                        }}
                    >
                        {children}
                    </p>
                ),
                h2: ({ children }) => (
                    <h2
                        style={{
                            padding: '10px',
                            fontSize: 'clamp(0.9rem,4vw,1rem)',
                            color: '#fff',
                            fontFamily: 'NotoSansKR-Regular',
                        }}
                    >
                        {children}
                    </h2>
                ),
                h3: ({ children }) => (
                    <h3
                        style={{
                            fontSize: 'clamp(1rem,4vw,1.1rem)',
                            color: '#fff',
                            fontFamily: 'NotoSansKR-Regular',
                        }}
                    >
                        {children}
                    </h3>
                ),
            }}
        >
            {data}
        </ReactMarkdown>
    )
}
