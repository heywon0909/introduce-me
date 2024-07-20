import { useImgEncoding } from '@hooks/useImgEncoding'
import * as S from '../../styled'
import photo from '/assets/image/photo.jpg'
interface Props{
    children: React.ReactNode;
}
export const ImgSmallFrame = ({children}:Props) => {

    const {image,isLoading} = useImgEncoding(photo)
    return (
          <S.Img url={isLoading ? '':image}>
            {children}
          </S.Img>
    )
    
}