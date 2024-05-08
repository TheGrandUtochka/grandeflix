import { createLazyFileRoute } from '@tanstack/react-router'
import Main from "../pages/index/Main.tsx";

export const Route = createLazyFileRoute('/films/')({
    component: FilmIndex,
})

function FilmIndex() {
    return (
        <>
            <Main />
        </>
    )
}
