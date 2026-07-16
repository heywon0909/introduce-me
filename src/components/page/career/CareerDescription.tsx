import gsap from 'gsap'
import * as S from '@pages/career/styled'
import FloatingBubbles from './FloatingBubble'
import { forwardRef, useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

interface Props {
    id: string
    bg: string
    company: string
    description: string
    details: string[]
}

gsap.registerPlugin(ScrollTrigger)

export const CareerDescription = forwardRef<HTMLDivElement, Props>(
    ({ id, bg, company, description, details }, ref) => {
        const descriptionRef = useRef(null)

        useEffect(() => {
            gsap.to(descriptionRef.current, {
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: '20px 80%',
                    end: 'bottom 100px',
                    scrub: true,
                    toggleActions: 'play none none reset',
                },
                yPercent: 0.5,
                ease: 'elastic',
                paused: true,
                opacity: 1,
                duration: 3,
            })
        }, [])

        return (
            <S.SectionBG bg={bg} ref={ref} id={id}>
                <FloatingBubbles />
                <S.Article>
                    <S.Company>
                        <S.Title>{company}</S.Title>
                        <S.Text>{description}</S.Text>
                    </S.Company>
                    <S.Description data-animate ref={descriptionRef}>
                        <S.Ul>
                            {details.map((detail, i) => (
                                <S.Li key={i}>{detail}</S.Li>
                            ))}
                        </S.Ul>
                    </S.Description>
                </S.Article>
            </S.SectionBG>
        )
    }
)
