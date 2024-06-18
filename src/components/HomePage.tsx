import { FC } from "react"

import home1 from "../images/home1.jpg"
// import home2 from "../images/home2.jpg"
// import home3 from "../images/home3.jpg"
// import home4 from "../images/home4.jpg"
// import home5 from "../images/home5.jpg"
// import home6 from "../images/home6.jpg"
// import home7 from "../images/home7.jpg"


const HomePage: FC = () => {




  return (
    <div className="flex items-center flex-col">
      <p className="mb-6">Some kind of tag line here?</p>
      <img className=" max-w-5xl" src={home1} alt="performance" />
    </div>
  )
}

export default HomePage
