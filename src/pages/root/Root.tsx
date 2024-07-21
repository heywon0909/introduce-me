import { Outlet, useMatch } from 'react-router'
import * as S from './styled'
import { Suspense, useState } from 'react'
import { MainHeader } from '@components/header/Header'
import Nav from '@components/nav/Nav'
import { Footer } from '@components/footer/Footer'

export default function Root() {
    const mainRoute = useMatch('/');

    const [hover, setHover] = useState(false)
    const handleHover = (flg: boolean) => setHover(flg)

    return (
        <>
            <MainHeader />
             <Nav hover={hover} handleHover={handleHover} />
            <S.Container style={{position: mainRoute ? 'fixed':'relative'}}>
                <Suspense fallback={<div>loading...</div>}>
                    <Outlet />
                </Suspense>
            </S.Container>
            {mainRoute && <Footer/>}
        </>
    )
}
