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
                <div>
                    <S.Title>안녕하세요</S.Title>
                    <S.Title>프론트엔드 개발자 박혜원입니다.</S.Title>
                    <S.Text>
                        업무 중 마주하는 크고 작은 불편함을 주도적으로 개선하며
                        성장하는 개발자가 되고자합니다.
                    </S.Text>
                </div>
                <S.Group>
                    <Mackey size={13} />
                </S.Group>
            </S.IntroduceArticle>
        </S.SectionBG>
    )
}
