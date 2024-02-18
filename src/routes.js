import ItemsList from "./components/ItemsList/ItemsList"
import ItemPage from "./components/ItemPage/ItemPage"
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"

export const routes = [
    {
        path: '/products',
        element: <ItemsList/>
    },
    {
        path: 'products/product/:id',
        element: <ItemPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]