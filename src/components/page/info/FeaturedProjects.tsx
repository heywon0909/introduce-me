import * as S from '@pages/info/styled'
import ProjectBunney from '/assets/image/project-bunney.png'
import OProjectBunney from '/assets/image/project-bunney.webp'
import ProjectGame from '/assets/image/project-game.png'
import OProjectGame from '/assets/image/project-game.webp'
import ProjectAudio from '/assets/image/project-audio.png'
import OProjectAudio from '/assets/image/project-audio.webp'
import ProjectEslint from '/assets/image/project-eslint.png'
import OProjectEslint from '/assets/image/project-eslint.webp'
import { Project } from './Project'
import { ProjectContainer } from './ProjectContainer'

export const FeaturedProjects = () => {
    const dataArr = [
        {
            id: 0,
            imageUrl: ProjectBunney,
            optimizationImgUrl: OProjectBunney,
            title: 'bunney 캐릭터를 활용한 오픈소스 라이브러리 제작',
            desc: `emotion, gsap를 활용하여 React 오픈소스 UI 라이브러리를 제작해보았습니다.`,
            tag: ['#ESM', '#TreeShaking', '#LightweightLibrary'],
        },
        {
            id: 1,
            imageUrl: ProjectEslint,
            optimizationImgUrl: OProjectEslint,
            title: '나만의 eslint plugin 제작',
            desc: `ate-Eight 프론트 팀에서 만든 code convention 을 eslint-plugin 개발하였습니다.`,
            tag: ['#espree', '#jest'],
        },
        {
            id: 2,
            imageUrl: ProjectGame,
            optimizationImgUrl: OProjectGame,
            title: '짝맞추기 게임을 React로 구현',
            desc: `재귀를 활용하여 카드맞추기 로직을 구현하였고, javaScript 소스를 typeScript로 마이그레이션하였습니다.`,
            tag: ['#React', '#TypeScript', '#Context API'],
        },
        {
            id: 3,
            imageUrl: ProjectAudio,
            optimizationImgUrl: OProjectAudio,
            title: 'web Audio API 활용하여 오디오 음향 효과 웹페이지',
            desc: `webAudio API 활용하여 오디오에 음향 효과 줄 수 있는 웹페이지를 제작해보았습니다.`,
            tag: ['#web Audio API', '#FileReader를 통한 파일 업로드'],
        },
    ]
    return (
        <ProjectContainer title="FeaturedProjects">
            <S.ProjectFlex>
                {dataArr.map((v) => (
                    <Project
                        imageUrl={v.imageUrl}
                        optimizationImgUrl={v.optimizationImgUrl}
                        title={v.title}
                        desc={v.desc}
                        tag={v.tag}
                        key={v.id}
                    />
                ))}
            </S.ProjectFlex>
        </ProjectContainer>
    )
}
