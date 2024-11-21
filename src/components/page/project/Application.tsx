import * as S from '@pages/project/styled'
import { ReactNode } from 'react'
interface Props {
    title?: string
    desc: string
    icon: ReactNode
    url: string
}
export const Application = ({ desc, icon, url }: Props) => {
    return (
        <S.AppContainer onClick={() => (location.href = url)}>
            <S.App style={{ background: '#fff' }}>{icon}</S.App>
            <S.AppDesc>{desc}</S.AppDesc>
        </S.AppContainer>
    )
}
