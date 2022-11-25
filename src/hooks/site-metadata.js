import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          image
          keywords
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}