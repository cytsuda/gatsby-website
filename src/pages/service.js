import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import { FiDribbble } from "@react-icons/all-files/fi/FiDribbble";
import { AiOutlineFileSearch } from "@react-icons/all-files/ai/AiOutlineFileSearch";

// Custom Component
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;

const Box = styled.div`
  background: linear-gradient(
    45deg,
    #007d53 0%,
    #1bb385 33%,
    #3a4455 66%,
    #3a4455 100%
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
  background-size: 400%;
  background-position: right;
  &:hover {
    transform: translate(8px, -8px);
    box-shadow: -8px 8px 0px ${rgba("#3a4455", 1)};
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
  box-shadow: -8px -8px #4f5c73;
  transition: all 0.3s ease-in-out 0.05s;
  background: linear-gradient(
    225deg,
    #3a4455 0%,
    #3a4455 50%,
    #1bb385 50%,
    #1bb385 100%
  );
  background-size: 300%;
  background-position: bottom left;

  ${Box}:hover & {
    color: #1bb385;
    background-position: top right;
    box-shadow: 0px 0px #4f5c73;
  }
`;

const BoxTitle = styled.h4`
  transition: all 0.3s ease-in-out 0.05s;
  ${Box}:hover & {
    color: #3a4455;
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
