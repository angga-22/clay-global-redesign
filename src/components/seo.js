import React from "react"
import { useSiteMetadata } from '../hooks/site-metadata'
import icon from '../assets/icons/favicon-logo.png'
export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, keywords } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    keywords: `${keywords}`
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="icon" href={icon} />
      {children}
    </>
  )
}