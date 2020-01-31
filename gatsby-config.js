const path = require('path');
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'Our Soul Agenda',
    description: `Sharing life lessons to help you step into your power.`,
    description: 'The professional publishing platform',
    siteUrl: 'https://oursoulagenda.com', // full path to blog - no ending slash
    author: `@itsobinna`,
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-156587076-1',
        // Puts tracking script in the head instead of the body
        head: true,
        // IP anonymization for GDPR compliance
        anonymize: true,
        // Disable analytics for users with `Do Not Track` enabled
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
        // Specifies what percentage of users should be tracked
        sampleRate: 100,
        // Determines how often site speed tracking beacons will be sent
        siteSpeedSampleRate: 10,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'src', 'content'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'images'),
        // path: `${__dirname}/src/images`,
        // path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1170,
              quality: 90,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://outsoucom',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    // Youtube Gatsby Plugin
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ["UC14DDaQZouxfsTxHhXxF0sg"], // https://www.youtube.com/channel/UC14DDaQZouxfsTxHhXxF0sg
        apiKey: process.env.YOUTUBE_API_KEY, // HIDE this
        maxVideos: 10, // Defaults to 50
      },
    },
    // WEB FONT LOADER
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lalezar']
        }
      }
    },
    // TAWK TO
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "5e24ba228e78b86ed8aa11f4",
        // get this from the tawk script widget
      },
    },
  ],
};
