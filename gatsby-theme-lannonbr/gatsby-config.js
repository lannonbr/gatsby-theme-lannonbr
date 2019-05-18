module.exports = {
  plugins: [
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Oswald', 'Lato'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/layout.js'),
      },
    },
  ],
}
