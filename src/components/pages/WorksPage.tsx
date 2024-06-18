import classNames from "classnames"
import { FC, useState } from "react"
import PageContainer from "../PageContainer"

const WorksPage: FC = () => {
  const [mediaType, setMediaType] = useState("photo")

  return (
    <PageContainer classNames="flex items-center flex-col">
      <h1 className="underline mb-5">works</h1>
      <nav>
        <ul className="flex">
          <li>
            <button
              className={classNames("mr-5", {
                underline: mediaType === "photo",
              })}
              onClick={() => setMediaType("photo")}
            >
              photo
            </button>
          </li>
          {" | "}
          <li>
            <button
              className={classNames("ml-5", {
                underline: mediaType === "video",
              })}
              onClick={() => setMediaType("video")}
            >
              video
            </button>
          </li>
        </ul>
      </nav>
      <p className="mt-10">
        alternating photo/video galleries are displayed here when user clicks
        between media-type sub-nav
      </p>
    </PageContainer>
  )
}

export default WorksPage
