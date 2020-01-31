import React from "react"
import { Link } from "gatsby"


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const BackHomeButton = () => {
  return (
    <div style={{marginTop: 50, textAlign:'center'}}>
      <Link to="/" style={{color: 'black', backgroundColor: '#FEC502', padding: 15, fontFamily: 'Lalezar', textDecoration: 'none'}}>Back to the homepage</Link>
    </div>
  )
}

export default BackHomeButton
