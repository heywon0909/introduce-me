import { Box, Modal } from '@mui/material'
import {
    ChangeEvent,
    createContext,
    ElementType,
    PropsWithChildren,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'

interface Context<T> {
    value?: T
    onChange?: React.Dispatch<React.SetStateAction<T>>
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
    onChange: React.Dispatch<React.SetStateAction<T>>
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

interface CheckBox {
    name: string
}
export const CheckBox = ({ name }: CheckBox) => {
    const { onChange, value } = useContext(DropdownContext)
    const [isChecked, setIsChecked] = useState(Boolean(value.includes(name)))
    useEffect(() => {
        onChange?.((prev: string[]) =>
            prev.includes(name)
                ? prev.filter((v: string) => v !== name)
                : [...prev, name]
        )
    }, [isChecked])

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setIsChecked((prev) => !prev)
        // onChange?.((prev: string[]) =>
        //     prev.includes(e.target.name)
        //         ? prev.filter((v: string) => v !== name)
        //         : [...prev, name]
        // )
    }

    return (
        <>
            <input
                type="checkbox"
                name={name}
                onChange={handleInput}
                checked={isChecked}
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
