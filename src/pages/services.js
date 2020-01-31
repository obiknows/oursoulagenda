/* eslint-disable import/first */
import React from "react"
import styled from "@emotion/styled"

import Header from "../components/site/header"
// import BackHomeButton from "../components/backhomebutton"
import TitleHeader from "../components/site/titleheader"
import Layout from "../components/site/layout"
import SEO from "../components/site/seo"

// Logos
import YouTubeLogo from "../images/social/yt-logo.png"
import ClarityCallLogo from "../images/services/clarity-call.png"
import IdeaConsultLogo from "../images/services/idea-consult.png"
import WebsiteLogo from "../images/services/website.png"
import WebstoreLogo from "../images/services/webstore.png"
import VanLifeLogo from "../images/services/van-life.png"

// Data list for our services
var ourServices = [
  // YouTube Bundle
  { id:1, name:'YouTube Bundle', img: YouTubeLogo, desc: 'Includes: A custom YouTube intro animation, a YouTube Banner graphic, and a pack of 5 YouTube Beats to use in your videos.', price: 'Buy Now - $149', category: 'Branding', },
  // 15 Minute Clarity Call
  { id:2, name:'15 Minute Clarity Call', img: ClarityCallLogo, desc: 'Need help but not sure where to start? Schedule a 15 minute clarity call with us to get clear on your next steps.', price: 'Schedule Now - FREE', category: 'Branding', },
  // Idea Consultation (30 mins)
  { id:3, name:'Idea Consultation', img: IdeaConsultLogo, desc:`Have an idea for an app, website or some other tech project. We'll show you how to get it done. Just schedule a 30 minute consultation and you'll be on the path to success.`, price: 'Schedule Now - $29', category: 'Branding', },
  // Website (Sqaurespace)
  { id:4, name:'Custom Website', img: WebsiteLogo, desc: `A successful brand needs a strong online presence. We'll create a custom website for your that will deepen your audiences' relationship with your brand and your story.`, price: 'Buy Now - $199', category: 'Branding', },
  // Webstore (Sqaurespace/Shopify)
  { id:5, name:'Custom Webstore', img: WebstoreLogo, desc: `Selling products or services? We'll create a custom webstore for you that will attract customers and provide them with a seamless shopping experience.`, price: 'Buy Now - $349', category: 'Branding', },
  // Van Life Consultation (1 hour)
  { id:6, name:'Van Life Consultation', img: VanLifeLogo, desc: `Thinking about transitioning to van life and want some help from people who are actually doing it? We'll answer your burning questions and provide you with crucial advice to make your journey smoother.`, price: 'Schedule Now - $59', category: 'Branding', },
];


const Services = () => {

  // Build the services List
  var ourServicesList = ourServices.map(svc => {

    if (svc.id % 2 !== 0) {
      return (
        <ServiceListItemInverted>
          {/* DESCRIPTION */}
          <ServiceListItemInvertedDescription style={{}}>
            <ServiceListItemHeader>{svc.name}</ServiceListItemHeader>
            <h4>{svc.desc}</h4>
            <PriceContainer>
              <ServiceListItemPrice>{svc.price}</ServiceListItemPrice>
            </PriceContainer>
          </ServiceListItemInvertedDescription>
          {/* IMAGE */}
          <ServiceListItemInvertedImage style={{}}>
            <div style={{height:`100%`, display: 'flex', justifyContent: 'center',}}>
              <img style={{padding: 0, marginTop: 'auto', marginBottom: 'auto', height:`100px`}} src={svc.img} alt="" />
            </div>
          </ServiceListItemInvertedImage>
        </ServiceListItemInverted>
      )
    } else {
      return (
        <ServiceListItem>
          {/* IMAGE */}
          <div style={{}}>
            <div style={{height:`100%`, display: 'flex', justifyContent: 'center',}}>
              <img style={{padding: 0, marginTop: 'auto', marginBottom: 'auto', height:`100px`}} src={svc.img} alt="" />
            </div>
          </div>
          {/* DESCRIPTION */}
          <ServiceListItemDescription style={{}}>
            <ServiceListItemHeader>{svc.name}</ServiceListItemHeader>
            <h4>{svc.desc}</h4>
            <PriceContainer>
              <ServiceListItemPrice>{svc.price}</ServiceListItemPrice>
            </PriceContainer>
          </ServiceListItemDescription>
        </ServiceListItem>
      )
    }
  })

  return (
    <>
      <Header />
      <Layout>
        <SEO title="Services" />
        <div style={{color:'white', marginTop: 40,}}>
          <TitleHeader title="Services" />
          <div style={{textAlign: 'center'}}>
            <h3>Let us help you take your life & business to the next level.</h3>
            <h3>Check out our services below.</h3>
          </div>
          {/* SERVICE TAB LIST */}
          <>
            <ServiceListContainer>
              {ourServicesList}
            </ServiceListContainer>
          </>
        </div>
        {/* Go Home Button */}
        {/* <BackHomeButton/> */}
      </Layout>
    </>
  )
}

const ServiceListContainer = styled.div`
  display: grid;
  padding: 5%;
  grid-template-columns: 1fr;
  // grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(auto);
  // grid-column-gap: 20px;
  // grid-row-gap: 20px;

  @media screen and (max-width: 768px) and (min-width: 500px) {
    grid-template-columns: 1fr;
    // grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    // grid-template-columns: repeat(1, 1fr);
  }
`

const ServiceListItem = styled.div`
  // background-color: gold;
  text-align: center;
  width: 100%;
  height: auto;
  margin-bottom: 5vh;
  padding: 1%;

  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  grid-column-gap: 2.5%;

  @media screen and (max-width: 768px) and (min-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const ServiceListItemDescription = styled.div`
  @media screen and (max-width: 768px) and (min-width: 500px) {
    margin-top: 5%;
  }

  @media screen and (max-width: 500px) {
    margin-top: 5%;
  }
`

const ServiceListItemInverted = styled.div`
  // background-color: gold;
  text-align: center;
  width: 100%;
  height: auto;
  margin-bottom: 5vh;
  padding: 1%;

  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  grid-column-gap: 2.5%;

  @media screen and (max-width: 768px) and (min-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const ServiceListItemInvertedDescription = styled.div`
  @media screen and (max-width: 768px) and (min-width: 500px) {
    margin-top: 5%;
    order: 2;
  }

  @media screen and (max-width: 500px) {
    margin-top: 5%;
    order: 2;
  }
`
const ServiceListItemInvertedImage = styled.div`
  @media screen and (max-width: 768px) and (min-width: 500px) {
    order: 1;
  }

  @media screen and (max-width: 500px) {
    order: 1;
  }
`

const ServiceListItemHeader = styled.h1`
  margin-bottom: 0.22rem;
  color: #FEC502;
`

const PriceContainer = styled.div`
  // width: min-content;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  background-color: #FEC502;
  padding: 2.5%;
`

const ServiceListItemPrice = styled.h4`
  color: black;
  margin-bottom: 0;
`

export default Services
