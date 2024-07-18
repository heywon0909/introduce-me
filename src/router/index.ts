import { createBrowserRouter } from 'react-router-dom'
import routes from './routes'

const router = createBrowserRouter(routes, {
    basename: '/introduce-me/',
})

export default router
