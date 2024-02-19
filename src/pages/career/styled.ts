import styled from "@emotion/styled";

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: rgb(14, 16, 15);
`;

export const Title = styled.div`
  font-family: Poppins-black;
  color: rgb(182 182 182);
  font-size: 3rem;
`;

export const CareerWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  height: 100vh;
  display: flex;
  gap: 5%;
  flex-direction: column;
  @media (max-width: 600px) {
    width: unset;
  }
`;

export const CompanyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 700px) {
    flex-direction: column;
    width: unset;
  }
`;

export const CompanyLogo = styled.div`
  width: 300px;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const CompanyCareer = styled.div`
  padding: 2px 15px;
  border-left: 0.1rem solid #7c7c7c;
  display: flex;
  width: 50%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 600px) {
    width: unset;
  }
`;

export const CompanyImg = styled.img<{ src: string }>`
  width: 180px;
  height: 180px;
  clip-path: circle(90px);
  ${(props) =>
    props.src &&
    `
    src:${props.src};
  `};
`;

export const CompanyTitle = styled.h2`
  font-family: NotoSansKR-Bold;
  color: rgb(182 182 182);
  font-size: 1.5rem;
`;

export const CompanyPeriod = styled.div`
  font-family: Poppins-black;
  color: #fff;
`;

export const CompanyDesc = styled.div`
  font-family: NotoSansKR-Light;
  color: #fff;
`;

export const CompanyLine = styled.div`
  border-b: 1px solid #fff;
`;

export const WorkTitle = styled.div`
  color: #9660fc;
  height: 64px;
  display: flex;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  font-family: NotoSansKR-Regular;
  font-size: 1rem;
`;

export const WorkWrapper = styled.ul`
  color: #fff;
`;

export const WorkList = styled.li`
  color: #fff;
`;
