import { LazyImage } from '@components/common/Image/LazyImage'
import * as S from '@pages/info/styled'
interface Props {
    imageUrl: string
    optimizationImgUrl: string
    title: string
    desc: string
    tag?: string[]
    id: number
}
export const Project = ({
    id,
    imageUrl,
    optimizationImgUrl,
    title,
    desc,
    tag,
}: Props) => {
    const fmtTag = tag?.map((v, i) => ({ id: i, value: v }))
    return (
        <S.Project to={`/project/${id}`}>
            <LazyImage
                src={optimizationImgUrl}
                fallbackComponent={
                    <S.ProjectImg
                        src={imageUrl}
                        loading="lazy"
                        alt="프로젝트"
                    />
                }
            />
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
