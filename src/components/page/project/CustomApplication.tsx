import { Backdrop } from '@mui/material'
import * as S from '@pages/project/styled'
import { Mackey } from 'bunney-ui/Mackey'
import { useState } from 'react'
interface Props {
    title?: string
    desc: string
    data: Array<{
        imageUrl?: string
        optimizationImgUrl?: string
        id: number
        title: string
    }>
}
export const CustomApplication = ({ desc, data }: Props) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <>
            <S.AppContainer onClick={handleOpen}>
                <S.App>
                    <Mackey size={2.7} />
                </S.App>
                <S.AppDesc>{desc}</S.AppDesc>
            </S.AppContainer>
            <Backdrop
                sx={(theme) => ({
                    color: '#fff',
                    zIndex: theme.zIndex.drawer + 1,
                })}
                open={open}
                onClick={handleClose}
            >
                <S.AppContainer onClick={handleOpen}>
                    <S.AppDesc>{desc}</S.AppDesc>
                    <S.AppDetail>
                        {data.map((item) => {
                            return (
                                <>
                                    {item.imageUrl &&
                                    item.optimizationImgUrl ? (
                                        <picture>
                                            <source
                                                srcSet={item.optimizationImgUrl}
                                                type="image/webp"
                                            ></source>
                                            <img
                                                src={item.imageUrl}
                                                width={120}
                                                height={80}
                                            />
                                        </picture>
                                    ) : (
                                        <Mackey size={6} />
                                    )}
                                </>
                            )
                        })}
                    </S.AppDetail>
                </S.AppContainer>
            </Backdrop>
        </>
    )
}
