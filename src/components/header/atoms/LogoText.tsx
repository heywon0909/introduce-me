import { Logo } from 'bunney-ui/Logo'
import * as S from './styled'
import { memo } from 'react'
interface Props {
    name: string
    imgUrl?: string
}
export const LogoText = memo(({ name }: Props) => {
    return (
        <S.LogoWrapper to="/">
            {name?.split('').map((v, i) => (
                <S.Logo key={v + i}>{v}</S.Logo>
            ))}
            <S.LogoImgWrapper>
                <Logo size={2} color="#3110ff" />
            </S.LogoImgWrapper>
        </S.LogoWrapper>
    )
})

LogoText.displayName = 'LogoText'
