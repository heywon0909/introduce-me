import * as S from '@pages/info/styled'
interface Props {
    imageUrl: string
    title: string
    desc: string
    tag?: string[]
}
export const Project = ({ imageUrl, title, desc, tag }: Props) => {
    const fmtTag = tag?.map((v, i) => ({ id: i, value: v }))
    return (
        <S.Project>
            <S.ProjectImg src={imageUrl} />
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
