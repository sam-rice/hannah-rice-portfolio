import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"
import { Link, Outlet } from "react-router-dom"

const PageLayout: FC = () => {
  return (
    <div className="flex grow">
      <aside className="mr-11">
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
      {/* <main className="flex-1 px-5">
      </main> */}
      {/* <AnimatePresence>
        <motion.main
          className="flex-1 px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
        </motion.main>
      </AnimatePresence> */}
    </div>
  )
}

export default PageLayout
