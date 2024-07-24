import { StyleButton } from '@components/common/Button/StyleButton'
import * as S from './styled'
import { FrameText } from '@components/design/FrameText'
import { ImgFrame } from '@components/design/MainImgFrame/ImgFrame'
import { ImgSmallFrame } from '@components/design/MainImgFrame/atoms/ImgSmallFrame'
import { ProfileImg } from '@components/design/MainImgFrame/atoms/ProfileImg'
import { ContentWrapper } from '@components/common/Wrapper/ContentWrapper'

export default function Home() {
    const onMoveFooter = () => window.scroll({ top: 1000, behavior: 'smooth' })
    return (
        <ContentWrapper props={{ height: '100vh' }}>
            <FrameText leftFrameText="DEVELOPER" rightFrameText="FRONT-END" />
            <S.Wrapper>
                <ImgFrame>
                    <ImgSmallFrame>
                        <ProfileImg />
                    </ImgSmallFrame>
                </ImgFrame>

                <StyleButton
                    text="More Info"
                    props={{ id: 'more' }}
                    onClick={onMoveFooter}
                ></StyleButton>
            </S.Wrapper>
        </ContentWrapper>
    )
}
