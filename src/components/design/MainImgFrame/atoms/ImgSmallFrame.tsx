import { ReactNode } from 'react'
import * as S from '../../styled'
interface Props {
    children?: ReactNode
}
export const ImgSmallFrame = ({ children }: Props) => <S.Img>{children}</S.Img>
