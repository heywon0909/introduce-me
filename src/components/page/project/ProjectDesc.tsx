import { LazyImage } from '@components/common/Image/LazyImage'
import * as S from '@pages/project/styled'
import { ReactNode } from 'react'
interface Props {
    id: number
    core: string
    title: string
    desc: ReactNode
    imageUrl: string
    optimizationImgUrl: string
}
export const ProjectDesc = ({
    id,
    core,
    title,
    desc,
    imageUrl,
    optimizationImgUrl,
}: Props) => {
    return (
        <S.RowContainer
            style={{
                justifyContent: 'center',
                padding: '120px 0',
                gap: '10px',
            }}
            id={`${id}`}
        >
            <S.ColumnContainer style={{ width: '40%' }}>
                <S.Core>{core}</S.Core>
                <S.Title>{title}</S.Title>
                <S.Desc>{desc}</S.Desc>
            </S.ColumnContainer>
            <S.ColumnContainer style={{ width: '30%', marginTop: '3%' }}>
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
            </S.ColumnContainer>
        </S.RowContainer>
    )
}
