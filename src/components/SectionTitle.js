import React from "react";
import styled, {css} from "styled-components";
import {rgba} from "polished";

// Style Var
import { colors, mediaQuery } from "@styles/styles";

const TextWrapper = styled.div`
  max-width: 25%;
  color: ${rgba(colors.darkGray,.75)};
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  & h2 {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 3px;
  }
  & span {
    height: 1px;
    background-color: ${colors.primary};
    margin-left: 8px;
    flex: 1;
  }
  ${mediaQuery("lg", css`
    max-width: 30%;
  `)}
  ${mediaQuery("md", css`
    max-width: 50%;
  `)}
  ${mediaQuery("sm", css`
    max-width: 70%;
  `)}
`;

const SectionTitle = (props) => {
  const { title } = props;
  return (
    <TextWrapper>
      <h2>{title}</h2>
      <span />
    </TextWrapper>
  );
};

export default SectionTitle;
