import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"


import Header from "../components/site/header"
// import BackHomeButton from "../components/backhomebutton"
import TitleHeader from "../components/site/titleheader"
import Layout from "../components/site/layout"
import SEO from "../components/site/seo"

const SupportUs = () => (
  <>
    <Header />
    <Layout>
      <SEO title="Support Us" />
      <Helmet>
        <script src={withPrefix("yt-platform.js")} />
      </Helmet>
      <div style={{color:'white', lineHeight: `1.44rem`, marginTop: 40,}}>
        {/* TITLE */}
        <TitleHeader title="Support Us" />
        {/* INTRO */}
        <div style={{textAlign: 'center'}}>
          <h3>Love watching our journey?</h3>
          <h3>Learned anything new from our videos?</h3>
          <h3>Got a lil’ extra on your tax returns and feelin' generous?</h3>
          <h3>We appreciate your support! Help us stay on the road and free up more time to create meaningful content to share with you in one of the ways below:</h3>
        </div>
        {/* DIVIDER */}
        <hr style={{backgroundColor:'#FEC502', marginLeft: `auto`, marginRight: `auto`, width: `60%`}}/>
        {/* WAYS TO DONATE */}
        <div style={{marginLeft: 'auto', marginRight: 'auto', width:`80%`}}>
          {/* 1. Patreon */}
          <div style={{marginBottom:40, textAlign: 'center'}}>
            <h2>Patreon</h2>
            <h4>Donate $5 or more to us every month and you’ll be rewarded with exclusive perks including monthly live video chats, private Facebook group, recipes, Patreon-only merch and more!</h4>
            {/* Patreon Button */}
            <div style={{marginTop: 50, textAlign:'center'}}>
              <a href="https://www.patreon.com/oursoulagenda" style={{color: 'white', backgroundColor: '#E4705F', padding: 10, fontFamily: 'Lalezar', letterSpacing: 1, textTransform: `uppercase`, textDecoration: 'none'}}>
                Donate with Patreon
              </a>
            </div>

          </div>
          {/* 2. Paypal */}
          <div style={{marginBottom: 40, textAlign: 'center'}}>
            <h2>PayPal</h2>
            <h4>
              The fastest way to show us some love with your wallet. Any and all donations appreciated. P.S. $50 buys us one tank of gas ;)
            </h4>
            {/* PayPal Button */}
            <div style={{marginTop: 50, textAlign:'center'}}>
              <a href="https://www.paypal.com/donate/?token=NADfNkLjUTbRzBy2ipEtqgwAT623koJhuZYw4eYoT3M1r3jf6pXG7MX7y_xm7yKeyB1Tc0&country.x=US&locale.x=" style={{color: 'white', backgroundColor: '#3b7bbf', padding: 10, fontFamily: 'Lalezar', letterSpacing: 1, textTransform: `uppercase`, textDecoration: 'none'}}>
                Donate with PayPal
              </a>
            </div>
          </div>
          {/* Airbnb */}
          <div style={{marginBottom: 40, textAlign: 'center'}}>
            <h2>Airbnb</h2>
            <h4>Free money for the both of us! Use the link below to get $55 off of your first stay and we’ll receive $30 in Airbnb credit.</h4>
            {/* Airbnb Buttons */}
            <div style={{marginTop: 50, textAlign:'center'}}>
              <a href="https://www.airbnb.com/c/aissatoub9?currency=USD" style={{color: 'white', backgroundColor: '#E36868', padding: 10, fontFamily: 'Lalezar', letterSpacing: 1, textTransform: `uppercase`, textDecoration: 'none'}}>
                Book your first Airbnb stay
              </a>
            </div>
            <div style={{marginTop: 30, textAlign:'center'}}>
              <a href="www.airbnb.com/r/aissatoub9" style={{color: 'white', backgroundColor: '#E36868', padding: 10, fontFamily: 'Lalezar', letterSpacing: 1, textTransform: `uppercase`, textDecoration: 'none'}}>
                List your space on Airbnb
              </a>
            </div>
          </div>
          {/* Amazon */}
          <div style={{marginBottom: 40, textAlign: 'center'}}>
            <h2>Amazon</h2>
            <h4>Buying something off of Amazon soon? <br /> If you click the link below, we’ll automatically receive a percentage of whatever you purchase within the next 24 hours—at no extra cost to you! <br /><br />Feel free to bookmark the link and use it anytime you order from Amazon :)</h4>
            {/* Airbnb Buttons */}
            <div style={{marginTop: 50, textAlign:'center'}}>
              <a href="https://www.amazon.com/ref=as_li_ss_tl?ie=UTF8&linkCode=sl2&tag=oursoulagen0c-20&linkId=57be3aeef7a41212ef03d75849346b38" style={{color: 'white', backgroundColor: '#EC954A', padding: 10, fontFamily: 'Lalezar', letterSpacing: 1, textTransform: `uppercase`, textDecoration: 'none'}}>
                Shop Amazon Now
              </a>
            </div>
          </div>
          {/* Cash App */}
          <div style={{marginBottom: 40, textAlign: 'center'}}>
            <h2>Cash App</h2>
            <h4>Got a Cash App, We got that too!</h4>
            {/* CashApp Button */}
            <div style={{marginTop: 50, textAlign:'center'}}>
              <div style={{marginLeft:'auto', marginRight:'auto', color: 'white', backgroundColor: '#74BC6F', padding: 10, fontFamily: 'Lalezar', letterSpacing: 1, textTransform: `uppercase`, textDecoration: 'none', width: `min-content`}}>
                $payobinna
              </div>
            </div>
          </div>
          {/* YouTube */}
          <div style={{marginBottom: 40, textAlign: 'center'}}>
            <h2>YouTube</h2>
            <h4>Support us by subscribing to our channel and watching our videos!</h4>
            {/* YouTube Button */}
            <div style={{ marginTop:50, textAlign: 'center', padding: `10px`, marginLeft: `auto`, marginRight: `auto`, backgroundColor: "#FEC502", width:'min-content' }}>
              <div className="g-ytsubscribe" data-channelid="UC14DDaQZouxfsTxHhXxF0sg" data-layout="full" data-count="default"></div>
            </div>
          </div>
        </div>

        {/* Go Home Button */}
        {/* <BackHomeButton/> */}
      </div>
    </Layout>
  </>
)

export default SupportUs
