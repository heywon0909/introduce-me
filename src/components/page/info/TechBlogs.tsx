import * as S from '@pages/info/styled'
import { ProjectContainer } from './ProjectContainer'
import { Blog } from './Blog'
export const TechBlogs = () => {
    const dataArr = [
        {
            id: 0,
            title: 'Vite Study',
            desc: 'monorepo에서의 Vite를 build tool로 활용할때, 사전 번들링에 대해 공부한 내용을 정리하였습니다.',
            tag: ['#Vite', '#prebundling'],
        },
        {
            id: 1,
            title: '나만의 ESLint Plugin 만들기',
            desc: `espree를 활용하여 ate-Eight 팀프로젝트의 ESLint plugin을 만들었습니다.`,
            tag: ['#ESLint', '#jest', '#espree'],
        },
        {
            id: 2,
            title: 'Vite vs Rollup',
            desc: 'Vite, Rollup에 대한 기본적인 개념에 대해 정리하였습니다.',
            tag: ['#Vite', '#Rollup'],
        },
        {
            id: 3,
            title: 'webpack',
            desc: `webpack을 bundler로 React 프로젝트에서 번들크기 최적화를 진행하였습니다.`,
            tag: ['#CRA', '#caching', '#plugin'],
        },
        {
            id: 4,
            title: 'Websocket',
            desc: `Websocket의 개념 및 원리에 대해 정리하였습니다.`,
            tag: ['#Websocket', '#pingpong'],
        },
    ]
    return (
        <ProjectContainer title="TechBlogs">
            <S.ProjectFlex>
                {dataArr.map((v) => (
                    <Blog
                        title={v.title}
                        desc={v.desc}
                        key={v.id}
                        tag={v.tag}
                    />
                ))}
            </S.ProjectFlex>
        </ProjectContainer>
    )
}
