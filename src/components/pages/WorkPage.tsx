import { FC } from 'react'
import PageContainer from '../PageContainer'
import { useParams } from 'react-router-dom'
import { works, IWork } from "../../works"
import WorkDetails from '../WorkDetails'
import ErrorMessage from '../ErrorMessage'

const WorkPage: FC = () => {
  const { workName = "" } = useParams()
  const work = works.find((work: IWork) => work.href === workName)

  return (
    <PageContainer className="px-32 flex flex-col items-center">
      {
        work ? <WorkDetails {...work} /> : <ErrorMessage />
      }
    </PageContainer>
  )
}

export default WorkPage