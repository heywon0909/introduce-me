import { ImgFrame } from '@components/design/MainImgFrame/ImgFrame'
import { ContentWrapper } from '@components/common/Wrapper/ContentWrapper'

export default function Home() {
    return (
        <ContentWrapper
            otherProps={{
                background:
                    'linear-gradient(18deg, #0d2137 30%, #04080d 60%, #050505 100%)',
            }}
            dir="column"
        >
            <ImgFrame />
        </ContentWrapper>
    )
}
