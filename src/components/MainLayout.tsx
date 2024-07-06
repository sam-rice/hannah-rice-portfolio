import classNames from "classnames"
import { FC } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

const MainLayout: FC = () => {
  const { pathname } = useLocation()

  const navRoutes = [
    { href: "/about", title: "about" },
    { href: "/works", title: "works" },
    { href: "/pilates", title: "pilates" },
  ]

  const navButtons = navRoutes.map(
    ({ href, title }: { href: string; title: string }) => (
      <li
        key={href}
        className={classNames("hover:underline", {
          "underline text-black": pathname.includes(href),
        })}
      >
        <Link to={href}>{title}</Link>
      </li>
    )
  )

  return (
    <div className="flex grow">
      <aside>
        <nav>
          <ul className="space-y-1">
            <li
              className={classNames("hover:underline", {
                "underline text-black": pathname === "/",
              })}
            >
              <Link to="/">home</Link>
            </li>
            {navButtons}
          </ul>
        </nav>
      </aside>
      <Outlet />
    </div>
  )
}

export default MainLayout
