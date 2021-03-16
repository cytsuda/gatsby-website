import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { rgba } from "polished";

import { RiZoomInLine } from "@react-icons/all-files/ri/RiZoomInLine";
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill";
import { RiLinksFill } from "@react-icons/all-files/ri/RiLinksFill";

// RiFileSearchLine - detail
// RiGithubFill - github
// RiLinkM - live link

// Custom Component
import SEO from "../components/seo";
import Layout from "../components/layout/layout";

const TagWrapper = styled.ul`
  display: flex;
  grid-gap: 8px;
  margin: 0 auto;
  list-style: none;
`;

const Item = styled.li`
  font-weight: 700;
  padding: 8px 20px 6px;
  background: #3a4455;
  color: #e7eefb;
  border-radius: 2px;
  cursor: pointer;
  ${props => props.active && "background: #1BB385;"}
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: 32px;
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  position: relative;
  & img {
    width: 100%;
  }
`;

const ImageHover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  text-align: center;
  grid-gap: 16px;
  width: 100%;
  height: 100%;
  background: ${rgba("#040506", 0.98)};
  position: absolute;
  transition: all 0.4s ease-in-out;
  transform: scale(0.9);
  z-index: 2;
  opacity: 0;
  line-height: 2;
  &:after {
    content: "";
    width: 50px;
    height: 50px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    position: absolute;
    top: 16px;
    left: 16px;
  }
  &:before {
    content: "";
    width: 50px;
    height: 50px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
  & h4 {
    font-weight: 700;
  }
  ${ImageContainer}:hover & {
    opacity: 1;
    transform: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  grid-gap: 16px;
  margin: 0 auto;
`;
const WrapIcon = ({ className, Icon, url }) => <Icon className={className} />;

const IconLink = styled(WrapIcon)`
  color: #fff;
  font-size: 42px;
  padding: 8px;
  cursor: pointer;
  background-color: ${rgba("#fff", 0)};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #1bb385;
    background-color: ${rgba("#fff", 0.1)};
  }
`;

const ImageWrapper = ({ src, alt, title, tag }) => {
  return (
    <ImageContainer>
      <ImageHover>
        <h4>{title}</h4>
        <span>{tag}</span>
        <IconContainer>
          <IconLink Icon={RiZoomInLine} />
          <IconLink Icon={RiGithubFill} />
          <IconLink Icon={RiLinksFill} />
        </IconContainer>
      </ImageHover>
      <img src={src} alt={alt} />
    </ImageContainer>
  );
};

const opt = ["All", "Python", "React", "Gatsby", "HTML/CSS"];
const Portfolio = () => {
  const [select, setSelect] = useState("all");

  return (
    <Layout type="portifolio" title="Portifólio" text="Portfólio">
      <SEO title="Portfólio" />
      <TagWrapper>
        {opt.map((item, index) => (
          <Item
            key={index}
            onClick={() => setSelect(item.toLowerCase())}
            active={select === item.toLowerCase()}
          >
            {item}
          </Item>
        ))}
      </TagWrapper>
      <Main>
        <ImageWrapper
          src="https://picsum.photos/400/300?random=1"
          alt="testing"
          title="Something 1"
          tag="Python"
        />
        <ImageWrapper
          src="https://picsum.photos/400/300?random=2"
          alt="testing"
          title="Something  2"
          tag="React"
        />
        <ImageWrapper
          src="https://picsum.photos/400/300?random=3"
          alt="testing"
          title="Something 3"
          tag="Gatsby"
        />
        <ImageWrapper
          src="https://picsum.photos/400/300?random=4"
          alt="testing"
          title="Something 4"
          tag="HTML/CSS"
        />
        <ImageWrapper
          src="https://picsum.photos/400/300?random=5"
          alt="testing"
          title="Something 5"
          tag="Python"
        />
        <ImageWrapper
          src="https://picsum.photos/400/300?random=6"
          alt="testing"
          title="Something 6"
          tag="React"
        />
        <ImageWrapper
          src="https://picsum.photos/400/300?random=7"
          alt="testing"
          title="Something 7"
          tag="React"
        />
        <ImageWrapper
          src="https://picsum.photos/400/300?random=8"
          alt="testing"
          title="Something 68"
          tag="HTML/CSS"
        />
        <ImageWrapper
          src="https://picsum.photos/400/300?random=9"
          alt="testing"
          title="Something 9"
          tag="Gatsby"
        />
      </Main>
    </Layout>
  );
};

export default Portfolio;
