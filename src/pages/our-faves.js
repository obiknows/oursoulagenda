import React from "react"
import styled from "styled-components"

import Header from "../components/header"
// import BackHomeButton from "../components/backhomebutton"
import TitleHeader from "../components/titleheader"
import Layout from "../components/layout"
import SEO from "../components/seo"

// FAV IMG IMPORTS
import DJICameraPhoto from '../images/our-faves/dji-camera.jpg'
import GoPro3WayPhoto from '../images/our-faves/gopro3way.jpg'
import AdobeSuitePhoto from '../images/our-faves/adobe-logo.jpg'
import AudioTechnicaPhoto from '../images/our-faves/audio-technica.jpg'
import GoalZeroPhoto from '../images/our-faves/goal-zero-yeti.jpg'
import SolarPanelPhoto from '../images/our-faves/solar-panels.jpg'
import HarmanKardonPhoto from '../images/our-faves/harman-kardon.jpg'
import PioneerDJPhoto from '../images/our-faves/pioneer-dj.jpg'
import CamperStovePhoto from '../images/our-faves/camper-stove.jpg'
import ToothbrushPhoto from '../images/our-faves/toothbrush.jpg'
import ToothpastePhoto from '../images/our-faves/toothpaste.jpg'
import TongueScraperPhoto from '../images/our-faves/tongue-scraper.jpg'
import BlackSoapPhoto from '../images/our-faves/black-soap.jpg'
import SheaButterPhoto from '../images/our-faves/shea-butter.jpg'
import AlmondOilPhoto from '../images/our-faves/almond-oil.jpg'
import CashAppPhoto from '../images/our-faves/cash-app.png'
import NikonCameraPhoto from '../images/our-faves/nikon-d3500.png'

// Data list for our favorite items
var favItems = [
  // DJI OSMO Pocket
  {imgSrc: DJICameraPhoto, link:"https://amzn.to/36gMe29", title: 'DJI OSMO Pocket', subtitle: `Our main video camera. Shoots 4K and fits in your pocket.`},
  // GoPro 3-Way Grip
  {imgSrc: GoPro3WayPhoto, link: "https://amzn.to/2GaCAU3", title: 'GoPro 3-Way Grip', subtitle: `What we use to stabilize our camera for that lit lit footage.`},
  // Adobe Suite
  {imgSrc: AdobeSuitePhoto, link: "#", title: 'Adobe Suite', subtitle: `Software we use for video editing, photo editing, and graphic designs.`},
  // Audio-Technica ATH-M50x
  {imgSrc: AudioTechnicaPhoto, link: "https://amzn.to/3ay5yLK", title: 'Audio-Technica ATH-M50x', subtitle: `Our favorite headphones, our current pair has lasted 4+ years.`},
  // Goal Zero Yeti 1000
  {imgSrc: GoalZeroPhoto, link: "https://amzn.to/38wkIPR", title: 'Goal Zero Yeti 1000', subtitle: `How we power our electronics off grid and the easiest way to install solar in your van.`},
  // Renogy 100W Solar Panel
  {imgSrc: SolarPanelPhoto, link: "https://amzn.to/2Rfywsg", title: 'Renogy 100W Solar Panel', subtitle: `We’ve got two of these strapped to our roof, so we can really off-grid.`},
  // Harman Kardon Bluetooth Speaker
  {imgSrc: HarmanKardonPhoto, link: "https://amzn.to/37jwyfK", title: 'Harman Kardon Bluetooth Speaker', subtitle: `How we jam out in the van. Gotta have that boomin' soundsystem.`},
  // Pioneer DDJ-SB3
  {imgSrc: PioneerDJPhoto, link: "https://amzn.to/2TL4SfO", title: 'Pioneer DDJ-SB3', subtitle: `Aïssatou’s trusted DJ controller. For the ill mixes.`},
  // Coleman Camper Stove
  {imgSrc: CamperStovePhoto, link: "https://amzn.to/3aquMvv", title: 'Coleman Camper Stove', subtitle: `How we cook all of our delicious & flame meals.`},
  // Bamboo Toothbrushes
  {imgSrc: ToothbrushPhoto, link: "https://amzn.to/2G9ZcUC", title: 'Bamboo Toothbrushes', subtitle: `Our favorite eco-friendly toothbrushes. Gotta keep the grill shinin'.`},
  // Organic Toothpaste Powder
  {imgSrc: ToothpastePhoto, link: "https://amzn.to/2Rh0P9m", title: 'Organic Toothpaste Powder', subtitle: `All natural, fluoride-free toothpaste. Healthy toothpaste alternative.`},
  // Copper Tongue Scraper
  {imgSrc: TongueScraperPhoto, link: "https://amzn.to/37fD9Il", title: 'Copper Tongue Scraper', subtitle: `Our favorite tongue-scraper. Necessary for early morning breath.`},
  // African Black Soap
  {imgSrc: BlackSoapPhoto, link: "https://amzn.to/2TKMPX7", title: 'African Black Soap', subtitle: `Our clear skin secret straight from our ancestors. We use it as a face and body wash.`},
  // Organic Shea Butter
  {imgSrc: SheaButterPhoto, link: "https://amzn.to/2sMwztR", title: 'Organic Shea Butter', subtitle: `We use this to moisturize our skin and hair. For that gold glow, you know.`},
  // Organic Almond Oil
  {imgSrc: AlmondOilPhoto, link: "https://amzn.to/36bIsHf", title: 'Organic Almond Oil', subtitle: `What we use to keep our hair soft, shiny and luscious.`},
  // Cash App
  {imgSrc: CashAppPhoto, link: "https://cash.app/app/RBGQDBW", title: 'Cash App', subtitle: `How we recieve donations, and invest in Bitcoin and stocks on the road. Plus you get a free custom debit card.`},
  // Nikon D3500
  {imgSrc: NikonCameraPhoto, link: "https://amzn.to/38x2Ap4", title: 'Nikon D3500', subtitle: `How we take hi-res photos and shoot photoshoots for ourselves and our clients.`},
];



const OurFaves = () => {
  
  // Build the fav Items list
  var favItemsList = favItems.map(item => {
    return (
      <FavListItem>
        <a href={item.link}>
          <FavListItemImg src={item.imgSrc} />
        </a>
        <FavListItemHeader>{item.title}</FavListItemHeader>
        <FavListItemSubtitle>{item.subtitle}</FavListItemSubtitle>
      </FavListItem>
    );
  })

  return (
    <>
      <Header />
      <Layout>
        <SEO title="Our Faves" />
        <div style={{color:'white', marginTop: 40,}}>
          <TitleHeader title="Our Faves" />
          <h3>Here's a few of our favorite things that we use in van life and in real life.</h3>

          {/* SERVICE TAB LIST */}
          <>
            <FavListContainer>
              {favItemsList} 
            </FavListContainer>
          </>
          {/* SERVICE TAB LIST  -- END*/}

          {/* Go Home Button */}
          {/* <BackHomeButton/> */}
        </div>
      </Layout>
    </>
  )
}

const FavListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media screen and (max-width: 768px) and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const FavListItem = styled.div`
  // background-color: gold;
  width: 100%;
  height: 350px;
  text-align: center;
`

const FavListItemImg = styled.img`
  height: 75%;
  margin-bottom: 0.5rem;
`
const FavListItemHeader = styled.h3`
  margin-bottom: 0.25rem;
`
const FavListItemSubtitle = styled.h6`
  margin-bottom: 0.5rem;
`

export default OurFaves
