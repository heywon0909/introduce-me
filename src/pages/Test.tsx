import { MultiSelect } from '@components/test/MultiSelect'
import { Select } from '@components/test/Select'
import { useState } from 'react'

export const Test = () => {
    const value = 'Next.js'
    const options = ['Next.js', 'Remix', 'Gatsby', 'Relay']
    const [selected, setSelected] = useState(value)
    console.log('selected', selected)
    const onChange = (value: string) => setSelected(value)

    const valueArr = ['Next.js', 'Remix']
    const optionsArr = ['Next.js', 'Remix', 'Gatsby', 'Relay']
    const [selectedArr, setSelectedArr] = useState(valueArr)
    const onChangeArr = (value: string[]) => setSelectedArr(value)
    return (
        <>
            <Select value={selected} options={options} onChange={onChange} />
            <MultiSelect
                value={selectedArr}
                options={optionsArr}
                onChange={onChangeArr}
            />
        </>
    )
}
