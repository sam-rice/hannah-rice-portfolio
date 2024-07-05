import { FC } from "react"
import { IWork } from "../works"

const WorkDetails: FC<IWork> = ({ name }) => {
  return (
    <div>
      {name}
    </div>
  )
}

export default WorkDetails
