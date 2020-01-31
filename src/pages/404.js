import React from "react"
// import { Link } from "gatsby"

import Header from "../components/site/header"
import Layout from "../components/site/layout"
import SEO from "../components/site/seo"

const NotFoundPage = () => (
  <>
    <Header/>
    <Layout>
      <SEO title="404: Not found" />
      <div style={{color: 'white'}}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>

      {/* Go Home Button */}
      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  </>
)

export default NotFoundPage
