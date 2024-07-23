import * as S from './styled'
interface Comapny {
    companyName: string
    companyLogo: string
    workPeriod: string
    companyDesc: string
}
interface Props {
    data: Comapny
    children: React.ReactNode
}
export const Company = ({ data, children }: Props) => {
    const { companyName, workPeriod, companyDesc, companyLogo } = data
    return (
        <S.CompanyWrapper>
            <S.CompanyLogo>
                <S.CompanyImg src={companyLogo} />
            </S.CompanyLogo>
            <S.CompanyCareer>
                <S.CompanyTitle>{companyName}</S.CompanyTitle>
                <S.CompanyPeriod>{workPeriod}</S.CompanyPeriod>
                <S.CompanyDesc
                    dangerouslySetInnerHTML={{ __html: companyDesc }}
                />
                <S.CompanyLine></S.CompanyLine>
                <S.CompanyBackground>{children}</S.CompanyBackground>
            </S.CompanyCareer>
        </S.CompanyWrapper>
    )
}
