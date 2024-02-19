import * as S from "./styled";

export default function Resume() {
  return (
    <S.ContainerWrapper>
      <S.CareerWrapper>
        <S.Title>Career</S.Title>
        <S.ContentWrapper>
          <S.CompanyWrapper>
            <S.CompanyLogo>
              <S.CompanyImg src={"/assets/image/eco.png"} />
            </S.CompanyLogo>
            <S.CompanyCareer>
              <S.CompanyTitle>(주)ECO</S.CompanyTitle>
              <S.CompanyPeriod>2021-08 ~ 2023-07</S.CompanyPeriod>
              <S.CompanyDesc>
                단순히 책을 읽고 빌리는 공간을 넘어 문화 교류 공간으로 진화하는
                도서관을 이용자들과 관리자들이 쉽게 이용할 수 있도록 하는 도서관
                솔루션을 만듭니다.
                <br />
                <br />
                기본적으로 Vue 기반 웹 홈페이지 제작을 담당하였으며, Spring
                Framework를 경험해 보았으며, JSP 유지보수를 위해 jQuery를
                활용하여 작업을 하였습니다.
              </S.CompanyDesc>
              <S.CompanyLine></S.CompanyLine>
              <S.WorkTitle>
                백 오피스 전반적인 관리 및 각종 기능 개발 / 기획
              </S.WorkTitle>
              {/* <S.CompanyPeriod>2021-08 ~ 2023-07</S.CompanyPeriod> */}
              <S.CompanyDesc>
                <S.WorkWrapper>
                  <S.WorkList>
                    ios,iphone 본인 인증 팝업 창 오류 수정
                  </S.WorkList>
                  <S.WorkList>퍼블리싱 진행</S.WorkList>
                  <S.WorkList>
                    토스페이먼츠 API를 활용한 문화강좌 송금 관리 시스템 개발
                  </S.WorkList>
                  <S.WorkList>
                    Chart.js를 활용한 도서관 통계 기능 개발
                  </S.WorkList>
                  <S.WorkList>
                    vue2, vueQuery, Vue Composition API를 활용한 이용자 마일리지
                    관리 기능
                  </S.WorkList>
                  <S.WorkList>Session(로그인,로그아웃) 관리 기능</S.WorkList>
                  <S.WorkList>
                    intersectionObserver를 활용한 무한 스크롤 기능
                  </S.WorkList>
                </S.WorkWrapper>
              </S.CompanyDesc>
            </S.CompanyCareer>
          </S.CompanyWrapper>
          <S.CompanyWrapper>
            <S.CompanyLogo>
              <S.CompanyImg src={"/assets/image/tmax.jpg"} />
            </S.CompanyLogo>
            <S.CompanyCareer>
              <S.CompanyTitle>(주)Tmax WAPL.ai</S.CompanyTitle>
              <S.CompanyPeriod>2021-08 ~ 2023-07</S.CompanyPeriod>
              <S.CompanyDesc>
                Tmax WAPL은 초개인화된 서비스를 제공하는 SuperApp의 Platform
                개발을 담당하고 있습니다.
                <br />
                <br />
                소통과 협업을 위한 메신저, 메일, 캘린더, 게시판, 연락처 등의 App
                및 컴포넌트 모듈이 포함되며 SuperApp 내에서 SNS(Social
                Networking Service)를 제공하는 Cafe, FanClub 및 초개인화를
                지원하는 MyApp, Hi-Me 를 개발하고 있습니다.
                <br />
                <br />
                기본적으로 WAPL Super App 플랫폼 개발 및 SuperApp의 Base
                App(Messenger,Mail,Calendar,Board 등) 개발하였습니다.
              </S.CompanyDesc>
              <S.CompanyLine></S.CompanyLine>
              <S.WorkTitle>WAPL Super App 플랫폼 개발</S.WorkTitle>
              {/* <S.CompanyPeriod>2023-09 ~ 현재</S.CompanyPeriod> */}
              <S.CompanyDesc>
                <S.WorkWrapper>
                  <S.WorkList>연락처 플랫폼 개발</S.WorkList>
                </S.WorkWrapper>
              </S.CompanyDesc>
              <S.WorkTitle>화면 성능최적화</S.WorkTitle>
              <S.CompanyDesc>
                <S.WorkWrapper>
                  <S.WorkList>연락처 플랫폼 개발</S.WorkList>
                </S.WorkWrapper>
              </S.CompanyDesc>
            </S.CompanyCareer>
          </S.CompanyWrapper>
        </S.ContentWrapper>
      </S.CareerWrapper>
    </S.ContainerWrapper>
  );
}
