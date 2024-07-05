export interface IWork {
  href: string
  name: string
  releaseDate: string
  description: string
  credits?: {
    role: string
    name: string
  }[]
  externalLink?: {
    href: string
    title: string
  }
  videoEmbedSrc?: string
  images?: {
    href: string
    alt: string
  }[]
}

export const works = [
  {
    href: "yellow-house",
    name: "Yellow House",
    releaseDate: "September 2021",
    description:
      "Yellow House is a series of short films all centered around the theme of yellow and presented in solo format by 13 individual artists. You can find these films by stepping into our 4 square foot micro theater in Leavenworth, Washington, scanning the QR codes and experiencing a performance that extends beyond time and space.",
    credits: [
      {
        role: "director",
        name: "Hannah Rice",
      },
      {
        role: "editor",
        name: "Greg Something",
      },
    ],
    externalLink: {
      href: "https://www.instagram.com/p/CTzo7cXJfTB/?hl=en&img_index=1",
      title: "more on instagram",
    },
    videoEmbedSrc: "https://player.vimeo.com/video/969964765?h=015f8b546e",
    images: [
      { href: "https://imgur.com/L3CCXe8.jpg", alt: "alt text" },
      { href: "https://imgur.com/gbiHQPn.jpg", alt: "alt text" },
      { href: "https://imgur.com/cTieBHV.jpg", alt: "alt text" },
    ],
  },
]
