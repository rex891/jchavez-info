import { $, component$, PropFunction, useSignal } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

type Links = {
  text: string
  href?: string
  children?: { text: string; href: string }[]
}[]

export default component$(() => {
  const checkbox = useSignal<HTMLInputElement>()
  const closeDrawer = $(() => {
    checkbox.value!.checked = false
  })

  const links: Links = [
    { text: 'Home', href: '/' },
    { text: 'Parent', children: [{ text: 'Home', href: '/' }] },
    { text: 'About', href: '/about' },
    { text: 'Daisy', href: '/daisy-ui' },
    { text: 'Joke', href: '/joke' },
    { text: 'Examples', href: '/examples' },
  ]

  return (
    <>
      <div class="navbar bg-primary shadow-sm">
        <div class="navbar-start">
          <div class="drawer lg:hidden">
            <input
              ref={checkbox}
              id="my-drawer"
              type="checkbox"
              class="drawer-toggle"
            />
            <div class="drawer-content">
              {/* <!-- Page content here --> */}
              <label for="my-drawer" class="btn btn-primary drawer-button">
                Open drawer
              </label>
            </div>
            <div class="drawer-side">
              <label
                for="my-drawer"
                aria-label="close sidebar"
                class="drawer-overlay"
              ></label>
              <ul class="menu bg-base-200 text-base-content min-h-full w-50 p-4">
                {/* <!-- Sidebar content here --> */}
                <LinkView links={links} closeDrawer={closeDrawer} />
              </ul>
            </div>
          </div>
          <Link class="btn btn-ghost text-xl">Joe Chav</Link>
        </div>
        {/* large screen */}
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <LinkView links={links} closeDrawer={closeDrawer} />
          </ul>
        </div>
        <div class="navbar-end">
          <Link class="btn">Button</Link>
        </div>
      </div>
    </>
  )
})

export const LinkView = component$<{
  links: Links
  closeDrawer?: PropFunction<() => void>
}>(({ links, closeDrawer }) => {
  return (
    <>
      {links.map((link) => {
        return link.children ? (
          <li>
            <details>
              <summary>{link.text}</summary>
              <ul class="p-2">
                {link.children.map((child) => {
                  return (
                    <li key={child.href}>
                      <Link onClick$={closeDrawer} href={child.href}>
                        {child.text}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </details>
          </li>
        ) : (
          <li key={link.href}>
            <Link onClick$={closeDrawer} href={link.href}>
              {link.text}
            </Link>
          </li>
        )
      })}
    </>
  )
})
