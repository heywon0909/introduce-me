## [업무내역]

    -   조직도
        -   조직도 사업건: 농어촌공사(2024.01 ~ ),
            서울교육청 조직도(2024.03 ~ )
    -   연락처

## [ 기술 스택 ]

    -   코어: React, TypeScript, React Query
    -   상태 관리: mobx
    -   스타일링: Emotion
    -   빌드: Webpack
    -   UI테스트: Storybook
    -   형상관리: gitlab
    -   문서: Figma

## [주요 업무]

    -   Super App 내 플랫폼 화면 개발
        1.  화면 개발 및 유지보수
        2.  UI 화면 기능 개발
    -   React / CSS- in -JS 라이브러리인 styled-components를 활용하여 화면을 구현
    -   websocket API를 활용한 API통신

## [업무 성과 및 개선사항]

    1. 화면 성능 최적화 진행

        - 원인: 자바스크립트 파싱 및 실행 과정에서 파싱 시간이 오래 걸림
        - 해결:

        1. webpack Bundle Analyzer 로 번들의 크기를 확인,
        그 중 많은 부피를 차지하는 css webpack plugin 활용하여 압축

        2. 번들 사이즈 줄이기(webpack)
        - chunkhash를 사용하여 캐싱
        - 트리 쉐이킹

    2. 뻑빡한 개발 일정 내 개발을 위한 프론트엔드팀플레이 향상을 위한 노력

        - 스프린트 기간에 msw를 사용하여 API 개발에 대한 의존성을 낮춤

    3. vite로의 모듈 번들러 전환

        1. 레거시 사내 UI 프로젝트 rollup에서 vite로 전환

            - 문제: 번들 크기가 너무 커서 해당 library 쓰고 있는
            프로젝트 chunk 파일 압축이 어려움
            - 해결: 번들러를 rollup에서 vite로 교체하여,
            번들 사이즈를 3.3MB에서 1.1MB로 줄임

        2. 개발중인 프로젝트 webpack에서 vite로 전환
            - 문졔: webpack에서 Vite로 전환하여 빌드 속도를
                    향상시키는 과정에서 테스트 시 빈 화면이 뜸
            - 해결: 빌드 파일 목록이 Webpack으로 빌드했을 때와
                    동일하지 않아 발생한 문제였으며,
                    빌드 파일 형식을 webpack과 동일하게 맞춤으로서 해결함

    4. pnpm 으로 구성된 모노레포 개선

        - 문제: 모노레포 프로젝트 내의 publish된 common 이름의
                패키지의 빌드 형상에 common 폴더내
                모든 폴더가 포함되는 이슈 발생
        - 해결: plublishConfig 를 설정하여 dist 폴더 내의 파일들만 배포되도록 설정

        - 기여: 모노레포 안의 tsconfig 공통화 및 eslint 공유가능하게 설정

    5. gitlab CICD를 통한 deploy 자동화
        -   dev 환경에 올릴 수 있는 upload api를
            gitlab variables를 활용하여 node 명령어로 upload api 호출
        -   qa 환경에 lftp를 활용하여 cli 명령어로 build 파일생성하여
            보내도록 구현
