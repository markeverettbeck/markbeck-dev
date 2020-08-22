module.exports = {
  siteName: 'Mark Beck\'s Resume',
  siteDescription: 'Mark Beck\'s Resume as a static serverless site.',
  siteUrl: 'https://markbeck.dev',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-168680602-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}