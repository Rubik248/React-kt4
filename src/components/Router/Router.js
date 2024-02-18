import { Routes, Route } from 'react-router-dom'
import { routes } from '../../routes';



function Router() {
    return (
        <Routes>
            {routes.map(({path, element}) => {
                return (
                    <Route key={path} path={path} element={element}/>
                )
            })}
        </Routes>
     );
}

export default Router;