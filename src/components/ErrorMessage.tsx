import { FC } from "react"
import { Link } from "react-router-dom"

const ErrorMessage: FC = () => {
  return (
    <div className="text-center h-full flex flex-col justify-around">
      <div>
        <p>something went wrong.</p>
        <Link className="underline" to="/">return home</Link>
      </div>
      <br />
    </div>
  )
}

export default ErrorMessage
