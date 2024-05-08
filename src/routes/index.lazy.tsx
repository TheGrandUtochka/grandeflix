import { createLazyFileRoute } from '@tanstack/react-router'
import Main from "../pages/index/Main.tsx";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <Main />
        </>
    )
}
