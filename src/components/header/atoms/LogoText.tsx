import * as S from './styled'
interface Props {
    name: string
    imgUrl: string
}
export default function LogoText({ name, imgUrl }: Props) {
    return (
        <S.LogoWrapper to="/">
            {name?.split('').map((v, i) => (
                <S.Logo key={v + i}>{v}</S.Logo>
            ))}
            <S.LogoImgWrapper>
                <S.LogoImg src={imgUrl} alt="logo" />
            </S.LogoImgWrapper>
        </S.LogoWrapper>
    )
}
