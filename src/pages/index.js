import * as React from "react"
import Clients from '../sections/landingPage/Clients'
import ServicesList from '../sections/landingPage/ServicesList'
import TopContent from '../sections/landingPage/TopContent'

const LandingPage = () => {
  return (
    <main >
      <TopContent />
      <ServicesList />
      <Clients />
    </main>
  )
}

export default LandingPage

export const Head = () => <title>Clay: UI/UX Design</title>
