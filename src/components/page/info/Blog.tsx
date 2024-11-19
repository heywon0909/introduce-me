import * as S from '@pages/info/styled'
import { Mackey } from 'bunney-ui/Mackey'

interface Props {
    title: string
    desc: string
    tag?: string[]
}
export const Blog = ({ title, desc, tag }: Props) => {
    const fmtTag = tag?.map((v, i) => ({ id: i, value: v }))
    return (
        <S.Project>
            <S.ProjectUi>
                <Mackey />
            </S.ProjectUi>
            <S.ProjectFlex>
                <S.ProjectTitle>{title}</S.ProjectTitle>
                <S.ProjectDesc>{desc}</S.ProjectDesc>
                <S.Container>
                    {fmtTag?.map((tag) => (
                        <S.ProjectTag key={tag.id}>{tag.value}</S.ProjectTag>
                    ))}
                </S.Container>
            </S.ProjectFlex>
        </S.Project>
    )
}
