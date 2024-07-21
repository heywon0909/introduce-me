import * as S from '../../styled'
import { useImgEncoding } from '@hooks/useImgEncoding'
import photo from '/assets/image/heywonLogo.png'
export const ProfileImg = () => {
    const {image,isLoading} = useImgEncoding(photo)
    return (
          <S.ProfileImg src={isLoading ? '': image}/>
    )
}