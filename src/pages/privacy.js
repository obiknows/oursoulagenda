import React from "react"
// import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from 'gatsby-plugin-google-analytics'


const Privacy = () => (
  <>
    <Header />
    <Layout>
      <SEO title="Privacy Policy" />
      <div style={{color: 'white', textAlign: 'center', marginTop: 40,}}>
        <h1>Privacy Policy</h1>
        <h3>So we had to have a Privacy Policy...</h3>
        <h3>So here it is. You can find it at this link {` `}
          <OutboundLink href="https://app.termly.io/document/privacy-policy/b94bb452-d797-43e6-bf9a-bc534c57853a">here</OutboundLink>
        </h3>
      </div>

      {/* Go Home Button */}
      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  </>
)

export default Privacy
