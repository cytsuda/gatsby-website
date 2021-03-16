import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

// Custom Component
import SEO from "../components/seo";
import Layout from "../components/layout/layout";

const Portfolio = () => (
  <Layout type="contact" title="Contatos" text="Contate me mdf">
    <SEO title="Contatos" />
    <p>testing</p>
  </Layout>
);

export default Portfolio;
