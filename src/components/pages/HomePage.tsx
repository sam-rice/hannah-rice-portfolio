import { FC } from "react"
import { Link } from "react-router-dom"
import PageContainer from "../PageContainer"

const HomePage: FC = () => {
  return (
    <PageContainer classNames="flex items-center flex-col">
      <p className="mb-4">
        <Link
          className="mx-3"
          to="/works"
        >
          Movement Artist
        </Link>{" "}
        ||{" "}
        <Link
          className="mx-3"
          to="/pilates"
        >
          Pilates Instructor
        </Link>{" "}
        || <span className="mx-3">Seattle, WA</span>
      </p>
      <div className="w-20 border-t border-black mb-3" />
      <ul className="flex text-gray-500 mb-6">
        <li className="mr-3 hover:underline">
          <a href="https://www.instagram.com/urstrooly/">@urstrooly</a>
        </li>
        {" | "}
        <li className="ml-3 hover:underline">
          <a href="mailto:hannahlricer@gmail.com">email</a>
        </li>
      </ul>
      <img
        className="w-5/6"
        src="https://i.imgur.com/1jQRtB5.jpg"
        alt="performance"
      />
    </PageContainer>
  )
}

export default HomePage
