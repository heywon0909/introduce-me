import { Outlet } from 'react-router'
import * as S from './styled'
import { Suspense, useState } from 'react'
import { MainHeader } from '@components/header/Header'
import Nav from '@components/nav/Nav'

export default function Root() {
    const [hover, setHover] = useState(false)
    const handleHover = (flg: boolean) => setHover(flg)

    return (
        <>
            <MainHeader />
             <Nav hover={hover} handleHover={handleHover} />
            <S.Container>
                <Suspense fallback={<div>loading...</div>}>
                    <Outlet />
                </Suspense>
            </S.Container>
        </>
    )
}
