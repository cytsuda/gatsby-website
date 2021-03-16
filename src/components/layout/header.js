import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

// Custom component
import Menu from "../menu";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 24px;
  background-color: rgba(14, 17, 22, 0.9);
  border-bottom: 1px solid rgba(27, 179, 133, 0.5);
  box-shadow: 0 0 5px rgba(27, 179, 133, 0.5);
  z-index: 100000000;
  @media (max-width: 1400px) {
    left: 8px;
    width: calc(100% - 8px);
  }
`;

const Nav = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1400px) {
    padding: 0 60px;
  }
`;

const Title = styled.h1`
  margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const styles = { color: "white", textDecoration: "none" };

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
