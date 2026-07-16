import * as S from './styled'
import { SelfIntroduce } from '@components/page/career/SelfIntroduce'
import { Wave } from '@components/page/career/Wave'
import { lazy, Suspense, useEffect, useRef, ReactNode, useState } from 'react'

const CareerDescription = lazy(() =>
    import('@components/page/career/CareerDescription').then((module) => ({
        default: module.CareerDescription,
    }))
)

const color: { baseBg: string; decorationBg?: string; waveColor?: string }[] = [
    {
        baseBg: 'linear-gradient(180deg, #0b0d0d 0%, #0f1313 30%, #0b2b4b 100%, #14243b 100%)',
        decorationBg: 'rgb(6 28 51)',
        waveColor: '#0b2b4b',
    },
    {
        baseBg: 'linear-gradient(180deg, #051c33 0%, #03355b 30%, #194272 60%, #1e6292 100%)',
        decorationBg: 'rgb(16 132 189)',
        waveColor: '#1f6190',
    },
    {
        baseBg: 'linear-gradient(180deg, #1586ba 0%, #0f659f 30%, #135980 50%, #005d61 100%)',
        decorationBg: 'rgb(58 125 139)',
        waveColor: '#015d64',
    },
    {
        baseBg: 'linear-gradient(180deg, #3b7e8d 0%, #0f6389 30%, #04395e 60%, #032130 100%)',
    },
]

const LazyObserverWrapper = ({ children }: { children: ReactNode }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [isRendered, setIsRendered] = useState(false)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '100px 0px',
            threshold: 0.1,
        }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsRendered(true)
                    observer.unobserve(entry.target)
                }
            })
        }, options)

        if (!wrapperRef.current) return

        observer.observe(wrapperRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return <div ref={wrapperRef}>{isRendered && children}</div>
}

export default function Resume() {
    const career1 = useRef<HTMLDivElement>(null)
    const career2 = useRef<HTMLDivElement>(null)
    const career3 = useRef<HTMLDivElement>(null)

    return (
        <>
            <S.Section>
                <SelfIntroduce bg={color[0].baseBg} />
                <Wave
                    bg={color[0].decorationBg ?? ''}
                    fill={color[0].waveColor ?? ''}
                />
                <LazyObserverWrapper>
                    <Suspense fallback={<div></div>}>
                        <CareerDescription
                            id="1"
                            ref={career1}
                            bg={color[1].baseBg}
                            company="알스솔루션"
                            description={
                                '국내 최대 의약품 유통 기업 지오영의 헬스케어 IT 전문 자회사'
                            }
                            details={[
                                '모노레포 기반 디자인 시스템 구축: Changeset을 도입해 컴포넌트별 독립 배포 환경 구축 및 유지보수성 향상',
                                'Figma AI(MCP) 활용 UI 개발: AI 프롬프트 고도화를 통해 한 달의 짧은 일정 내에 다수의 테이블 UI 구축 완료',
                                '사내 개발 환경 표준화: 전용 eslint-config 패키지 자체 제작 및 배포로 팀 내 코드 컨벤션 통일',
                                '웹 서비스내 UI/UX 개선: 1Depth 트리 리스트 구조 설계로 어드민 FAQ 관리 효율성 증대',
                            ]}
                        />
                    </Suspense>
                </LazyObserverWrapper>
                <Wave
                    bg={color[1].decorationBg ?? ''}
                    fill={color[1].waveColor ?? ''}
                />
                <LazyObserverWrapper>
                    <Suspense fallback={<div></div>}>
                        <CareerDescription
                            id="2"
                            ref={career2}
                            bg={color[2].baseBg}
                            company="티맥스와플"
                            description={
                                '기업용 협업 솔루션 `WAPL` 시스템 구축 및 개발'
                            }
                            details={[
                                'B2B/B2G 맞춤형 웹 서비스 개발: 기업요구사항에 맞춘 조직도 및 연락처 화면 구현및 유지보수',
                                '실시간 데이터 연동: 사내 자체 WebSocket 통신 모듈을 활용한 실시간 데이터 연동 및 API 통신 처리',
                                '초기 렌더링 속도 개선: Bundle Analyzer를 활용해 청크 분리 및 Tree Shaking을 적용하여 JS 실행 시간 단축 (6.1초 → 4.9초)',
                                'Vite 마이그레이션: 사내 레거시 UI 라이브러리를 Vite로 전환하여 번들 크기를 3.3MB → 1.1MB 축소',
                                'CI/CD: Dev 및 QA 환경에 대한 배포 자동화 파이프라인 구축',
                            ]}
                        />
                    </Suspense>
                </LazyObserverWrapper>
                <Wave
                    bg={color[2].decorationBg ?? ''}
                    fill={color[2].waveColor ?? ''}
                />
                <LazyObserverWrapper>
                    <Suspense fallback={<div></div>}>
                        <CareerDescription
                            id="3"
                            ref={career3}
                            bg={color[3].baseBg}
                            company="이씨오"
                            description={'도서관 자동화 솔루션 개발'}
                            details={[
                                '주요 공공 도서관 반응형 웹앱 구축: 법원, 서초구 등 다수 기관의 맞춤형 웹 서비스 개발 및 유지보수 (검색 자동완성, 결제 연동, 통계 기능 구현)',
                                '초기 렌더링(FCP) 최적화: API 응답 대기로 인한 렌더링 지연을 해결하기 위해 UI 렌더링과 비동기 데이터 호출 로직을 분리, Lighthouse 성능 점수 향상 (46점 → 55점)',
                                '크로스 브라우징 및 OS 이슈 대응: iOS 환경에서 발생하는 본인 인증 팝업 데이터 유실 문제를 비동기(setTimeout) 처리로 해결하여 서비스 안정성 확보',
                                'API 중복 호출 방지: Debounce 기법을 적용하여 이벤트 다중 클릭으로 인한 중복 신청 버그 차단 및 불필요한 트래픽 감소',
                            ]}
                        />
                    </Suspense>
                </LazyObserverWrapper>
            </S.Section>
        </>
    )
}
