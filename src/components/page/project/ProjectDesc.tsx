import { LazyImage } from '@components/common/Image/LazyImage'
import CareerDetail from '@components/markdown/CareerDetail'
import * as S from '@pages/project/styled'
import { FaGithub } from 'react-icons/fa'
import { Suspense } from 'react'
import { Loading } from '@components/loading/Loading'
interface Props {
    id: number
    core: string
    title: string
    desc: string
    imageUrl: string
    optimizationImgUrl: string
    github: {
        title: string
        url: string
    }
}
export const ProjectDesc = ({
    id,
    core,
    title,
    desc,
    imageUrl,
    optimizationImgUrl,
    github,
}: Props) => (
    <S.RowContainer id={String(id)}>
        <S.ProjectDescription>
            <S.Core>{core}</S.Core>
            <S.Title>{title}</S.Title>
            <S.LinkWrapper>
                <S.Link href={github.url} target="_blank">
                    <FaGithub size="20" />
                    <S.LinkDescription>{github.title}</S.LinkDescription>
                </S.Link>
            </S.LinkWrapper>
            <S.Desc>
                <Suspense fallback={<Loading />}>
                    <CareerDetail fetchUrl={desc} />
                </Suspense>
            </S.Desc>
        </S.ProjectDescription>
        <S.ColumnWrapper>
            <LazyImage
                src={optimizationImgUrl}
                fallbackComponent={
                    <S.ProjectImg
                        src={imageUrl}
                        loading="lazy"
                        alt="프로젝트이미지"
                    />
                }
            />
        </S.ColumnWrapper>
    </S.RowContainer>
)
