import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import { FiDribbble } from "@react-icons/all-files/fi/FiDribbble";
import { AiOutlineFileSearch } from "@react-icons/all-files/ai/AiOutlineFileSearch";

// Custom Component
import Layout from "@components/layout/layout";
import SEO from "@components/seo";

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  ${mediaQuery("lg", css`
    grid-template-columns: repeat(2, 1fr);
  `)}
  ${mediaQuery("md", css`
    grid-template-columns: 1fr;
  `)}
`;

const Box = styled.div`
  background: linear-gradient(
    45deg,
    ${colors.darkPrimary} 0%,
    ${color.primary} 33%,
    ${colors.darkGray} 66%,
    ${colors.darkGray} 100%
  );
  padding: 64px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  background-size: 500%;
  background-position: right;
  &:hover {
    transform: translate(8px, -8px);
    box-shadow: -8px 8px 0px ${rgba(colors.darkGray, .6)};
    background-position: left;
  }
`;

const BoxIcon = styled.div`
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  border-radius: 5px;
  box-shadow: -8px -8px ${colors.darkGray};
  transition: all 0.3s ease-in-out 0.05s;
  background: linear-gradient(
    225deg,
    ${colors.darkGray} 0%,
    ${colors.darkGray} 50%,
    ${colors.primary} 50%,
    ${colors.primary} 100%
  );
  background-size: 300%;
  background-position: bottom left;

  ${Box}:hover & {
    color: ${color.primary};
    background-position: top right;
    box-shadow: 0px 0px ${colors.darkGray};
  }
`;

const BoxTitle = styled.h4`
  transition: all 0.3s ease-in-out 0.05s;
  ${Box}:hover & {
    color: ${colors.darkGray};
  }
`;

const BoxText = styled.p`
  text-align: center;
`;

const Curriculum = () => {
  return (
    <Layout title="Serviços" text="meus serviços">
      <SEO title="Serviços" />
      <Main>
        <Box>
          <BoxIcon>
            <FiDribbble />
          </BoxIcon>
          <BoxTitle>Cool Things Here</BoxTitle>
          <BoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BoxText>
        </Box>
        <Box>
          <BoxIcon>
            <AiOutlineFileSearch />
          </BoxIcon>
          <BoxTitle>Cool Things Here</BoxTitle>
          <BoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BoxText>
        </Box>
        <Box>
          <BoxIcon>
            <FiDribbble />
          </BoxIcon>
          <BoxTitle>Cool Things Here</BoxTitle>
          <BoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BoxText>
        </Box>
        <Box>
          <BoxIcon>
            <FiDribbble />
          </BoxIcon>
          <BoxTitle>Cool Things Here</BoxTitle>
          <BoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BoxText>
        </Box>
        <Box>
          <BoxIcon>
            <FiDribbble />
          </BoxIcon>
          <BoxTitle>Cool Things Here</BoxTitle>
          <BoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BoxText>
        </Box>
        <Box>
          <BoxIcon>
            <FiDribbble />
          </BoxIcon>
          <BoxTitle>Cool Things Here</BoxTitle>
          <BoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BoxText>
        </Box>
      </Main>
    </Layout>
  );
};

export default Curriculum;
