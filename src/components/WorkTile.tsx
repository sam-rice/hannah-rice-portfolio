import { FC } from 'react'
import { IWork } from '../works'

const WorkTile: FC<IWork> = ({ name }) => {
  return (
    <li>{name}</li>
  )
}

export default WorkTile