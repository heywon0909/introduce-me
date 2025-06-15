import { Comapny, Company } from '@components/company/Comapny'
import { Loading } from '@components/loading/Loading'
import CareerDetail from '@components/markdown/CareerDetail'
import { useDelayedQuery } from '@hooks/useDelayedQuery'
import { Suspense } from 'react'
import * as S from './styled'
import { getData } from '@external/api'

export default function Resume() {
    const { data: tmax } = useDelayedQuery<Comapny>({
        queryKey: ['prevCareer'],
        queryFn: getData('tmax'),
    })

    const { data: eco } = useDelayedQuery({
        queryKey: ['curCareer'],
        queryFn: getData('eco'),
    })

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
