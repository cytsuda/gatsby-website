import * as React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { Link } from "gatsby";

// Custom component
import Menu from "@components/menu";

import { colors, mediaQuery } from "@styles/styles";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 24px;
  background-color: ${rgba(colors.black, 0.9)};
  border-bottom: 1px solid ${rgba(colors.primary, 0.2)};
  box-shadow: 0 0 5px ${rgba(colors.primary, 0.2)};
  z-index: 999;

  ${mediaQuery(
    "xxl",
    css`
      left: 4px;
      width: calc(100% - 4px);
    `
  )}

`;

const Nav = styled.div`
  max-width: 1600px;
  padding: 0 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  ${mediaQuery(
    "xxl",
    css`
      max-width: 1400px;
      padding: 0 92px;
    `
  )}
  ${mediaQuery(
    "lg",
    css`
      padding: 0 64px;
    `
  )}
`;

const Title = styled.h1`
  margin: 0;

  ${mediaQuery(
    "md",
    css`
      display: none;
    `
  )}
`;

const styles = { color: colors.white, textDecoration: "none" };

const HeaderLayout = ({ siteTitle }) => (
  <Header>
    <Nav>
      <Title>
        <Link style={styles} to="/">
          {siteTitle}
        </Link>
      </Title>
      <Menu />
    </Nav>
  </Header>
);

HeaderLayout.propTypes = {
  siteTitle: PropTypes.string,
};

HeaderLayout.defaultProps = {
  siteTitle: ``,
};

export default HeaderLayout;
