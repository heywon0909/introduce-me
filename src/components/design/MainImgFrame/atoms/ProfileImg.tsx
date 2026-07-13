import gsap from 'gsap'
import * as S from '../../styled'
import { TechBunney } from 'bunney-ui/TechBunney'
import { useEffect, useRef } from 'react'
import { MenuLink } from '@components/common/Link/MenuLink'

export const ProfileImg = () => {
    const profileImgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(
            profileImgRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, delay: 3 }
        )
    }, [])

    return (
        <S.ProfileImg ref={profileImgRef}>
            <TechBunney
                color="linear-gradient(38deg, #7f7f83, #15181d)"
                earColor="linear-gradient(38deg, #7f7f83, #15181d)"
            />
            <MenuLink to="/career" style={{ marginTop: '100px' }}>
                계속하기
            </MenuLink>
        </S.ProfileImg>
    )
}
