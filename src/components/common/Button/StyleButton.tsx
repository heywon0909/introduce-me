import * as S from './styled'
import { ButtonProps } from '@mui/base/Button'

interface Props {
    text?: string
    props?: ButtonProps
    children?: React.ReactNode
    onClick: () => void
}
export const StyleButton = ({ text, props, children, onClick }: Props) => {
    return (
        <S.Button {...props} onClick={onClick}>
            {children}
            {text}
        </S.Button>
    )
}
