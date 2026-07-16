import image from '/assets/image/image.png'
import ProjectBunney from '/assets/image/project-bunney.png'
import OProjectBunney from '/assets/image/project-bunney.webp'
import ProjectGame from '/assets/image/project-game.png'
import OProjectGame from '/assets/image/project-game.webp'
import ProjectAudio from '/assets/image/project-audio.png'
import OProjectAudio from '/assets/image/project-audio.webp'
import ProjectEslint from '/assets/image/project-eslint.png'
import OProjectEslint from '/assets/image/project-eslint.webp'
import { ProjectDesc } from '@components/page/project/ProjectDesc'
import { Suspense, useEffect, useRef } from 'react'
import * as S from './styled'

export default function Project() {
    const container = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (container.current) {
            container.current.style.display = 'block'
        }
    }, [])

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
            github: {
                title: 'bunney-ui',
                url: 'https://github.com/heywon0909/bunney-ui',
            },
        },
        {
            id: 1,
            imageUrl: ProjectEslint,
            optimizationImgUrl: OProjectEslint,
            title: '나만의 eslint plugin 제작',
            core: 'ESlint plugin',
            desc: '/introduce-me/assets/md/project-plugin.md',
            github: {
                title: 'eslint-plugin-ate',
                url: 'https://github.com/heywon0909/ate',
            },
        },
        {
            id: 2,
            imageUrl: ProjectGame,
            optimizationImgUrl: OProjectGame,
            title: '짝맞추기 게임을 React로 구현',
            core: 'React Game Project',
            desc: '/introduce-me/assets/md/project-game.md',
            github: {
                title: 'match-picture-game',
                url: 'https://github.com/heywon0909/match-picture-game',
            },
        },
        {
            id: 3,
            imageUrl: ProjectAudio,
            optimizationImgUrl: OProjectAudio,
            title: 'web Audio API 활용하여 오디오 음향 효과 웹페이지',
            core: 'web Audio API',
            desc: '/introduce-me/assets/md/project-audio.md',
            github: {
                title: 'audio-mixer',
                url: 'https://github.com/heywon0909/audio-mixer',
            },
        },
    ]
    return (
        <S.ContainerWrapper>
            {projects.map((project) => (
                <S.ColumnContainer key={project.id}>
                    <Suspense fallback={<div></div>}>
                        <ProjectDesc
                            id={project.id}
                            core={project.core}
                            desc={project.desc}
                            title={project.title}
                            imageUrl={project.imageUrl}
                            optimizationImgUrl={project.optimizationImgUrl}
                            key={project.id}
                            github={project.github}
                        />
                    </Suspense>
                </S.ColumnContainer>
            ))}
        </S.ContainerWrapper>
    )
}
