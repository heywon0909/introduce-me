import { Box, Modal } from '@mui/material'
import {
    ChangeEvent,
    createContext,
    ElementType,
    HTMLAttributes,
    PropsWithChildren,
    ReactNode,
    useContext,
    useState,
} from 'react'

interface Context<T> {
    value?: T
    onChange?: (value: T) => void
    isOpen?: boolean
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownContext = createContext<Context<any>>({
    isOpen: false,
    value: undefined,
    onChange: () => {},
    setIsOpen: () => {},
})
interface Props<T> {
    onChange: (value: T) => void
    value: T
    children: ReactNode
}
export const Dropdown = <T,>({ value, onChange, children }: Props<T>) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownContext.Provider
            value={{ value, isOpen, setIsOpen, onChange } as Context<T>}
        >
            {children}
        </DropdownContext.Provider>
    )
}

interface TriggerProps {
    as: ElementType
    children?: ReactNode
}
export const DropdownTrigger = ({
    as: Component = 'button',
    children,
}: TriggerProps) => {
    const { isOpen, setIsOpen } = useContext(DropdownContext)
    return (
        <Component onClick={() => setIsOpen?.((prev) => !prev)}>
            {isOpen ? '▲' : '▼'}
            {children}
        </Component>
    )
}

interface MenuProps {
    children: ReactNode
}
export const DropdownMenu = ({ children }: MenuProps) => {
    const { isOpen } = useContext(DropdownContext)

    if (!isOpen) return null
    return <ul>{children}</ul>
}

interface CheckBox extends HTMLAttributes<HTMLInputElement> {
    value: string
}
export const CheckBox = ({ value, ...props }: CheckBox) => {
    const { onChange, value: options } = useContext(DropdownContext)

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log('value', value)
        onChange?.(value)
    }
    return (
        <>
            <input
                type="checkbox"
                name={value}
                onChange={handleInput}
                checked={options.includes(value)}
                {...props}
            />
        </>
    )
}
interface ItemProps extends PropsWithChildren {
    data?: string
}
export const Item = ({ data, children }: ItemProps) => {
    return (
        <li>
            {children}
            {data}
        </li>
    )
}
export const DropdownItem = ({ data, children }: ItemProps) => {
    const { onChange, setIsOpen } = useContext(DropdownContext)
    if (!data) return null
    return (
        <li
            onClick={() => {
                onChange?.(data)
                setIsOpen?.(false)
            }}
        >
            {children}
            {data}
        </li>
    )
}

interface ModalProps {
    controls: ReactNode
    children: ReactNode
}
export const DropdownModal = ({ controls, children }: ModalProps) => {
    const { isOpen, setIsOpen } = useContext(DropdownContext)

    return (
        <Modal open={Boolean(isOpen)} onClose={() => setIsOpen?.(false)}>
            <Box>
                {children}
                {controls}
            </Box>
        </Modal>
    )
}
