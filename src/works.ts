export interface IWork {
  href: string
  name: string
  releaseDate: string
  descriptionList: string[]
  // credits?: {
  //   role: string
  //   name: string
  // }[]
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

export const works: IWork[] = [
  {
    href: "carrying-capacity",
    name: "Carrying Capacity",
    releaseDate: "2024",
    descriptionList:
      ["Filmed on Lasqueti Island during Leviathan Studio Residency with Casey Adams.", "Performed by Hannah Rice and the ants."],
    videoEmbedSrc: "https://vimeo.com/947509460",
  },
  {
    href: "chair-reel",
    name: "Chair Reel",
    releaseDate: "2023",
    descriptionList: [
      "Let Fall 2023 duet performed and choreographed by Hannah Rice and Alia Swersky",
      "Bound | Less 2023 duet performed and choreographed by Hannah Rice and Alia Swersky",
      "Studio practice 2023 by Hannah Rice with sound by Radiohead"
    ],
    videoEmbedSrc: "https://vimeo.com/887025172",
  },
  {
    href: "yellow-house",
    name: "Yellow House",
    releaseDate: "2021",
    descriptionList: [
      "Trailer for collaborative film project based in Central Washington in 2021",
      "Directed by Hannah Rice and Leah Crosby with film editing from Sam Rice and Greg Mares and performance contributions from 8 local artists",
      "This project was originally presented as a micro film festival during the height of the pandemic. The films were presented in person at Ski Hill in Leavenworth and were live online for two weeks. In the winter of 2021/2022, Yellow House was presented at the MAC Gallery, where the film stream was showcased on a monitor and the house and all its contents in the center of the gallery. "
    ],
    videoEmbedSrc: "https://vimeo.com/602789908",
  },
  {
    href: "all-the-hours-of-the-day",
    name: "All The Hours of The Day",
    releaseDate: "2024",
    descriptionList: [
      "Excerpt from Gallery 1412 in Seattle, WA in 2024",
      "All The Hours of The Day is a movement and sound performance created by Hannah Rice and Casey Adams.",
      "The work uses improvisational sound and movement scores to explore the concept of Taylorism: a method of industrial management designed to increase efficiency and productivity.  This piece uses choreography to dramatize and exaggerate the mundane task based movements of a desk job.  With influences from Buster Keaton, Crystal Pite and Tony Oxley, this work collages theater, sound design and dance."
    ],
    videoEmbedSrc: "https://vimeo.com/997779347",
  },
  {
    href: "grasp-the-wet-grass",
    name: "Grasp The Wet Glass",
    releaseDate: "2024",
    descriptionList: [
      "Film portion of a live performance art piece crafted and performed by Hannah Rice in Seattle, Wa in 2024",
      "Composition set to the effects of an improvising body on marley floor, near a window, against the wood.",
    ],
    videoEmbedSrc: "https://vimeo.com/997884169",
  },

  // {
  //   href: "yellow-house-demo-no-vid",
  //   name: "Yellow House",
  //   releaseDate: "September 2021",
  //   description:
  //     ["Yellow House is a series of short films all centered around the theme of yellow and presented in solo format by 13 individual artists. You can find these films by stepping into our 4 square foot micro theater in Leavenworth, Washington, scanning the QR codes and experiencing a performance that extends beyond time and space."],
    // credits: [
    //   {
    //     role: "director",
    //     name: "Hannah Rice",
    //   },
    //   {
    //     role: "editor",
    //     name: "Greg Something",
    //   },
    // ],
  //   externalLink: {
  //     href: "https://www.instagram.com/p/CTzo7cXJfTB/?hl=en&img_index=1",
  //     title: "more on instagram",
  //   },
  //   images: [
  //     { href: "https://imgur.com/L3CCXe8.jpg", alt: "alt text" },
  //     { href: "https://imgur.com/gbiHQPn.jpg", alt: "alt text" },
  //     { href: "https://imgur.com/cTieBHV.jpg", alt: "alt text" },
  //   ],
  // },
  // {
  //   href: "yellow-house-demo",
  //   name: "Yellow House",
  //   releaseDate: "September 2021",
  //   description:
  //     ["Yellow House is a series of short films all centered around the theme of yellow and presented in solo format by 13 individual artists. You can find these films by stepping into our 4 square foot micro theater in Leavenworth, Washington, scanning the QR codes and experiencing a performance that extends beyond time and space."],
    // credits: [
    //   {
    //     role: "director",
    //     name: "Hannah Rice",
    //   },
    //   {
    //     role: "editor",
    //     name: "Greg Something",
    //   },
    // ],
  //   externalLink: {
  //     href: "https://www.instagram.com/p/CTzo7cXJfTB/?hl=en&img_index=1",
  //     title: "more on instagram",
  //   },
  //   videoEmbedSrc: "https://vimeo.com/947509460",
  //   images: [
  //     { href: "https://imgur.com/L3CCXe8.jpg", alt: "alt text" },
  //     { href: "https://imgur.com/gbiHQPn.jpg", alt: "alt text" },
  //     { href: "https://imgur.com/cTieBHV.jpg", alt: "alt text" },
  //   ],
  // },
]
