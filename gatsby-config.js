module.exports = {
  siteMetadata: {
    title: 'Justus Tumacder',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/util/typography',
      }
    }
  ]
}
