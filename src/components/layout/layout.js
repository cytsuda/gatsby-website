import * as React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { rgba } from "polished";

// Arquivos externos
import Wave from "@images/wave.svg";
import Illustration from "@images/illustration.svg";
import "@styles/layout.css";

// Components
import Header from "@components/layout/header";
import SectionTitle from "@components/SectionTitle";

// Style
import { colors, mediaQuery, textFont, fontFamily } from "@styles/styles";

const Footer = styled.footer`
  margin-top: auto;
  width: 100%;
`;

const FooterPharagraphy = styled.p`
  padding: 1.5rem 0 0;
  text-align: right;
  font-size: 0.9rem;
  color: ${rgba(colors.lightGray, 0.2)};
`;

const Layout = styled.div`
  background-color: ${colors.darkGray};
  background-attachment: fixed;
  background-image: url(${Illustration}),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23374352' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    url(${Wave});
  background-repeat: no-repeat, repeat, no-repeat;
  background-size: 30%, auto, contain;
  background-position: 95% 90%, bottom, bottom;

  ${mediaQuery(
    "md",
    css`
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23374352' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
        url(${Wave});
      background-repeat: repeat, no-repeat;
      background-size: auto, contain;
      background-position: bottom, bottom;
    `
  )}
`;

// Padding 90px 100px 0 - sem reduçao do centro
const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  border-left: 4px solid ${colors.primary};
  justify-content: center;
  padding-top: 90px;
  padding-bottom: 0;
  ${(props) =>
    props.type === "home" ? "padding: 100px" : "padding: 68px 68px 34px;"};

  ${mediaQuery(
    "xxl",
    `
      padding-right: 60px;
      padding-left: 60px;
      border-left: 4px solid ${colors.primary};
    `
  )}
  ${mediaQuery(
    "lg",
    `
      padding-right: 32px;
      padding-left: 32px;
    `
  )}
  ${mediaQuery(
    "md",
    css`
      padding: 16px 40px 16px 32px;
      align-items: center;
    `
  )}
  ${mediaQuery(
    "sm",
    `
      padding: 0 24px;
      align-items: start;
      border-left: 4px solid ${colors.primary};
    `
  )}
  ${mediaQuery(
    "xs",
    css`
      padding: 0 12px;
    `
  )}
  ${mediaQuery(
    "xxs",
    css`
      padding: 0 8px;
    `
  )}
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  ${(props) => props.type === "home" && "margin: auto 0;"}
  &.default {
    background-color: ${rgba(colors.black, 0.95)};
    color: ${colors.lightGray};
    padding: 32px;
    border-radius: 2px;
    width: 100%;

    ${mediaQuery(
      "xs",
      css`
        padding: 24px;
      `
    )}
    ${mediaQuery(
      "xxs",
      css`
        padding: 12px;
      `
    )}
  }
`;

const Title = styled.h1`
  ${textFont(fontFamily.poppins, "3.2rem", 700, colors.lightGray)}
  text-transform: uppercase;
  margin-bottom: 24px;
  ${mediaQuery("md", css`
    font-size: 2.4rem;
  `)}
  ${mediaQuery("xs", css`
    font-size: 1.8rem;
  `)}
`;

const LayoutComponent = ({ children, type, title, text }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <Container type={type}>
        {type !== "home" && (<Header siteTitle={data.site.siteMetadata?.title || `Title`} />)}
        <Main className={type !== "home" && "default"} type={type}>
          {type !== "home" && (
            <>
              <SectionTitle title={title} />
              <Title>{text}</Title>
            </>
          )}
          {children}
        </Main>
        <Footer>
          <FooterPharagraphy>
            © {new Date().getFullYear()}, All rights reserved for me :)
          </FooterPharagraphy>
        </Footer>
      </Container>
    </Layout>
  );
};
LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
