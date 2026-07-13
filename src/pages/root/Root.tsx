import { Outlet } from 'react-router'
import { Suspense } from 'react'
// import { MainHeader } from '@components/header/Header'
import { Loading } from '@components/loading/Loading'
import { ErrorCatchWrapper } from '@error/ErrorCatcherWrapper'
import { ScrollInitialLize } from '@components/scroll/ScrollInitialize'
import * as S from './styled'
import { MainHeader } from '@components/header/Header'

export default function Root() {
    return (
        <>
            <MainHeader />
            <S.Container>
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
