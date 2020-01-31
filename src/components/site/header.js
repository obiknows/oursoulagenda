/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types"
import { Link } from "gatsby"
// import "./Header.css";
import { CSSTransition } from "react-transition-group";

import menuIcon from '../../images/menu.png'
import soulglobe from '../../images/our-soul-agenda-logotype.png'
// import { OutboundLink } from 'gatsby-plugin-google-analytics'


export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <Link to="/" id="brand" style={{marginTop: `auto`, marginBottom:`auto`, paddingTop: 5, width:`30vw` }}>
        <img src={soulglobe} className="Logo" alt="" style={{marginTop:`auto`, marginBottom:`auto`, width: `100%`, height: `auto`, }} />
      </Link>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link to="/services">Services</Link>
          <Link to="/support-us">Support Us</Link>
          <Link to="/our-faves">Our Gear</Link>
          <OutboundLink href="https://oursoulagenda.bigcartel.com">Shop</OutboundLink>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <img style={{height:40, marginTop:`auto`, marginBottom:`auto`}}src={menuIcon} alt="" />
        {/* 🍔 */}
      </button>
    </header>
  );
}

// const Header = ({ siteTitle }) => (

//   // <header
//   //   style={{
//   //     background: `rebeccapurple`,
//   //     // marginBottom: `1.45rem`,
//   //   }}
//   // >
//   //   <div
//   //     style={{
//   //       margin: `0 auto`,
//   //       // maxWidth: 960,
//   //       padding: `0.1rem 0.05rem`,
//   //     }}
//   //   >
//   //     <div style={{margin: `0 auto`, textAlign: 'center'}}>
//   //       <img style={{marginBottom: 0}} src={soulglobe} height="17px" alt="Logo" />
//   //     </div>
//   //     <h4 className="signist" style={{ margin: 0, textAlign: 'center', /*lineHeight: `inherit`,*/ lineHeight: `13px`}}>
//   //       <Link
//   //         to="/"
//   //         style={{
//   //           color: `white`,
//   //           textDecoration: `none`,
//   //         }}
//   //       >
//   //         {siteTitle}
//   //       </Link>
//   //     </h4>
//   //   </div>
//   // </header>
// )


// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
