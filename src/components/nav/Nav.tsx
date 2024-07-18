import * as S from './styled'
interface Props {
    hover: boolean
    handleHover: (flg: boolean) => void
}
export default function Nav({ hover, handleHover }: Props) {
    return (
        <S.WrapNav>
            <S.FloatNav
                left={true}
                onMouseOver={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
            >
                <S.Nav>
                    {hover && (
                        <>
                            <S.NavWrapper>
                                <S.NavImg
                                    src={'/assets/image/woman.png'}
                                    alt="info"
                                />
                                <S.NavText>Info</S.NavText>
                            </S.NavWrapper>
                            <S.NavWrapper>
                                <S.NavImg
                                    src={'/assets/image/pencil.png'}
                                    alt="skills"
                                />
                                <S.NavText>Skills</S.NavText>
                            </S.NavWrapper>
                            <S.NavWrapper>
                                <S.NavImg
                                    src={'/assets/image/resume.png'}
                                    alt="info"
                                />
                                <S.NavText>Resume</S.NavText>
                            </S.NavWrapper>
                            <S.NavWrapper>
                                <S.NavImg
                                    src={'/assets/image/idea.png'}
                                    alt="info"
                                />
                                <S.NavText>Project</S.NavText>
                            </S.NavWrapper>
                        </>
                    )}
                    {!hover && (
                        <S.NavWrapper dir="column">
                            <S.NavTitle>S</S.NavTitle>
                            <S.NavTitle>H</S.NavTitle>
                            <S.NavTitle>O</S.NavTitle>
                            <S.NavTitle>W</S.NavTitle>
                            <S.NavTitle>　</S.NavTitle>
                            <S.NavTitle>M</S.NavTitle>
                            <S.NavTitle>O</S.NavTitle>
                            <S.NavTitle>R</S.NavTitle>
                            <S.NavTitle>E</S.NavTitle>
                        </S.NavWrapper>
                    )}
                </S.Nav>
            </S.FloatNav>
        </S.WrapNav>
    )
}
