import { FC, ReactNode } from "react"
import { IWork } from "../works"
import { Link } from "react-router-dom"

const WorkDetails: FC<IWork> = ({
  name,
  releaseDate,
  description,
  credits,
  videoEmbedSrc,
  externalLink,
  images,
}) => {
  const creditList = credits?.map(
    ({ role, name }: { role: string; name: string }) => (
      <div
        className="flex"
        key={role}
      >
        <dt className="mr-3">{role}:</dt>
        <dd>{name}</dd>
      </div>
    )
  )

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
        <iframe
          style={{
            width: "100%",
            aspectRatio: "2 / 1",
          }}
          src={videoEmbedSrc}
          title={name}
          allow="autoplay; fullscreen; picture-in-picture"
        />
      ) : imageNodes ? (
        imageNodes[0]
      ) : (
        <></>
      )}
      <section className="space-y-7 my-16">
        <div>{releaseDate}</div>
        <p>{description}</p>
        {credits && <dl>{creditList}</dl>}
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
