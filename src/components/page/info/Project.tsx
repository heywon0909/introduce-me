import * as S from '@pages/info/styled'
interface Props {
    imageUrl: string
    title: string
    desc: string
}
export const Project = ({ imageUrl, title, desc }: Props) => {
    return (
        <S.Project>
            <S.ProjectImg src={imageUrl} />
            <S.ProjectFlex>
                <S.ProjectTitle>{title}</S.ProjectTitle>
                <S.ProjectDesc>{desc}</S.ProjectDesc>
            </S.ProjectFlex>
        </S.Project>
    )
}
