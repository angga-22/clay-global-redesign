import * as React from "react"
import Clients from '../sections/landingPage/Clients'
import Highlight from '../sections/landingPage/Highlight'
import ServicesList from '../sections/landingPage/ServicesList'
import TopContent from '../sections/landingPage/TopContent'
import { SEO } from "../components/seo"
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

export const Head = () => (
  <SEO />
)
