import { FC } from "react"
import { Link } from "react-router-dom"
import PageContainer from "../PageContainer"

const HomePage: FC = () => {
  return (
    <PageContainer classNames="flex items-center flex-col">
      <p className="mb-7">
        <Link
          className="mx-3"
          to="/works"
        >
          movement artist
        </Link>{" "}
        ||{" "}
        <Link
          className="mx-3"
          to="/pilates"
        >
          pilates instructor
        </Link>
      </p>
      <div className="w-20 w-3/5 border-t border-black mb-6" />
      <ul className="flex text-gray-500 mb-6 ">
        <li className="mr-3 hover:underline">
          <a
            className="text-[.75rem]"
            href="https://www.instagram.com/urstrooly/"
          >
            @urstrooly
          </a>
        </li>
        {" | "}
        <li className="ml-3 hover:underline">
          <a
            className="text-[.75rem]"
            href="mailto:hannahlricer@gmail.com"
          >
            email
          </a>
        </li>
      </ul>
      <img
        className="w-5/6"
        // src="https://i.imgur.com/1jQRtB5.jpg"
        src="https://imgur.com/MfYMhlW.jpg"
        alt="performance"
      />
    </PageContainer>
  )
}

export default HomePage
