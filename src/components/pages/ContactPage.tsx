import { FC } from "react"
import PageContainer from "../PageContainer"

const ContactPage: FC = () => {
  return (
    <PageContainer classNames="flex items-center flex-col">
      <h1 className="underline mb-10">contact</h1>
      <p>Do we want a contact form/page?</p>
    </PageContainer>
  )
}

export default ContactPage
