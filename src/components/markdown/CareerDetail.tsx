import ReactMarkdown from 'react-markdown'
import { useQuery } from '@tanstack/react-query';
import { Loading } from '@components/loading/Loading';

interface Props {
    fetchUrl: string
}

export default function CareerDetail({ fetchUrl }: Props) {
 
    const { isLoading, data } = useQuery({
        queryKey: [`${fetchUrl}`],
        queryFn: () =>fetch(fetchUrl)
            .then((response) => response.text())
    })
    

    if (isLoading) return <Loading/>

    return <ReactMarkdown
        components={{
             ul: ({ children }) => <ul style={{ color: '#fff' }}>{children}</ul>,
            li: ({ children }) => <li style={{ color: '#fff' }} >{children}</li>,
            // p: ({ children }) => <p style={{ color: '#6155ff' }}>{children}</p>
  }}>{data}</ReactMarkdown>
}
