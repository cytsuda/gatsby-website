import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { rgba, darken } from "polished";

import { RiZoomInLine } from "@react-icons/all-files/ri/RiZoomInLine";
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill";
import { RiLinksFill } from "@react-icons/all-files/ri/RiLinksFill";
import { RiArrowDropRightLine } from "@react-icons/all-files/ri/RiArrowDropRightLine";
import { RiArrowDropLeftLine } from "@react-icons/all-files/ri/RiArrowDropLeftLine";

// Custom Component
import SEO from "@components/seo";
import Layout from "@components/layout/layout";
import ModalPortifolio from "@components/modal/ModalPortfolio";

// style var
import { colors, mediaQuery } from "@styles/styles";

const TagWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Wrapper = styled.ul`
  display: flex;
  grid-gap: 8px;
  margin: 0 auto;
  list-style: none;
  ${mediaQuery(
    "xs",
    `
      flex-wrap: nowrap;
      overflow: hidden;
      width: 100%;
      position: relative;
      align-items: center;
      transition: all .2s ease-in-out;
    `
  )}
`;

const Item = styled.li`
  font-weight: 700;

  padding: 8px 20px 6px;
  background: ${colors.darkGray};
  color: ${colors.white};
  border-radius: 2px;
  cursor: pointer;
  ${(props) => props.active && `background: ${colors.primary};`}
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: 32px;
  ${mediaQuery(
    "lg",
    css`
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;
    `
  )}
  ${mediaQuery(
    "md",
    css`
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;
    `
  )}
  ${mediaQuery(
    "sm",
    css`
      grid-template-columns: 1fr;
      grid-gap: 16px;
    `
  )}
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
  grid-gap: 8px;
  width: 100%;
  height: 100%;
  background: ${rgba(darken(0.2, colors.darkGray), 0.98)};
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

const TagContainer = styled.div`
  text-transform: uppercase;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 8px;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 4px;
  & span {
    padding: 0 8px;
    border: 1px solid ${darken(0.5, colors.white)};
    color: ${darken(0.5, colors.white)};
    border-radius: 25px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  grid-gap: 9px;
  margin: 0 auto;
`;

const NiceLink = styled.a`
  text-decoration: none;
  line-height: 0;
  outline: none;
`;

const WrapIcon = (props) => {
  const {
    className,
    Icon,
    url,
    blank = false,
    id,
    direction,
    onClick,
    hidden = false,
  } = props;
  if (url || id) {
    return (
      <NiceLink href={id ? `#${id}` : url} target={blank ? "_blank" : "_self"}>
        <Icon className={className} />
      </NiceLink>
    );
  } else {
    return (
      <Icon
        className={className}
        direction={direction}
        onClick={onClick}
        hidden={hidden}
      />
    );
  }
};
const DirectionIcon = styled(WrapIcon)`
  position: absolute;
  height: 100%;
  color: ${colors.white};
  font-size: 4.2rem;
  cursor: pointer;
  z-index: 100;
  display: none;
  top: 0;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  background: linear-gradient(
    to ${(props) => props.direction && props.direction},
    ${rgba(colors.black, 0)} 0%,
    ${rgba(colors.black, 0.75)} 25%,
    ${rgba(colors.black, 1)}
  );
  ${(props) => props.direction && props.direction + ": 0;"}
  &:hover {
    color: ${colors.primary};
  }
  ${(props) =>
    props.hidden &&
    mediaQuery(
      "xs",
      `
      display: inline;
      opacity: 1;
      visibility: visible;
    `
    )}
`;

const IconItem = styled(WrapIcon)`
  color: ${colors.white};
  font-size: 4.2rem;
  padding: 8px;
  cursor: pointer;
  background-color: ${rgba(colors.white, 0)};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${colors.primary};
    background-color: ${rgba(colors.white, 0.1)};
  }
`;

const ImageWrapper = ({ data, id }) => {
  const { title, live, github, category, featuredImage } = data;
  const image = getImage(featuredImage.childrenImageSharp[0]);
  return (
    <ImageContainer>
      <ImageHover>
        <h4>{title}</h4>
        <TagContainer>
          {category.map((cat, index) => (
            <span key={index}>{cat}</span>
          ))}
        </TagContainer>
        <IconContainer>
          <IconItem Icon={RiZoomInLine} id={id} />
          <IconItem Icon={RiGithubFill} blank url={github} />
          <IconItem Icon={RiLinksFill} blank url={live} />
        </IconContainer>
      </ImageHover>
      <GatsbyImage image={image} alt={title} />
    </ImageContainer>
  );
};

