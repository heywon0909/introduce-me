import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import * as S from '../styled'
import { TextPlugin } from 'gsap/all'
import { ProfileImg } from './atoms/ProfileImg'

gsap.registerPlugin(TextPlugin)

export const ImgFrame = () => {
    const titleRef = useRef(null)

    useEffect(() => {
        gsap.to(titleRef.current, {
            text: 'FRONTEND <br/> DEVELOPER',
            duration: 3,
            ease: 'none',
        })
    }, [])

    return (
        <>
            <S.Title id="text" ref={titleRef}></S.Title>
            <ProfileImg />
        </>
    )
}
