import Link from '@mui/material/Link'
import { StyleButton } from '../Button/StyleButton'
import { CSSProperties, ReactNode } from 'react'
interface Props {
    to: string
    icon: ReactNode
    styles?: CSSProperties
}
export const StyleIcon = ({ to, icon, styles }: Props) => (
    <StyleButton
        props={{
            style: {
                background: 'gray',
                color: '#fff',
                border: 'none',
                boxShadow: 'none',
                ...styles,
            },
        }}
    >
        <Link href={to} underline="none" color="inherit">
            {icon}
        </Link>
    </StyleButton>
)
