import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
const Logo = ({ mode }) => {
  return (
    <>
      {
        mode === 'default' ?
          <StaticImage src={'../assets/icons/click-light.png'} alt="logo" />
          :
          <StaticImage src={'../assets/icons/click-night.png'} alt="logo" />
      }
    </>
  )
}

export default Logo