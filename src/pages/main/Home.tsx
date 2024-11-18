import * as S from './styled'
import { FrameText } from '@components/design/FrameText'
import { ImgFrame } from '@components/design/MainImgFrame/ImgFrame'
import { ImgSmallFrame } from '@components/design/MainImgFrame/atoms/ImgSmallFrame'
import { ProfileImg } from '@components/design/MainImgFrame/atoms/ProfileImg'
import { ContentWrapper } from '@components/common/Wrapper/ContentWrapper'

export default function Home() {
    return (
        <ContentWrapper otherProps={{ height: '100vh' }}>
            <FrameText leftFrameText="DEVELOPER" rightFrameText="FRONT-END" />
            <S.Wrapper>
                <ImgFrame>
                    <ImgSmallFrame>
                        <ProfileImg />
                    </ImgSmallFrame>
                </ImgFrame>
            </S.Wrapper>
        </ContentWrapper>
    )
}
