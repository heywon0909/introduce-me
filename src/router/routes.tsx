import Career from '@pages/career/Career'
import Info from '@pages/info/Info'
import Home from '@pages/main/Home'
import Project from '@pages/project/Project'
import Root from '@pages/root/Root'
import Skills from '@pages/skills/Skills'
import { RouteObject } from 'react-router-dom'

// import Insert from 'pages/insert/Insert';

// eslint-disable-next-line variablesrules/array-definition
const paths: RouteObject[] = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/info',
                element: <Info />,
            },
            {
                path: '/skills',
                element: <Skills />,
            },
            {
                path: '/career',
                element: <Career />,
            },
            {
                path: '/project',
                element: <Project />,
            },
        ],
    },
]

export default paths
