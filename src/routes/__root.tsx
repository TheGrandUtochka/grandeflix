import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '../style.css'
import Header from "../components/Header/Header.tsx";

export const Route = createRootRoute({
    component: () => (
        <>
            <Header />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})
