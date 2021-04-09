import * as React from "react";
import { lighten } from "polished";
import styled, {css} from "styled-components";

// Custom components
import Social from "@components/social";
import Menu from "@components/menu";
import Layout from "@components/layout/layout";
import SEO from "@components/seo";

import { textFont, fontFamily, colors, mediaQuery } from "@styles/styles";

const Title = styled.h1`
  ${textFont(fontFamily.poppins, "4.8rem", 700, colors.lightGray)}
`;

const Subtitle = styled.p`
  ${textFont(fontFamily.poppins, "2.4rem", 200, lighten(.9,colors.lightGray))}

  margin-top: 12px;
  margin-bottom: 56px;
  & .span {
    border-bottom: 2px solid ${lighten(.2,colors.primary)};
  }
  ${mediaQuery("sm", css`
    line-height: 2;
  `)}
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
