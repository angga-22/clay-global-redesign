import * as React from "react"
import Clients from '../sections/landingPage/Clients'
import Highlight from '../sections/landingPage/Highlight'
import ServicesList from '../sections/landingPage/ServicesList'
import TopContent from '../sections/landingPage/TopContent'

const LandingPage = () => {
  return (
    <main >
      <TopContent />
      <ServicesList />
      <Clients />
      <Highlight />
    </main>
  )
}

export default LandingPage

export const Head = () => <title>Clay: UI/UX Design</title>
