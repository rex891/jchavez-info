import { MouseEventHandler, ReactNode, useState } from "react"
import { button, div } from "./Html"
import { match, P } from "ts-pattern"

type Page = "about" | "main"

let quota = (await navigator.storage.estimate()).quota || 0
quota = quota / 1024 / 1024 / 1024

export default function App() {
    const [page, setPage] = useState<Page>("main")

    return div(
        {
            className: "App flex flex-col items-center justify-start h-full",
        },
        div(
            { className: "flex gap-4" },
            navButton("Home", () => setPage("main")),
            navButton("About", () => setPage("about")),
        ),
        div(
            { className: "h-full w-full" },
            match(page)
                .with("about", () => About(quota))
                .with("main", () => Main)
                .exhaustive(),
        ),
    )
}

const navButton = (text: string, onClick: MouseEventHandler) => {
    return button(
        {
            className: "text-xl border-2 p-4 rounded-2xl hover:bg-violet-600",
            onClick,
        },
        text,
    )
}

const About = (quota: number) => {
    return div(
        {
            className: "flex items-center justify-center bg-slate-600 h-full",
        },
        div({}, "storage quota: ", quota.toFixed(2), " gb"),
        navButton("get location", async () => {
            navigator.geolocation.getCurrentPosition((location) =>
                console.log(location)
            )
        }),
    )
}
const Main = div({
    className: "flex items-center justify-center bg-slate-600 h-full",
}, "Main")
