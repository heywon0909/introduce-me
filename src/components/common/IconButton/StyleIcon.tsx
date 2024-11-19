import { StyleButton } from '../Button/StyleButton'
import Link from '@mui/material/Link'
interface Props {
    to: string
    icon: React.ReactNode
    styles?: React.CSSProperties
}
export const StyleIcon = ({ to, icon, styles }: Props) => {
    return (
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
}
