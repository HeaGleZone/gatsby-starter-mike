module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Mike',
    sitename: 'Gatsby Starter Mike',
    siteUrl: 'localhost:8000',
    description:
      'Gatsby Starter with TypeScript support, js styling with styled-components and MDX posts',
    author: '',
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
        name: 'gatsby-starter-mike',
        short_name: 'mike-starter',
        start_url: '/',
        background_color: '#232946',
        theme_color: '#232946',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/configs`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: false,
      },
    },
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        createLinkInHead: true,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
        `,
        serialize: ({ site, allSitePage }) => {
          const setPreferences = pathLink => {
            const configs = {
              '/': {
                priority: 1,
                changefreq: 'yearly',
              },
              '/blog/': {
                priority: 1,
                changefreq: 'weekly',
              },
            };

            const isBlogPost = /^\/blog\/./.test(pathLink);
            if (!configs[pathLink]) {
              if (isBlogPost) {
                return {
                  priority: 0.7,
                  changefreq: 'monthly',
                };
              } else {
                return {
                  priority: 0.7,
                  changefreq: 'yearly',
                };
              }
            }

            return configs[pathLink];
          };

          return allSitePage.edges.map(({ node: { path } }) => {
            return {
              url: site.siteMetadata.siteUrl + path,
              changefreq: setPreferences(path).changefreq,
              priority: setPreferences(path).priority,
            };
          });
        },
      },
    },
  ],
};
