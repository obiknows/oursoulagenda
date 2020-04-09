import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/site/layout"
import SoulGlobeImg from "../components/site/soulglobeimg"
import SoulGlobeText from "../components/site/soulglobetext"
import SEO from "../components/site/seo"

import FacebookLogo from "../images/social/fb-logo.png"
import InstagramLogo from "../images/social/ig-logo.png"
import YouTubeLogo from "../images/social/yt-logo.png"


import { OutboundLink } from 'gatsby-plugin-google-analytics'

const IndexPage = () => (
  <Layout style={{marginTop: `2.22rem`}}>
    <SEO title="Home" description="" />
    {/* SOUL GLOBE */}
    <SoulGlobe>
      <SoulGlobeImg style={{textAlign: 'center'}} />
    </SoulGlobe>
    {/* OUR SOUL AGENDA HEADER */}
    <SoulAgendaHeader>
      <SoulGlobeText style={{textAlign: 'center'}} />
    </SoulAgendaHeader>
    {/* CONTENT */}
    <SoulAgendaHomeContent>
      {/* ABOUT US/ PURPOSE INTRO */}
      <div style={{marginTop: 40, marginBottom: 20,}}>
        <SoulHeaderText>
          What's good Soul Squad, we're Aïssatou and Obinna!<br/>
          Here to help you share your soul’s purpose with the world.
        </SoulHeaderText>
        <SoulHeaderText>
          We use our skillset in design, technology, health and more to help you connect with your audience and build your unique brand.
        </SoulHeaderText>
      </div>

      {/* LINKS */}
      <SoulLinkSet>
        <Link to="/about" style={LinkStyle}>
          <SoulLinkText>About</SoulLinkText>
        </Link>
        <Link to="/support-us" style={LinkStyle}>
          <SoulLinkText>Support Us</SoulLinkText>
        </Link>
        <Link to="/videos" style={LinkStyle}>
          <SoulLinkText>Videos</SoulLinkText>
        </Link>
        <OutboundLink href="https://oursoulagenda.bigcartel.com" style={LinkStyle}>
          <SoulLinkText>Store</SoulLinkText>
        </OutboundLink>
        <Link to="/our-faves" style={LinkStyle}>
          <SoulLinkText>Our Faves</SoulLinkText>
        </Link>
        {/* <Link to="/services" style={LinkStyle}>
          <SoulLinkText>Services</SoulLinkText>
        </Link> */}
        <Link to="/blog" style={LinkStyle}>
          <SoulLinkText>Blog</SoulLinkText>
        </Link>
      </SoulLinkSet>
      {/* SOCIAL ICONS */}
      <SoulcialMediaIconsContainer>
        <OutboundLink href="">
          <img src={FacebookLogo} width="25px" alt=" "/>
        </OutboundLink>
        <OutboundLink href="https://www.youtube.com/channel/UC14DDaQZouxfsTxHhXxF0sg">
          <img src={YouTubeLogo} width="25px" alt=" "/>
        </OutboundLink>
        <OutboundLink href="https://instagram.com/oursoulagenda">
          <img src={InstagramLogo} width="25px" alt=" "/>
        </OutboundLink>
      </SoulcialMediaIconsContainer>
    </SoulAgendaHomeContent>

    {/* SOULCIAL MEDIA ICONSSET */}

  </Layout>
)

const LinkStyle = {
  textDecoration: 'none',
  textTransform: 'uppercase'
}

// STYLED COMPONENTS
const SoulAgendaHomeContent = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
`

const SoulGlobe = styled.div`
  max-width: 122px;
  text-align: 'center';
  margin-bottom: 0.22rem;
  margin: 0 auto;
`

const SoulAgendaHeader = styled.div`
  max-width: 80vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: auto;
  margin-right: auto;
  color: 'white';
  letter-spacing: 2.2;
  word-spacing: 0rem;
`

const SoulHeaderText = styled.h3`
  color: white;
  text-align: center;
`

const SoulLinkSet = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  display: grid;
  justify-content: space-around;
  grid-template-columns: auto auto auto auto auto auto auto;

  // for medium sized screens break to vertical
  @media screen and (max-width: 768px) {
    text-align: center;
    grid-template-columns: auto;
  }
`

const SoulLinkText = styled.h5`
`

const SoulcialMediaIconsContainer = styled.div`
  // text-align: center;
  margin-top: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 12.5vw;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1000px) {
    width: 15vw;
  }
  @media screen and (max-width: 768px) {
    width: 22.5vw;
  }
`

// const SoulcialMediaIcon = styled.a``


export default IndexPage
