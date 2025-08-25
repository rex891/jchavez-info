import { $, component$, useSignal } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export default component$(() => {
  const checkbox = useSignal<HTMLInputElement>()
  const closeDrawer = $(() => (checkbox.value!.checked = false))

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
                <li>
                  <Link onClick$={closeDrawer} href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <details>
                    <summary>Parent</summary>
                    <ul class="p-2">
                      <li>
                        <Link onClick$={closeDrawer}>Submenu 1</Link>
                      </li>
                      <li>
                        <Link onClick$={closeDrawer}>Submenu 2</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link onClick$={closeDrawer} href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/daisy-ui" onClick$={closeDrawer}>
                    Daisy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link class="btn btn-ghost text-xl">Joe Chavez</Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul class="p-2">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/daisy-ui">Daisy</Link>
            </li>
            <li>
              <Link href="/joke">Joke</Link>
            </li>
            <li>
              <Link href="/examples">Examples</Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <Link class="btn">Button</Link>
        </div>
      </div>
    </>
  )
})
