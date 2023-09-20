import {
    ClassAttributes,
    createElement,
    HTMLAttributes,
    ReactNode,
} from "react"

const makeNode = (name: string) =>
(
    props: HTMLAttributes<HTMLElement> & ClassAttributes<HTMLElement>,
    ...children: ReactNode[]
) => {
    return createElement(name, props, children)
}

export const div = makeNode("div")
export const button = makeNode("button")
