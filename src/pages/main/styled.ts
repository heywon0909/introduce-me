import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  padding: 5px 5px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Img = styled.div<{ url: string }>`
  width: 300px;
  height: 300px;
  position: relative;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  flex-shrink: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrap = styled.div`
  display: flex;
  width: 330px;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 3vw;
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;
  font-family: Poppins-black;
  width: 100%;
  color: rgb(182, 182, 182, 0.2);
  background: linear-gradient(to right, #fdbbbb, #001c95) no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  @media (max-width: 600px) {
    font-size: 10vw;
  }
`;

export const TitleDesc = styled.div`
  color: #fff;
  line-height: 20px;
  font-size: 30px;
`;

export const ProfileImg = styled.img`
  position: absolute;
  top: 22%;
  left: 27%;
`;

export const ProfileDesc = styled.div`
  color: #fff;
  font-size: 30px;
  font-family: "Noto Sans KR";
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const JobTitle = styled.div`
  color: rgb(255, 252, 225);
  width: 280px;
  font-size: 1.8rem;
  font-family: Poppins-black;
  font-weight: 100;
`;

export const JobDesc = styled.div`
  color: #673ab7;
  font-size: 1.5rem;
  font-family: Poppins-black;
  font-weight: 100;
`;

export const Frame = styled.div<{ left?: number; right?: number }>`
  position: absolute;
  display: flex;

  ${(props) =>
    props.left &&
    `
    left:${props.left}%;
  `};
  ${(props) =>
    props.right &&
    `
    right:${props.right}%;
  `};
  flex-direction: column;
  @media (min-width: 768px) {
    ${(props) =>
      props.left &&
      `
    left:${props.left + 10}%;
  `};
    ${(props) =>
      props.right &&
      `
    right:${props.right + 10}%;
  `};
  }
`;

export const FrameText = styled.span`
  color: rgb(255, 252, 225);
  font-family: NotoSansKR-Bold;
  font-weight: 800;
`;
export const FrameContainer = styled.div<{ url: string }>`
  display: flex;
  justify-content: space-between;
  background-color: white;
  gap: 10px;
  width: 85%;
  height: 91%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    width: 70%;
    height: 80%;
  }
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: rgb(14, 16, 15);
`;
