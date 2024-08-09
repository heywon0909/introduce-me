import * as S from './styled'
import { Company } from '@components/company/Comapny'
import { Loading } from '@components/loading/Loading'
import CareerDetail from '@components/markdown/CareerDetail'
import { useDelayedQuery } from '@hooks/useDelayedQuery'
import { Suspense } from 'react'

export default function Resume() {
    const {
        isLoading,
        isSuccess: isFirstSuccess,
        data: tmax,
    } = useDelayedQuery({
        queryKey: ['prevCareer'],
        queryFn: fetch('/introduce-me/assets/data/tmax.json')
            .then((response) => response.text())
            .then((res) => JSON.parse(res)),
    })

    const {
        data: eco,
        isSuccess: isFinalSuccess,
        isLoading: isFinalLoading,
    } = useDelayedQuery({
        queryKey: ['curCareer'],
        queryFn: fetch('/introduce-me/assets/data/eco.json')
            .then((response) => response.text())
            .then((res) => JSON.parse(res)),
    })

    if (isLoading || isFinalLoading || !isFirstSuccess || !isFinalSuccess)
        return <Loading />

    const isSuccessAll = isFirstSuccess && isFinalSuccess

    if (!isSuccessAll) return <Loading />

    return (
        <S.ContainerWrapper>
            <S.CareerWrapper>
                <S.Title>Career</S.Title>
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
            </S.CareerWrapper>
        </S.ContainerWrapper>
    )
}
