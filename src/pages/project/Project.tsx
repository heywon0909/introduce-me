import image from '/assets/image/image.png'
import OImage from '/assets/image/image.webp'
import ProjectBunney from '/assets/image/project-bunney.png'
import OProjectBunney from '/assets/image/project-bunney.webp'
import ProjectGame from '/assets/image/project-game.png'
import OProjectGame from '/assets/image/project-game.webp'
import ProjectAudio from '/assets/image/project-audio.png'
import OProjectAudio from '/assets/image/project-audio.webp'
import ProjectEslint from '/assets/image/project-eslint.png'
import OProjectEslint from '/assets/image/project-eslint.webp'
import { TechBunney } from 'bunney-ui/TechBunney'
import { ProjectDesc } from '@components/page/project/ProjectDesc'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router'
import * as S from './styled'

export default function Project() {
    const { id } = useParams()
    const container = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (container.current) {
            container.current.style.display = 'block'
        }
    }, [])

    useEffect(() => {
        if (id) {
            const idElem = document.getElementById(id)
            if (idElem) idElem.scrollIntoView({ behavior: 'auto' })
        }
    }, [id])

    useEffect(() => {
        const img = new Image()
        img.src = image
    }, [])

    const projects = [
        {
            id: 0,
            imageUrl: ProjectBunney,
            optimizationImgUrl: OProjectBunney,
            core: 'Open Source library',
            title: 'React UI 라이브러리 제작',
            desc: '/introduce-me/assets/md/project-bunney.md',
        },
        {
            id: 1,
            imageUrl: ProjectEslint,
            optimizationImgUrl: OProjectEslint,
            title: '나만의 eslint plugin 제작',
            core: 'ESlint plugin',
            desc: '/introduce-me/assets/md/project-plugin.md',
        },
        {
            id: 2,
            imageUrl: ProjectGame,
            optimizationImgUrl: OProjectGame,
            title: '짝맞추기 게임을 React로 구현',
            core: 'React Game Project',
            desc: '/introduce-me/assets/md/project-game.md',
        },
        {
            id: 3,
            imageUrl: ProjectAudio,
            optimizationImgUrl: OProjectAudio,
            title: 'web Audio API 활용하여 오디오 음향 효과 웹페이지',
            core: 'web Audio API',
            desc: '/introduce-me/assets/md/project-audio.md',
        },
    ]
    return (
        <S.ContainerWrapper>
            <picture>
                <source srcSet={OImage} type="image/webp"></source>
                <S.BgImg src={image} />
            </picture>
            <S.FlexContainer>
                <S.ColumnContainer>
                    <S.Title>ABOUT PROJECTS</S.Title>
                </S.ColumnContainer>
                <div style={{ width: '150px', height: '150px' }}>
                    <TechBunney />
                </div>
            </S.FlexContainer>

            <S.ColumnContainer
                style={{ gap: '100px', marginTop: '120px', display: 'none' }}
                ref={container}
            >
                {projects.map((project) => (
                    <ProjectDesc
                        id={project.id}
                        core={project.core}
                        desc={project.desc}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        optimizationImgUrl={project.optimizationImgUrl}
                        key={project.id}
                    />
                ))}
            </S.ColumnContainer>
        </S.ContainerWrapper>
    )
}
