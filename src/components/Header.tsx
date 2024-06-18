import { FC } from "react"
import { Link } from "react-router-dom"

const Header: FC = () => {
  return (
    <header className="min-h-16 flex items-center mb-10">
      <Link to="/">hannah rice</Link>
    </header>
  )
}

export default Header
