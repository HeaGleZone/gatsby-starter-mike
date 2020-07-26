import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  description?: string;
  title?: string;
  image?: string;
  keywords?: string;
  lang?: string;
  meta?: [];
  googleSiteVerification?: string;
}

const SEO: React.FC<Props> = ({
  description,
  lang = 'en',
  meta = [],
  title,
  keywords,
  image,
  googleSiteVerification,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            sitename
            siteurl
          }
        }
      }
    `
  );

  const metaDescription: string = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={
        title
          ? title.charAt(0).toUpperCase() + title.substring(1)
          : site.siteMetadata.title
      }
      meta={[
        // ! SEO
        {
          name: 'google-site-verification',
          content: googleSiteVerification,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1.0, maximum-scale=5.0`,
        },
        {
          name: `keywords`,
          content: keywords || '',
        },
        {
          name: `description`,
          content: metaDescription,
        },
        // ! SOCIALS
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'og:image',
          content: image
            ? image
            : site.siteMetadata.siteurl + '/default-social-image.png',
        },
        {
          property: 'og:site_name',
          content: site.siteMetadata.sitename,
        },
        // ! TWITTER
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: image,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
