import { FC } from "react"
import { Link, Outlet } from "react-router-dom"

const MainLayout: FC = () => {
  return (
    <div className="flex grow">
      <aside>
        <nav>
          <ul className="space-y-1">
            <li className="hover:underline">
              <Link to="/">home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/about">about</Link>
            </li>
            <li className="hover:underline">
              <Link to="/works">works</Link>
            </li>
            <li className="hover:underline">
              <Link to="/pilates">pilates</Link>
            </li>
            {/* <li className="hover:underline">
              <Link to="/contact">contact</Link>
            </li> */}
          </ul>
        </nav>
      </aside>
      <Outlet />
    </div>
  )
}

export default MainLayout
