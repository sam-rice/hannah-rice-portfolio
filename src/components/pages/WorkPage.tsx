import { FC } from 'react'
import PageContainer from '../PageContainer'
import { useParams } from 'react-router-dom'
import { works, IWork } from "../../works"
import WorkDetails from '../WorkDetails'
import ErrorMessage from '../ErrorMessage'

const WorkPage: FC = () => {
  const { id = "" } = useParams()
  const work = works.find((work: IWork) => work.id === parseInt(id))

  return (
    <PageContainer>
      {
        work ? <WorkDetails {...work} /> : <ErrorMessage />
      }
    </PageContainer>
  )
}

export default WorkPage