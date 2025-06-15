import { ErrorPage } from '@pages/error/ErrorPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import Root from '@pages/root/Root'
import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
            errorElement: <ErrorPage />,
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
                {
                    path: '/project/:id',
                    element: <Project />,
                },
                {
                    path: '*',
                    element: <NotFoundPage />,
                },
            ],
        },
    ],
    {
        basename: '/introduce-me/',
    }
)

export const Routes = () => <RouterProvider router={router} />
