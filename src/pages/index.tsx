import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../containers/';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <h2>This is a h2!</h2>
    <h3>This is a h3!</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
