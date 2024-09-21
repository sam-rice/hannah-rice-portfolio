import { FC } from 'react'
import { IWork } from '../works'
import { Link } from 'react-router-dom'

const WorkTile: FC<IWork> = ({ name, releaseDate, href }) => {
  return (
    <li>
      <Link className="hover:underline" to={`/works/${href}`}>
        {`${name} - ${releaseDate}`}
      </Link>
    </li>
  )
}

export default WorkTile