// const opts = ["All", "Python", "React", "Gatsby", "HTML/CSS"];
const Portfolio = ({ data }) => {
  const menuEl = useRef(null);
  const [select, setSelect] = useState("all");
  const [showed, setShowed] = useState([]);
  const [options, setOptions] = useState([]);
  const [directions, setDirections] = useState([false, true]);
  const portifolio = data.allMdx.nodes;
  const tags = new Set();

  const handleFilterCategory = (array) => {
    const filter = array.filter((item) => {
      if (select.toLowerCase() === "all") {
        return true;
      } else {
        return item.frontmatter.category.findIndex(
          (category) => category.toLowerCase() === select.toLowerCase()
        ) === -1
          ? false
          : true;
      }
    });
    return filter;
  };

  tags.add("ALL");
  useEffect(() => {
    portifolio.map((element) => {
      element.frontmatter.category.map((i) => {
        tags.add(i);
      });
    });
    setShowed(portifolio);
    setOptions(Array.from(tags));
  }, []);

  useEffect(() => {
    setShowed(handleFilterCategory(portifolio));
  }, [select]);

  const handleScroll = (direction) => {
    const ref = menuEl.current ? menuEl.current : null;
    const effectArea = ref.clientWidth - 84;
    if (direction === "right") {
      const compRight = ref.scrollLeftMax - ref.scrollLeft - effectArea >= 0;
      setDirections([true, compRight ? true : false]);

      if (compRight) {
        for (let i = 0; i < 12; i ++) {
          setTimeout(() => {
            menuEl.current.scrollLeft += effectArea / 12;
          }, i*16);
        }
      } else {
        for (let i = 0; i < (ref.scrollLeftMax - ref.scrollLeft)/(effectArea/12); i++) {
          setTimeout(() => {
            if (menuEl.current.scrollLeft + effectArea / 12 < menuEl.current.scrollLeftMax) {
              menuEl.current.scrollLeft += effectArea / 12;
            } else {
              menuEl.current.scrollLeft = menuEl.current.scrollLeftMax;
            }
          }, i*16);
        }
      }
    } else {
      const compLeft = ref.scrollLeft - effectArea >= 0;
      setDirections([compLeft ? true : false, true]);
      
      if (compLeft) {
        for (let i = 0; i < 12; i ++) {
          setTimeout(() => {
            menuEl.current.scrollLeft -= effectArea / 12;
          }, i*16);
        }
      } else {
        for (let i = 0; i < (ref.scrollLeft / (effectArea / 12)); i++){
          setTimeout(() => {
            if (menuEl.current.scrollLeft - effectArea / 12 > 0) {
              menuEl.current.scrollLeft -= effectArea / 12;
            } else {
              menuEl.current.scrollLeft = 0;
            }
          }, i * 16);
        }
      }
    }
  };

  return (
    <Layout type="portifolio" title="Portifólio" text="Portfólio">
      <SEO title="Portfólio" />
      <TagWrapper>
        <DirectionIcon
          Icon={RiArrowDropLeftLine}
          direction={"left"}
          onClick={() => handleScroll("left")}
          hidden={directions[0]}
        />
        <Wrapper ref={menuEl}>
          {options.map((item, index) => (
            <Item
              key={index}
              onClick={() => setSelect(item.toLowerCase())}
              active={select === item.toLowerCase()}
            >
              {item}
            </Item>
          ))}
        </Wrapper>
        <DirectionIcon
          Icon={RiArrowDropRightLine}
          direction={"right"}
          onClick={() => handleScroll("right")}
          hidden={directions[1]}
        />
      </TagWrapper>
      <Main>
        {showed.map((item, index) => (
          <ImageWrapper key={item.id} id={item.id} data={item.frontmatter} />
        ))}
      </Main>
      {portifolio.map((item, index) => (
        <ModalPortifolio key={item.id} id={item.id} data={item.frontmatter} />
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          photos {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
            id
          }
          category
          date
          description
          featuredImage {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          live
          github
          title
          subtitle
        }
        id
      }
    }
  }
`;

export default Portfolio;
/*
scrollIntoView({
  behavior: "smooth",
})

*/
