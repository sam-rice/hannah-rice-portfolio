import classNames from "classnames"
import { FC, useState } from "react"
import PageContainer from "../PageContainer"
import { Link } from "react-router-dom"

const WorksGalleryPage: FC = () => {
  const [mediaType, setMediaType] = useState("photo")

  return (
    <PageContainer className="flex items-center flex-col px-20">
      {/* <h1 className="underline mb-5">works</h1> */}
      <p>The current idea is: tiles will be displayed here on a grid, each representing a different work. Each tile will redirect to a different URL for easy sharing via social media, email, etc.</p>
      <Link className="underline" to="/works/yellow-house">click here to see demo of a work detail page (with video imbed)</Link>
      <Link className="underline" to="/works/yellow-house-no-vid">click here to see demo of work detail page (without video imbed)</Link>
      {/* <nav>
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
      </p> */}
    </PageContainer>
  )
}

export default WorksGalleryPage
