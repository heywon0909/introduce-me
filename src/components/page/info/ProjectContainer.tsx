import * as S from '@pages/info/styled'
import { PropsWithChildren } from 'react'
interface Props extends PropsWithChildren {
    title: string
}
export const ProjectContainer = ({ title, children }: Props) => {
    return (
        <S.UserDesc className="item">
            <S.Title>{title}</S.Title>
            {children}
        </S.UserDesc>
    )
}
