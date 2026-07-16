import { useMemo } from 'react'
import * as S from '@pages/career/styled'

const FloatingBubbles = () => {
    // 컴포넌트가 처음 렌더링될 때 한 번만 버블 데이터를 생성하도록 useMemo 사용
    const bubbles = useMemo(() => {
        // 1. 버블 개수 랜덤 지정 (4개 ~ 7개)
        const count = 4 + Math.floor(Math.random() * 4)
        const bubbleData: {
            id: number
            size: string
            left: string
            duration: string
            delay: string
        }[] = []

        for (let i = 0; i < count; i++) {
            // 2. 크기, 위치, 애니메이션 속성을 객체 배열로 저장
            const size = 10 + Math.random() * 30 // 10px ~ 40px

            bubbleData.push({
                id: i, // 리액트 반복문(map)을 위한 고유 키
                size: `${String(size)}px`,
                left: `${String(Math.random() * 100)}%`,
                duration: `${String(Math.random() * 20)}s`, // 8초 ~ 20초
                delay: `${String(Math.random())}s`, // 0초 ~ 10초 대기
            })
        }

        return bubbleData
    }, []) // 빈 배열([])을 넣어 마운트 시 1회만 실행되게 함

    return (
        <>
            {/* 3. 생성된 데이터를 바탕으로 화면에 렌더링 */}
            {bubbles.map((bubble) => (
                <S.Bubble
                    key={bubble.id}
                    className="bubble"
                    style={{
                        width: bubble.size,
                        height: bubble.size,
                        left: bubble.left,
                        bottom: '0px', // 화면 살짝 아래에서 시작
                        animationDuration: bubble.duration,
                        animationDelay: bubble.delay,
                        position: 'absolute', // CSS에 없다면 추가
                    }}
                />
            ))}
        </>
    )
}

export default FloatingBubbles
