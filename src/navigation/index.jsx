
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>hello world</div>,
    },
    {
        path: "/admin",
        element: <div>admin panel</div>,
    },
    {
        path: "/admin/dashboard",
        element: <div>admin dashboard</div>,
    },
    {
        path: "/product",
        element: <div>product</div>,
    },
    {
        path: "/product-details/:id",
        element: <div>product details</div>,
    },
    {
        path: "/cart",
        element: <div>console ninnga</div>,
    },
    {
        path: "/payment",
        element: <div>payment</div>,
    },
]);
const Navigation = ({ children }) => {
    return (

        <RouterProvider router={router}>
            {children}
        </RouterProvider>


    )
}

export default Navigation