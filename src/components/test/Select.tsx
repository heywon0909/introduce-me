import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from './Dropdown'

interface Props {
    value: string
    onChange: (value: string) => void
    options: string[]
}
export const Select = ({ value, onChange, options }: Props) => {
    return (
        <Dropdown value={value} onChange={onChange}>
            <DropdownTrigger as="button">{value}</DropdownTrigger>
            <DropdownMenu>
                {options.map((option, i) => (
                    <DropdownItem data={option} key={i} />
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}
