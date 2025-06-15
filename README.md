# Heywon's Portfolio 📑

이 포트폴리오 웹사이트는 제 경력 이력과 진행했던 프로젝트 내용을 담고 있습니다.

## 문제 및 최적화 🔎

### 1. 폰트 및 이미지 최적화  
웹사이트의 로딩 속도를 개선하기 위해 다음과 같은 최적화를 진행했습니다:

- **Font Optimization** 
  - 문제: 메인 화면에서 로고 옆 보여지는 폰트가 깨지는 현상이 발생
  - 원인: 폰트로딩과정에서 오래 걸림
  - 해결: 폰트(ttf -> woff2,woff) 로 변경, 서브셋 폰트 적용, 메인 폰트 FOIT 형상을 띄도록 font-display:block으로 수정 
  - 내용: 폰트 최적화 과정에 대한 내용을 담고있습니다(https://medium.com/p/c0dc1b040d2c)

- **Image Optimization**
  - 문제: 이미지 로드 속도가 오래 걸려, 컴포넌트 마운트 이후의 시점에 이미지가 그려지는 현상 발생 
  - 원인: 이미지 파일 크기가 큼
  - 해결: 이미지 Webp 포맷 지원 및 이미지 사전 로딩 
  - 내용: 이미지 최적화 과정에 대한 내용을 담고 있습니다(https://medium.com/p/0f87210b6cae)


### 2. code convention
- 자체 제작한 eslint-config-everything 🎁 적용
- 추후 다른 프로젝트에서도 eslint-config-everything rule을 적용할 예정 
  
