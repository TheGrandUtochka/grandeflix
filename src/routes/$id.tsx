import {createFileRoute} from '@tanstack/react-router'
import Main from "../../pages/index/Main.tsx";

export const Route = createFileRoute('/$id')({
    component: FilmIndex,
})

function FilmIndex() {
    return (
        <>
            Meow!
        </>
    )
}