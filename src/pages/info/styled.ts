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

export const InfoWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  gap: 3%;
  flex-direction: column;
`;

export const Mybanner = styled.div`
  width: auto;
`;

export const Userbanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2px 2px;
  align-items: center;
`;

export const UserImg = styled.div`
  width: 100%;
`;

export const UserInfoWrapper = styled.div`
  width: 100%;
  padding: 2px 2px;
  height: 291px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 2px 2px;
`;

export const UserWrapper = styled.div<{ url?: string }>`
  width: 70%;
  background-color: #000;
  display: flex;
  padding: 2px 2px;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;

export const UserText = styled.span`
  font-size: 1.6rem;
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;
  font-family: Poppins-black;
  width: 200px;
  color: rgb(238 210 247);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

export const Text = styled.span`
  font-size: 1rem;
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;
  font-family: Poppins-black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  color: #9f9f9f;
`;

export const SkillText = styled.span`
  font-size: 1vw;
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;
  font-family: Poppins-black;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;
`;

export const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const SkillSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Skills = styled.div`
  width: 100%;
  gap: 5px;
  display: flex;
  padding: 2px 2px;
`;

export const TitleText = styled.span`
  font-size: 1rem;
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;
  font-family: Poppins-black;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  margin-bottom: 10px;
`;
