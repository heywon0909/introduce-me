import Root from '@pages/root/Root'
import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Insert from 'pages/insert/Insert';

const Home = lazy(() => import('@pages/main/Home'))
const Info = lazy(() => import('@pages/info/Info'))
const Career = lazy(() => import('@pages/career/Career'))
const Project = lazy(() => import('@pages/project/Project'))
const Skills = lazy(() => import('@pages/skills/Skills'))

const router = createBrowserRouter(
    [
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
    ],
    {
        basename: '/introduce-me/',
    }
)

export const Routes = () => {
    return <RouterProvider router={router} />
}
