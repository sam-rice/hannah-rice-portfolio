import { FC } from "react"

const StatementPage: FC = () => {
  const statementIntro =
    "My work is research into the body as it relates to environment, sound and physical objects.  My practice seeks to challenge the assumed distinction between the living you and the sentient earth.  I explore this through set choreographic and improvised material generated for site-specific performance."

  const spaceIntro =
    "I take cues from architecture.  Lines of formality— of compositional integrity.  Forearm parallel to door hinge, eyes tracing baseboard, femur in line with cantilever beam.  I'm interested in pulling you into this space.  To bring you back to now as witness with the light pouring through the windows, with the rain against the steel roof.  Regarding the inevitable interplay of the environment in performance."

  const processIntro =
    "I often ask, how can I savor development and push against the impulse of presentation?  Prioritizing time to craft is a rebellion against the unstoppable forces of oppressive systems- a commitment to self, a commitment to nature, a commitment to researching the enigmatic wonders of living. It is an attempt to press pause on the slow motion combustion that is modern life.  To remove myself from the metal scraps flying through the air.  To remain honest, curious and glacial in the face of acceleration."

  const processSubIntro =
    "Documentation has become a big part of my work.  Recording spontaneous sounds in nature and of the body, moving against the vinyl floor.  Recording improvised successes and giant failures.  It is all practice."

  return (
    <article className="flex items-center flex-col space-y-7 mb-8">
      <h1 className="underline">artist statement</h1>
      <p>{statementIntro}</p>
      <h2 className="font-bold pt-12">SPACE</h2>
      <div>
        Large movement studios | remote sprawling woodlands | abandoned
        structural shelters
      </div>
      <p>{spaceIntro}</p>
      <div>
        I am interested in decontextualization as a pathway to rediscovery.
      </div>
      <div className="italic">Big bodies squished into household aquariums</div>
      <h2 className="font-bold pt-12">SOUND</h2>
      <div>
        The <strong>body that sounds</strong> against stationary objects. Proof
        of life, proof of relationship to planet.
      </div>
      <div className="flex w-full [&>*>*]:italic">
        <div className="w-1/2">
          <div className="text-right">
            Twigs snapping under the rolling flesh
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>a tiny yellow house.</div>
        </div>
        <div className="w-1/2">
          <br />
          <div>Documented and projected</div>
          <div>into an empty sterile room</div>
          <br />
          <div>or</div>
          <br />
          <br />
        </div>
      </div>
      <div>Electricity cables humming in the woods</div>
      <h2 className="font-bold pt-12">PROCESS</h2>
      <p>{processIntro}</p>
      <p>{processSubIntro}</p>
      <div className="text-center">
        <h3>I am committed to:</h3>
        <ul>
          <li>Art in rural spaces</li>
          <li>Found sounds</li>
          <li>Found objects</li>
          <li>Staying with
            <ul>
              <li>Collaborative relationships</li>
              <li>Change as development</li>
              <li>Practice as performance</li>
              <li>Honesty as presence</li>
              <li className="font-bold">The body as research</li>
            </ul>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default StatementPage
