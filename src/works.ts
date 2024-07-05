export interface IWork {
  id: number
  name: string
  description: string
  externalLink?: string
  videoMarkup?: string
}

export const works = [
  {
    id: 1,
    name: "Yellow House",
    description:
      "Yellow House is a series of short films all centered around the theme of yellow and presented in solo format by 13 individual artists. You can find these films by stepping into our 4 square foot micro theater in Leavenworth, Washington, scanning the QR codes and experiencing a performance that extends beyond time and space.",
    externalLink: "https://www.instagram.com/p/CTzo7cXJfTB/?hl=en&img_index=1",
    videoMarkup: `<iframe src="https://player.vimeo.com/video/969964765?h=015f8b546e" width="640" height="338" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/969964765">Proof of Concept</a> from <a href="https://vimeo.com/newyorker">The New Yorker</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`,
  },
]
