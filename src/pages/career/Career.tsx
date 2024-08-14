import * as S from './styled'
import { Company } from '@components/company/Comapny'
import { Loading } from '@components/loading/Loading'
import CareerDetail from '@components/markdown/CareerDetail'
import { useDelayedQuery } from '@hooks/useDelayedQuery'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export default function Resume() {
    const { data: tmax } = useDelayedQuery({
        queryKey: ['prevCareer'],
        queryFn: fetch('/introduce-me/assets/data/tmax.json')
            .then((response) => response.text())
            .then((res) => JSON.parse(res)),
    })

    const { data: eco } = useDelayedQuery({
        queryKey: ['curCareer'],
        queryFn: fetch('/introduce-me/assets/data/eco.json')
            .then((response) => response.text())
            .then((res) => JSON.parse(res)),
    })

    const { reset } = useQueryErrorResetBoundary()

    return (
        <S.ContainerWrapper>
            <S.CareerWrapper>
                <S.Title>Career</S.Title>
                <ErrorBoundary
                    fallback={<div>error</div>}
                    onReset={(details) => {
                        console.log('details', details)
                        reset()
                    }}
                >
                    <S.ContentWrapper>
                        <Suspense fallback={<Loading />}>
                            <Company data={tmax}>
                                <CareerDetail fetchUrl="/introduce-me/assets/md/tmax.md" />
                            </Company>
                            <Company data={eco}>
                                <CareerDetail fetchUrl="/introduce-me/assets/md/eco.md" />
                            </Company>
                        </Suspense>
                    </S.ContentWrapper>
                </ErrorBoundary>
            </S.CareerWrapper>
        </S.ContainerWrapper>
    )
}
