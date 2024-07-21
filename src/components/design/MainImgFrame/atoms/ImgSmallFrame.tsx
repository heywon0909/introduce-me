
import * as S from '../../styled'
interface Props{
    children?: React.ReactNode;
}
export const ImgSmallFrame = ({children}:Props) => {

  
    return (
    <S.Img>
        {children}
      </S.Img>
    )
    
}