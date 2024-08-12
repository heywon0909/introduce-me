import {
    CheckBox,
    Dropdown,
    DropdownMenu,
    DropdownModal,
    DropdownTrigger,
    Item,
} from './Dropdown'

interface Props {
    value: string[]
    onChange: (value: string[]) => void
    options: string[]
}
export const MultiSelect = ({ value, onChange, options }: Props) => {
    return (
        <Dropdown<string[]>
            value={value} // Ensure value type is consistent with the Dropdown type
            onChange={onChange}
        >
            <DropdownTrigger as="button">선택하기</DropdownTrigger>
            <DropdownModal
                controls={
                    <div>
                        <button>초기화</button>
                        <button>적용하기</button>
                    </div>
                }
            >
                <DropdownMenu>
                    {options.map((option, i) => (
                        <Item data={option} key={i}>
                            <CheckBox value={option} />
                        </Item>
                    ))}
                </DropdownMenu>
            </DropdownModal>
        </Dropdown>
    )
}
