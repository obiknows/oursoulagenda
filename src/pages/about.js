import React from "react"

import Header from "../components/header"
// import BackHomeButton from "../components/backhomebutton"
import TitleHeader from "../components/titleheader"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <>
  <Header />
  <Layout>
    <SEO title="About Us" />
    <div style={{color:'white', lineHeight: 1.55, marginTop: 40,}}>
      <TitleHeader title="About Us"/>
      <h3>
        We're Aïssatou and Obinna, two creative nomads documenting our journey towards
        freedom and financial abundance. Our story together starts at Columbia University,
        where we met as friends in the Big Apple and fell for each other by senior year.
      </h3>
      <h3>
        3000 miles later, after graduation we moved to Oakland where we lived and worked for
        non-profits and in tech. But we quickly we realized that high-paying salaries was not the end
        all be all and we decided to escape the matrix and make a change
      </h3>
      <h3>
        After planning for a few months, in June 2019 we bought & renovated our 70s Camper Van, Soula,
        sold most of our belongings, and moved into the van and began traveling the US full-time, while
        documenting our experience online.
      </h3>
      <h3>
        These days, we share our knowledge, expertise and lessons from our unique life in order to empower
        others with valuable information that they can apply to help them to prosper on their journey.
      </h3>
      <h3>
        All of our work is motivated by our mission to build community with our people and create generational
        wealth for ourselves and those around us.
      </h3>

      {/* Go Home Button */}
      {/* <BackHomeButton/> */}
    </div>
  </Layout>
  </>
)


export default About
