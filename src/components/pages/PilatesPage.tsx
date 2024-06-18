import { FC } from "react"
import PageContainer from "../PageContainer"

const PilatesPage: FC = () => {
  const pilatesBio =
    "Hannah Rice is a movement researcher, artist and teacher committed to connecting with others through the body's distinct language.  She graduated cum laude from Cornish College of the Arts in 2018 with a BFA in dance and a Pilates certification.   Hannah also studied with Hali Fiano at Awake Bodies and earned her full apparatus certification through Vitality Pilates.  Before her journey as a Pilates instructor began, Hannah taught ballet and contemporary dance to children and adults for 10 years.  She has directed dance programs at recreational studios and guest taught for University of Washington.  She currently works at Cornish College of the Arts in the dance department as the Pilates instructor.  She also teaches for studios in Seattle as teaching out of her own space.  Her approach to the Pilates technique comes from a love of ballet- discovering length in the body while maintaining alignment, strength and pushing the edges of expansion.  Her teaching is largely inspired by the work of those who came before her: Irene Dowd's soft and abstract sensibilities, Michele Miller's rigor and attention to isolation, Hali Fiano's approach to rehabilitation and physical therapy.   When she's not teaching or working on art projects, Hannah spends her time exploring in the Cascade Mountain Range and riding her bike to the next state."

  return (
    <PageContainer classNames="flex items-center flex-col px-20">
      <h1 className="underline mb-10">pilates</h1>
      <article className="flex">
        <div className="px-8">
          <p>{pilatesBio}</p>
          <div className="mt-5">
            <a href="mailto:hannahlricer@gmail.com" className="underline">
              Send me a note for pilates inquiries.
            </a>
          </div>
        </div>
        <img
          className="w-2/5"
          src="https://i.imgur.com/gbiHQPn.jpg"
          alt="big stretch"
        />
      </article>
    </PageContainer>
  )
}

export default PilatesPage
