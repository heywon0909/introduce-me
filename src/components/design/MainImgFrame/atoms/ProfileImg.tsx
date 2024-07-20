import * as S from '../../styled'
import { useImgEncoding } from '@hooks/useImgEncoding'
import profileImg from '/assets/image/heyIcon.png'
export const ProfileImg = () => {
    const {image,isLoading} = useImgEncoding(profileImg)
    return (
          <S.ProfileImg src={isLoading ? '': image}/>
    )
}