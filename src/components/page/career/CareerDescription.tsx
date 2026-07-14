import * as S from '@pages/career/styled'
import FloatingBubbles from './FloatingBubble'

interface Props {
    bg: string
    company: string
    description: string
    details: string[]
}
export const CareerDescription = ({
    bg,
    company,
    description,
    details,
}: Props) => {
    return (
        <S.SectionBG bg={bg}>
            <FloatingBubbles />
            <S.Article>
                <S.Company>
                    <S.Title>{company}</S.Title>
                    <S.Text>{description}</S.Text>
                </S.Company>
                <S.Description>
                    <S.Ul>
                        {details.map((detail) => (
                            <S.Li>{detail}</S.Li>
                        ))}
                    </S.Ul>
                </S.Description>
            </S.Article>
        </S.SectionBG>
    )
}
