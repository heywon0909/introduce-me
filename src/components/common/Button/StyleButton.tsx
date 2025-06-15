import { ButtonProps } from '@mui/base/Button'
import * as S from './styled'
import { ReactNode } from 'react'

interface Props {
    text?: string
    props?: ButtonProps
    children?: ReactNode
    onClick?: () => void
}
export const StyleButton = ({ text, props, children, onClick }: Props) => (
    <S.Button {...props} onClick={onClick}>
        {children}
        {text}
    </S.Button>
)
