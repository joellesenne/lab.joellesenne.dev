module.exports = {
  siteMetadata: {
    title: 'Joël Lesenne',
    description: 'Various coding experiments and demos',
    author: 'Joël Lesenne',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Lab | Joël Lesenne',
        short_name: 'Various coding experiments and demos',
        start_url: '/',
        background_color: '#0000FF',
        theme_color: '#FFFFFF',
        display: 'fullscreen',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
