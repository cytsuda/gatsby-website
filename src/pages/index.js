import * as React from "react";
import styled from "styled-components";

// Custom components
import Social from "../components/social";
import Menu from "../components/menu";
import Layout from "../components/layout/layout";

import SEO from "../components/seo";

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #ddd;
  @media (max-width: 576px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-top: 8px;
  margin-bottom: 32px;
  color: #ddd;
  & .span {
    border-bottom: 2px solid #1bb385;
  }
  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 2;
  }
`;

const IndexPage = () => {
  return (
    <Layout type="home">
      <SEO title="Home" />
      <Title>Carlos Yoshio Tsuda</Title>
      <Subtitle>
        Desenvolvedor <span className="span">Fullstack Javascript</span> other
        busy word
      </Subtitle>
      <Menu type="home" />
      <Social />
    </Layout>
  );
};

export default IndexPage;
