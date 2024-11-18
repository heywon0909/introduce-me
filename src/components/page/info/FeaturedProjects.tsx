import * as S from '@pages/info/styled'
import ProjectBunney from '/assets/image/project-bunney.png'
import ProjectGame from '/assets/image/project-game.png'
import ProjectAudio from '/assets/image/project-audio.png'
import ProjectEslint from '/assets/image/project-eslint.png'
import { Project } from './Project'
export const FeaturedProjects = () => {
    const dataArr = [
        {
            id: 0,
            imageUrl: ProjectBunney,
            title: 'bunney 캐릭터를 활용한 오픈소스 라이브러리 제작',
            desc: `emotion, gsap를 활용하여 React 오픈소스 UI 라이브러리를 제작해보았습니다.`,
        },
        {
            id: 1,
            imageUrl: ProjectEslint,
            title: '나만의 eslint plugin 제작',
            desc: `ate-Eight 프론트 팀에서 만든 code convention 을 eslint-plugin 개발하였습니다.`,
        },
        {
            id: 2,
            imageUrl: ProjectGame,
            title: '짝맞추기 게임을 React로 구현',
            desc: `재귀를 활용하여 카드맞추기 로직을 구현하였고, javaScript 소스를 typeScript로 마이그레이션하였습니다.`,
        },
        {
            id: 3,
            imageUrl: ProjectAudio,
            title: 'web Audio API 활용하여 오디오 음향 효과 웹페이지',
            desc: `webAudio API 활용하여 오디오에 음향 효과 줄 수 있는 웹페이지를 제작해보았습니다.`,
        },
    ]
    return (
        <S.UserDesc className="item">
            <S.Title>Featured Projects</S.Title>
            <S.ProjectFlex>
                {dataArr.map((v) => (
                    <Project
                        imageUrl={v.imageUrl}
                        title={v.title}
                        desc={v.desc}
                        key={v.id}
                    />
                ))}
            </S.ProjectFlex>
        </S.UserDesc>
    )
}
