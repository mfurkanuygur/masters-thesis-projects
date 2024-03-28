import Homeview from '../views/Homeview'
import DetailPage from '../views/DetailPage'
import { useRoutes } from 'react-router-dom'

const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <Homeview /> },
        { path: `/:id`, element: <DetailPage /> }
    ])
    return routes
}

export default Router