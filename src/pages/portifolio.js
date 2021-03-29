import React, { useState } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { rgba } from "polished";

import { RiZoomInLine } from "@react-icons/all-files/ri/RiZoomInLine";
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill";
import { RiLinksFill } from "@react-icons/all-files/ri/RiLinksFill";

// Custom Component
import SEO from "@components/seo";
import Layout from "@components/layout/layout";

const TagWrapper = styled.ul`
  display: flex;
  grid-gap: 8px;
  margin: 0 auto;
  list-style: none;
  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;

const Item = styled.li`
  font-weight: 700;
  padding: 8px 20px 6px;
  background: #3a4455;
  color: #e7eefb;
  border-radius: 2px;
  cursor: pointer;
  ${(props) => props.active && "background: #1BB385;"}
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: 32px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
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
  & span {
    text-transform: uppercase;
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

const NiceLink = styled.a`
  text-decoration: none;
  line-height: 0;
  outline: none;
`;

const WrapIcon = ({ className, Icon, url = "", blank = false, link = false }) =>
  link ? (
    <NiceLink href={url} target={blank ? "_blank" : "_self"}>
      <Icon className={className} />
    </NiceLink>
  ) : (
    <Icon className={className} />
  );

const IconItem = styled(WrapIcon)`
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

const ImageWrapper = ({ data }) => {
  const { title, live, github, category, featuredImage } = data;
  const image = getImage(featuredImage);
  return (
    <ImageContainer>
      <ImageHover>
        <h4>{title}</h4>
        <span>{category}</span>
        <IconContainer>
          <IconItem Icon={RiZoomInLine} />
          <IconItem Icon={RiGithubFill} link blank url={github} />
          <IconItem Icon={RiLinksFill} link blank url={live} />
        </IconContainer>
      </ImageHover>
      <GatsbyImage image={image} alt={title} />
    </ImageContainer>
  );
};

const opt = ["All", "Python", "React", "Gatsby", "HTML/CSS"];
const Portfolio = ({ data }) => {
  const [select, setSelect] = useState("all");
  const portfolio = data.allMdx.edges;

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
        {portfolio.map((item) => (
          <ImageWrapper key={item.node.id} data={item.node.frontmatter} />
        ))}
      </Main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            live
            github
            date
            category
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
export default Portfolio;

/*

separar "IMAGEWRAPPER" do portfolio e utilizar slug pra configuraçoes basicas

*/
