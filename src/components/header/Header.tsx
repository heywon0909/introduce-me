import { useLocation } from "react-router-dom";
import * as S from "./styled";
export default function Header() {
  const location = useLocation();

  const { pathname } = location;
  return (
    <S.Header>
      <S.LogoWrapper to="/">
        <S.Logo>h</S.Logo>
        <S.Logo>e</S.Logo>
        <S.Logo>y</S.Logo>
        <S.Logo>w</S.Logo>
        <S.Logo>o</S.Logo>
        <S.Logo>n</S.Logo>
        <S.Logo>0909</S.Logo>
        <S.LogoImgWrapper>
          <S.LogoImg src={"/assets/image/hyewonLogo.png"} alt="logo" />
        </S.LogoImgWrapper>
      </S.LogoWrapper>
      <S.HeaderMenu>
        <S.MenuLinkWrapper>
          <S.MenuLink to="/info" clicked={pathname === "/info"}>
            Info
          </S.MenuLink>
        </S.MenuLinkWrapper>
        <S.MenuLinkWrapper>
          <S.MenuLink to="/skills" clicked={pathname === "/skills"}>
            Skills
          </S.MenuLink>
        </S.MenuLinkWrapper>
        <S.MenuLinkWrapper>
          <S.MenuLink to="/career" clicked={pathname === "/career"}>
            Career
          </S.MenuLink>
        </S.MenuLinkWrapper>
        <S.MenuLinkWrapper>
          <S.MenuLink to="/project" clicked={pathname === "/project"}>
            Projects
          </S.MenuLink>
        </S.MenuLinkWrapper>
      </S.HeaderMenu>
    </S.Header>
  );
}
