
import * as S from './styled'
import { useQuery } from '@tanstack/react-query'
import { Company } from '@components/company/Comapny';
import { Loading } from '@components/loading/Loading';
import CareerDetail from '@components/markdown/CareerDetail';

export default function Resume() {
    const { isLoading,isSuccess:isFirstSuccess,data:tmax } = useQuery({
        queryKey: ['prevCareer'],
        queryFn: () => fetch('/introduce-me/assets/data/tmax.json')
            .then((response) => response.text()).then(res=>JSON.parse(res))
            
    });

    
    const { data:eco,isSuccess:isFinalSuccess } = useQuery({
        queryKey: ['curCareer'],
        queryFn: () => fetch('/introduce-me/assets/data/eco.json')
            .then((response) => response.text()).then(res => JSON.parse(res)),
        enabled:isFirstSuccess       
    });

    
    if (isLoading) return <Loading/>

    return (
        <S.ContainerWrapper>
            <S.CareerWrapper>
                <S.Title>Career</S.Title>
                <S.ContentWrapper>
                    {isFirstSuccess && (
                    <Company data={tmax}>
                        <CareerDetail fetchUrl="/introduce-me/assets/md/tmax.md" />
                    </Company>)  }
                    {isFinalSuccess && (
                        <Company data={eco} >
                             <CareerDetail fetchUrl="/introduce-me/assets/md/eco.md" />
                    </Company>)}
                </S.ContentWrapper>
            </S.CareerWrapper>
        </S.ContainerWrapper>
    )
}
