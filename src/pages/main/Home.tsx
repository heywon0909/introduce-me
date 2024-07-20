
import * as S from './styled'
import { FrameText } from '@components/design/FrameText'
import { ImgFrame } from '@components/design/MainImgFrame/ImgFrame'
import { ImgSmallFrame } from '@components/design/MainImgFrame/atoms/ImgSmallFrame'
import { ProfileImg } from '@components/design/MainImgFrame/atoms/ProfileImg'


export default function Home() {
   

    return (
        <S.ContainerWrapper>
            <FrameText
                leftFrameText='DEVELOPER'
                rightFrameText='FRONT-END'
            />
            <ImgFrame>
                <ImgSmallFrame>
                <ProfileImg/>
                </ImgSmallFrame>
            </ImgFrame>
        </S.ContainerWrapper>
    )
}
