## [ 기술 스택 ]

    -   코어: Vue.js, JavaScript , JSP, jQuery
    -   상태관리: Vuex
    -   빌드: Webpack, Babel
    -   형상관리: git, SVN
    -   협업툴: Confluence, Jira

## [주요 업무]

    -   반응형 웹앱 홈페이지 개발 및 유지보수

        1. 유저기능( 로그인,로그아웃 / 계정 정보 )
        2. 검색 기능

            - 검색어 자동완성 / 패싯을 통한 검색

        3. 콘텐츠 신청 / 등록 기능

    -   결제 시스템 연동

        4. 통계 기능 - 이용자 / 대출 / 방문 통계

        5. 화면 성능 최적화를 통한 웹앱 홈페이지 성능 개선

## [업무 성과 및 개선사항]

        1.  API 중복 호출 버그 수정

            -   문제:   기존의 레거시 코드에서 문화강좌 신청 버튼
                        클릭시 중복 신청 이슈가 발생,동일한 신청
                        임에도 불구하고 시간만 변경되서 2번 API 호출됨.

            -   해결:   단일 버튼을 여러번 클릭해도 후속
                        이벤트를 무시하도록 debounce에
                        3밀리초의 시간을 설정

        2.  본인 인증 팝업이 ios/iphone 에서 뜨지 않는 이슈

            -   문제:   ios / iphone 본인 인증 폼이 담긴
                        팝업창이 닫히고 나서 관련 값이 부모창으로
                        넘어오지 않는 이슈가 발생
            -   해결:   팝업창이 떠있을 때에도 부모창 조작이 가능하도록
                        부모창에 1초 뒤 폼을 전송하는 함수를 팝업창에서는
                        부모창의 폼에 데이터 넣은 후 해당 함수를 호출 후
                        window.close 를 하여 팝업창을 닫아주도록 함.

        3.  화면 성능 최적화

            -   문제:   기존의 코드에서 홈페이지 초기 로드 시,
                        도서관 고유 정보를 불러오는 API 결과 값이
                        불려진 후에 홈페이지가 그려짐.

            -   해결:   url 구분값으로 UI를 그려
                        비동기 로직과 분리

            -   성과:   웹앱 초기 로드 시, FCP 속도를 개선하여
                        구글 lighthouse 퍼포먼스점수
                        (46 점 → 55점으로 향상)

        4.  chart library 활용한 통계 분석 기능 개발

            -   세계지도를 활용한 고전문학 거장 정보
                보여주는 통계 amChart의 map chart 이용해
                Vue의 라이프 사이클을 활용한 동적 차트를 구현

            -   amCharts / Chart.js 라이브러리를 활용하여
                도서관 이용자 통계 분석 페이지 개발

        -   정적 차트인 막대 그래프 / 원그래프 통계
