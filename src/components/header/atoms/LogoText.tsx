import { Logo } from 'bunney-ui/Logo'
import * as S from './styled'
interface Props {
    name: string
    imgUrl?: string
}
export default function LogoText({ name }: Props) {
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
}
