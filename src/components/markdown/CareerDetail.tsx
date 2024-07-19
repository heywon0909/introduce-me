import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'

interface Props {
    fetchUrl: string
}

export default function CareerDetail({ fetchUrl }: Props) {
    const [markdown, setMarkdown] = useState<string>()
    useEffect(() => {
        fetch(fetchUrl)
            .then((response) => response.text())
            .then((text) => setMarkdown(text))
    }, [])

    if (markdown === undefined) return null

    return <ReactMarkdown
        components={{
             ul: ({ children }) => <ul style={{ color: '#fff' }}>{children}</ul>,
            li: ({ children }) => <li style={{ color: '#fff' }} >{children}</li>,
            p: ({ children }) => <p style={{ color: '#6155ff' }}>{children}</p>
  }}>{markdown}</ReactMarkdown>
}
