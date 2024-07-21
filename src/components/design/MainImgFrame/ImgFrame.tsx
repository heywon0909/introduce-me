import { useEffect, useRef } from 'react';
import * as S from '../styled'
import gsap from 'gsap'
import { FaHandsClapping } from 'react-icons/fa6';
interface Props{
    children: React.ReactNode;
}
export const ImgFrame = ({children}:Props) => {
    const greeting = useRef<HTMLHeadingElement>(null);
    const job = useRef<HTMLDivElement>(null);
    const hiFive = useRef<HTMLDivElement>(null);
    
  
 

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
          <S.FrameContainer>
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
                            <S.Title id="text">I&apos;m </S.Title>
                        </S.TitleWrap>
                    <S.TitleWrap ref={job}>
                            <S.Title id="text">Heywon</S.Title>
                        </S.TitleWrap>
                        <S.TitleWrap ref={job}>
                            <S.JobDesc>Frontend Developer</S.JobDesc>
                        </S.TitleWrap>
                    </S.ContentWrapper>
                   {children}
                </S.Container>
            </S.FrameContainer>
    )
}