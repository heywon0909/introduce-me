import { useEffect, useRef } from 'react'
import * as S from './styled'
import { FaHandsClapping } from 'react-icons/fa6'
import gsap from 'gsap'

export default function Home() {
    const greeting = useRef<HTMLHeadingElement>(null)
    const job = useRef<HTMLDivElement>(null)
    const hiFive = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({ repeat: 0 })
        tl.fromTo(
            greeting.current,
            {
                yPercent: -50,
                opacity: 0.3,
            },
            {
                yPercent: 0,
                opacity: 1,
                duration: 1,
            }
        )
            .fromTo(
                hiFive.current,
                {
                    opacity: 0.3,
                },
                {
                    duration: 1,
                    yPercent: 0,
                    rotateY: 30,
                    rotateZ: 30,
                    opacity: 1,
                }
            )

            .fromTo(
                job.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 2,
                }
            )
    }, [])

    useEffect(() => {
        const textElements: Array<HTMLElement> = gsap.utils.toArray(
            document.querySelectorAll('#text')
        )

        textElements.forEach((text) => {
            gsap.to(text, {
                backgroundSize: '100%',
                ease: 'none',
            })
        })
    }, [])

    return (
        <S.ContainerWrapper>
            <S.Frame left={3}>
                <S.FrameText>D</S.FrameText>
                <S.FrameText>E</S.FrameText>
                <S.FrameText>V</S.FrameText>
                <S.FrameText>E</S.FrameText>
                <S.FrameText>L</S.FrameText>
                <S.FrameText>O</S.FrameText>
                <S.FrameText>P</S.FrameText>
                <S.FrameText>E</S.FrameText>
                <S.FrameText>R</S.FrameText>
            </S.Frame>
            <S.Frame right={3}>
                <S.FrameText>F</S.FrameText>
                <S.FrameText>R</S.FrameText>
                <S.FrameText>O</S.FrameText>
                <S.FrameText>N</S.FrameText>
                <S.FrameText>T</S.FrameText>
                <S.FrameText>-</S.FrameText>
                <S.FrameText>E</S.FrameText>
                <S.FrameText>N</S.FrameText>
                <S.FrameText>D</S.FrameText>
            </S.Frame>
            <S.FrameContainer url={'/introduce-me/assets/image/image.png'}>
                <S.Container>
                    <S.ContentWrapper>
                        <S.TitleWrap ref={greeting}>
                            <S.Title id="text">HELLO </S.Title>
                            <S.Title ref={hiFive}>
                                <FaHandsClapping
                                    id="hand"
                                    size={60}
                                    color="rgb(67 92 221)"
                                />
                            </S.Title>
                        </S.TitleWrap>
                        <S.TitleWrap ref={job}>
                            <S.Title id="text">I&apos;m Heywon</S.Title>
                        </S.TitleWrap>
                        <S.TitleWrap ref={job}>
                            <S.JobDesc>Frontend Developer</S.JobDesc>
                        </S.TitleWrap>
                    </S.ContentWrapper>
                    <S.Img url={'/introduce-me/assets/image/photo.jpg'}>
                        <S.ProfileImg src={'/introduce-me/assets/image/heyIcon.png'} />
                    </S.Img>
                </S.Container>
            </S.FrameContainer>
        </S.ContainerWrapper>
    )
}
