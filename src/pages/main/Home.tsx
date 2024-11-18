import * as S from './styled'
import { FrameText } from '@components/design/FrameText'
import { ImgFrame } from '@components/design/MainImgFrame/ImgFrame'
import { ImgSmallFrame } from '@components/design/MainImgFrame/atoms/ImgSmallFrame'
// import { ProfileImg } from '@components/design/MainImgFrame/atoms/ProfileImg'
import { ContentWrapper } from '@components/common/Wrapper/ContentWrapper'
import { lazy, Suspense } from 'react'

const ProfileImg = lazy(() =>
    import('@components/design/MainImgFrame/atoms/ProfileImg').then(
        ({ ProfileImg }) => ({
            default: ProfileImg,
        })
    )
)

export default function Home() {
    return (
        <ContentWrapper otherProps={{ height: '100vh' }}>
            <FrameText leftFrameText="DEVELOPER" rightFrameText="FRONT-END" />
            <S.Wrapper>
                <ImgFrame>
                    <ImgSmallFrame>
                        <Suspense fallback={<div></div>}>
                            <ProfileImg />
                        </Suspense>
                    </ImgSmallFrame>
                </ImgFrame>
            </S.Wrapper>
        </ContentWrapper>
    )
}
