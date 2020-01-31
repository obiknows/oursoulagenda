import React from "react"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, withPrefix } from "gatsby"

import Header from "../components/site/header"
// import BackHomeButton from "../components/backhomebutton"
import TitleHeader from "../components/site/titleheader"
import Layout from "../components/site/layout"
import SEO from "../components/site/seo"

const Videos = () => {

  const data = useStaticQuery(graphql`
    query GetMostRecentYoutubeVideos {
      allYoutubeVideo(limit: 4) {
        edges {
          node {
            id
            title
            description
            videoId
            publishedAt
            privacyStatus
            channelTitle
          }
        }
      }
    }
  `)

  // Format the Data so the Videos are viewable
  var videos = [];
  data.allYoutubeVideo.edges.forEach(data => {
    /*
      data.node is in form:
      { id: '<string>', title: '<string>', description: '<string>', videoId: '<string>', publishedAt: '<string DateTime obj>', }
    */
    videos.push(data.node)
  });

  // Build the videos list
  var videosList = videos.map(video => {
    return (
      <div>
        <VideoContainer>
          {/* VIDEO EMBED */}
          <iframe title={video.id} width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${video.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoContainer>
      </div>
    );
  })

  return (
    <>
      <Header />
      <Layout>
        <SEO title="Videos" />
        <Helmet>
          <script src={withPrefix("yt-platform.js")} />
        </Helmet>
        <div style={{ color: "white", marginTop: 40, textAlign: 'center' }}>
          <TitleHeader title="Videos" />
          <h3>Check out some of our most recent flicks.</h3>
          <h3>Oh yeah and don't forget to <span style={{color:'#FEC502'}}>subscribe below</span>.</h3>
          <h3>Thanks SOUL Sqaud</h3>

          {/* List of 5 most recent videos */}
          <div>{videosList}</div>

          {/* Embedded Youtube Subscribe Button */}
          <div style={{ padding: `10px`, marginLeft: `auto`, marginRight: `auto`, backgroundColor: "#FEC502", maxWidth: `25vw`, minWidth: `300px`, textAlign: "center", }}>
            <h4 style={{color: 'black'}}>DONT FORGET TO SUBSCRIBE</h4>
            <div className="g-ytsubscribe" data-channelid="UC14DDaQZouxfsTxHhXxF0sg" data-layout="full" data-count="default"></div>
          </div>

          {/* Go Home Button */}
          {/* <BackHomeButton/> */}
        </div>
      </Layout>
    </>
  )
}

const VideoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vw;
  padding-bottom: 46.25%;
  overflow: hidden;
  position: relative;
  text-align: center;
  height: 0;

  @media screen and (min-width: 768px) {
    max-width: 40vw;
  }

  iframe {
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }
`


export default Videos
