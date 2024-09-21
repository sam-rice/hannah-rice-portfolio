import { FC, ReactNode } from "react"
import { IWork } from "../works"
import { Link } from "react-router-dom"
import ReactPlayer from "react-player/vimeo"

const WorkDetails: FC<IWork> = ({
  name,
  releaseDate,
  descriptionList,
  // credits,
  videoEmbedSrc,
  externalLink,
  images,
}) => {
  // const creditList = credits?.map(
  //   ({ role, name }: { role: string; name: string }) => (
  //     <div
  //       className="flex"
  //       key={role}
  //     >
  //       <dt className="mr-3">{role}:</dt>
  //       <dd>{name}</dd>
  //     </div>
  //   )
  // )

  const descriptionParagraphs = descriptionList.map((line: string, idx) => (
    <p key={idx}>{line}</p>
  ))

  const imageNodes = images?.map(
    ({ href, alt }: { href: string; alt: string }) => (
      <img
        // className="max-h-[32rem] w-fit"
        src={href}
        alt={alt}
      />
    )
  )

  return (
    <>
      <h1 className="italic text-2xl mb-10 w-full">{name}</h1>
      {videoEmbedSrc ? (
        <ReactPlayer
          url={videoEmbedSrc}
          controls
          wrapper={({ children }) => (
            <div className="w-full h-[400px]">{children}</div>
          )}
        />
      ) : imageNodes ? (
        imageNodes[0]
      ) : (
        <></>
      )}
      <section className="space-y-7 my-16">
        <div>{releaseDate}</div>
        {descriptionParagraphs}
        {/* {credits && <dl>{creditList}</dl>} */}
        {externalLink && (
          <Link
            className="inline-block underline hover:text-black"
            to={externalLink.href}
          >
            {externalLink.title}
          </Link>
        )}
      </section>
      {images && images.length > 1 && (
        <ul className="space-y-4">
          {imageNodes?.reduce((acc: ReactNode[], node: ReactNode, idx) => {
            if (idx !== 0 || videoEmbedSrc) {
              acc.push(<li key={idx}>{node}</li>)
            }
            return acc
          }, [])}
        </ul>
      )}
    </>
  )
}

export default WorkDetails
