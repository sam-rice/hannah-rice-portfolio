import { Link, Outlet } from "react-router-dom"

function PageLayout() {
  return (
    <div className="flex">
      <aside className="mr-11">
        <nav>
          <ul>
            <li className="hover:underline">
              <Link to="/">home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/statement">artist statement</Link>
            </li>
            <li className="hover:underline">
              <Link to="/performance">performance</Link>
            </li>
            <li className="hover:underline">
              <Link to="/pilates">pilates</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default PageLayout
