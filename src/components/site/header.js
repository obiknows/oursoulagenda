/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import { CSSTransition } from "react-transition-group";

import menuIcon from '../../images/menu.png'
import soulglobe from '../../images/our-soul-agenda-logotype.png'
import { OutboundLink } from 'gatsby-plugin-google-analytics'


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
      <Link to="/" id="brand" style={{marginTop: `auto`, marginBottom:`auto`, paddingTop: 5, width:`20vw` }}>
        <img src={soulglobe} className="Logo" alt="" style={{marginTop:`auto`, marginBottom:`auto`, width: `100%`, height: `auto`, }} />
      </Link>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link to="/about">About Us</Link>
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
