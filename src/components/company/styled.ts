import styled from '@emotion/styled'

export const CompanyWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width: 700px) {
        flex-direction: column;
        width: unset;
    }
`

export const CompanyLogo = styled.div`
    width: 300px;
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const CompanyCareer = styled.div`
    padding: 2px 15px;
    border-left: 0.1rem solid #7c7c7c;
    display: flex;
    width: 60%;
    gap: 15px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    @media (max-width: 600px) {
        width: unset;
    }
`

export const CompanyImg = styled.img<{ src: string }>`
    width: 160px;
    height: 160px;
    clip-path: circle(80px);
    ${(props) =>
        props.src &&
        `
    src:${props.src};
  `};
`

export const CompanyTitle = styled.h2`
    font-family: NotoSansKR-Bold;
    color: rgb(182 182 182);
    font-size: 1.5rem;
`
export const CompanyPeriod = styled.div`
    font-family: Poppins-black;
    color: #fff;
`

export const CompanyDesc = styled.div`
    font-family: NotoSansKR-Light;
    color: #fff;
`

export const CompanyLine = styled.div`
    border-bottom: 1px solid #fff;
`

export const CompanyBackground = styled.div`
    font-family: NotoSansKR-Light;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
`
