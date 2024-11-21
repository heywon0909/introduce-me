import { Outlet, useMatch } from 'react-router'
import * as S from './styled'
import { Suspense } from 'react'
import { MainHeader } from '@components/header/Header'
import { Loading } from '@components/loading/Loading'
import { ErrorCatchWrapper } from '@error/ErrorCatcherWrapper'
import { ScrollInitialLize } from '@components/scroll/ScrollInitialize'

export default function Root() {
    const mainRoute = useMatch('/')

    return (
        <>
            <MainHeader />
            <S.Container style={{ position: mainRoute ? 'fixed' : 'relative' }}>
                <ScrollInitialLize />
                <ErrorCatchWrapper>
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </ErrorCatchWrapper>
            </S.Container>
        </>
    )
}
