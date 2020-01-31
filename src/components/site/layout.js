/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { OutboundLink } from 'gatsby-plugin-google-analytics'

// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children}) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div
        style={{
          minHeight: `100vh`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: `2.22rem`,
        }}
      >
        <main style={{minHeight: `100vh`}}>{children}</main>
      </div>
      <footer style={{textAlign: 'center', backgroundColor: '#FEC502', paddingTop: `1rem`, paddingBottom: `1rem`,}}>
        <h6>
        © {new Date().getFullYear()}, Built by
        {` `}
        {/* <OutboundLink href="https://instagram.com/itsobinna">Obinna</OutboundLink> & */}
        {` `}
        Our Soul Agenda, All Rights Reserved
        </h6>
        <h6 style={{}}>
          <Link to="/about">About</Link>
          {` `}
          <Link to="/terms">Terms</Link>
          {` `}
          <Link to="/privacy">Privacy</Link>
        </h6>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
