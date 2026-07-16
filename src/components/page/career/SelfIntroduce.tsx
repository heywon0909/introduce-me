import * as S from '@pages/career/styled'
import { Mackey } from 'bunney-ui/Mackey'

interface Props {
    bg: string
}

export const SelfIntroduce = ({ bg }: Props) => {
    return (
        <S.SectionBG bg={bg}>
            <S.Grid />
            <S.IntroduceArticle>
                <S.Section dir="row" style={{ gap: '20px' }}>
                    <S.IntroduceText>
                        <S.Title>안녕하세요</S.Title>
                        <S.Title>프론트엔드 개발자 박혜원입니다.</S.Title>
                        <S.Text>
                            업무 중 마주하는 크고 작은 불편함을 주도적으로
                            개선하며 성장하는 개발자가 되고자합니다.
                        </S.Text>
                        <S.Link href="https://my.surfit.io/w/979290367">
                            경력 기술서
                        </S.Link>
                    </S.IntroduceText>
                    <S.Group>
                        <Mackey size={13} />
                    </S.Group>
                </S.Section>
            </S.IntroduceArticle>
        </S.SectionBG>
    )
}
