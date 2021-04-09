import React, { useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import styled, { css } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { rgba, darken, lighten } from "polished";

// Custom Component
import SEO from "@components/seo";
import SectionTitle from "@components/SectionTitle";
import Layout from "@components/layout/layout";

// Icons
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaPython } from "@react-icons/all-files/fa/FaPython";
import { IoLogoJavascript } from "@react-icons/all-files/io/IoLogoJavascript";
import { DiMongodb } from "@react-icons/all-files/di/DiMongodb";
import { SiMaterialUi } from "@react-icons/all-files/si/SiMaterialUi";
import { GiAtom } from "@react-icons/all-files/gi/GiAtom";
import { AiOutlineGlobal } from "@react-icons/all-files/ai/AiOutlineGlobal";
import { BiGame } from "@react-icons/all-files/bi/BiGame";
import { MdLocalMovies } from "@react-icons/all-files/md/MdLocalMovies";
import { FaPaintBrush } from "@react-icons/all-files/fa/FaPaintBrush";
import { AiFillCode } from "@react-icons/all-files/ai/AiFillCode";
import { BsLayoutWtf } from "@react-icons/all-files/bs/BsLayoutWtf";
import { GiCakeSlice } from "@react-icons/all-files/gi/GiCakeSlice";
import { FaDAndD } from "@react-icons/all-files/fa/FaDAndD";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";

// Style var
import { colors, mediaQuery, fontFamily, textFont } from "@styles/styles";

// Image

const WrapImage = ({ className }) => {
  return (
    <StaticImage
      className={className}
      src="https://picsum.photos/300/400?grayscale"
      alt="Main image"
      placeholder="blurred"
    />
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: ${(props) => props.rowGap ? props.rowGap : props.gridGap ? props.gridGap : 0}px;
  column-gap: ${(props) => props.columnGap ? props.columnGap : props.gridGap ? props.gridGap : 0}px;

  ${(props) => props.margin ? `margin: ${props.margin}px;` : `margin: 16px 0;`}
  ${(props) => props.marginY && `margin-top: ${props.marginY}px; margin-bottom: ${props.marginY}px;`}
  ${(props) => props.marginX && `margin-right: ${props.marginX}px; margin-left: ${props.marginX}px;`}
  ${(props) => props.marginTop && `margin-top: ${props.marginTop}px;`}
  ${(props) => props.marginBottom && `margin-bottom:  ${props.marginBottom}px;`}
  ${(props) => props.marginRight && `margin-right:   ${props.marginRight}px;`}
  ${(props) => props.marginLeft && `margin-left:    ${props.marginLeft}px;`}
  ${(props) => props.hidden && `display: none; opacity: 0;`}
  
  ${mediaQuery(
    "lg",
    css`
      flex-wrap: wrap;
    `
  )}
  ${mediaQuery(
    "xs",
    css`
      grid-template-columns: 1fr;
    `
  )}
`;

const InfoImage = styled(WrapImage)`
  grid-column: 1 / span 5;

  ${mediaQuery(
    "lg",
    css`
      grid-column: 1 / -1;
    `
  )}
  ${mediaQuery(
    "xs",
    css`
      width: 100%;
    `
  )}
`;

const InfoText = styled.div`
  grid-column: 6 / -1;

  ${mediaQuery(
    "lg",
    css`
      grid-column: 1 / -1;
    `
  )}
`;

const SubTitle = styled.h2`
  ${textFont(fontFamily.raleway, "2.8rem", 200, lighten(0.2, colors.primary))};
  
  margin-bottom: 8px;
  letter-spacing: 1px;
`;

const Phrase = styled.p`
  margin-bottom: 16px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  margin-bottom: 16px;
  grid-gap: 12px;
  ${mediaQuery(
    "sm",
    css`
      grid-template-columns: 1fr;
    `
  )}
`;

const ListItemStyle = styled.li`
  display: flex;
  grid-gap: 4px;
  align-items: center;
  & span {
    font-weight: 700;
    margin-right: 4px;
  }
`;

const ListItem = (props) => {
  return (
    <ListItemStyle>
      <RiArrowRightSLine style={{ color: `${lighten(0.2, colors.primary)}` }} />
      {props.children}
    </ListItemStyle>
  );
};

const SkillContainer = styled.div`
  display: flex;
  align-items: center;

  border: 2px solid ${(props) => props.type === "int" ? "transparent" : rgba(lighten(.2, colors.primary), .2)};
  border-bottom: 2px solid ${(props) =>props.type === "int" ? "transparent" : rgba(lighten(.2, colors.primary), .5)};
  border-right: 2px solid ${(props) => props.type === "int" ? "transparent" : rgba(lighten(.2, colors.primary), .5)};
  border-radius: 3px;
  ${(props) =>
    props.type === "int"
      ? `
          background: ${lighten(0.1, colors.black)};
        `
      : `
          background: linear-gradient(
            135deg,
            ${rgba(darken(.1,colors.black), 0)} 0%,
            ${rgba(darken(.1,colors.black), 0.25)} 25%,
            ${rgba(darken(.1,colors.black), 0.5)} 50%,
            ${rgba(darken(.1,colors.black), 0.25)} 75%,
            ${rgba(darken(.1,colors.black), 0)} 100%
          );
        `}
  background-size: 300%;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: ${(props) => (props.direction ? "16px 32px" : "24px 0")};
  grid-column: ${(props) => (props.span ? `span ${props.span};` : `span 3`)};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  grid-gap: ${(props) => (props.direction ? 10 : 0)}px;
  font-size: ${(props) => (props.direction ? 2.4 : 3.6)}rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-position: 100%;
  }
  & span {
    ${(props) => props.type === "int" && "font-weight: 700;"}
    font-size: 1.6rem;
    color: ${colors.white};
  }
  ${mediaQuery(
    "lg",
    css`
      ${(props) => props.spanLg && `grid-column: span ${props.spanLg}`}
    `
  )}
  ${mediaQuery(
    "md",
    `
      ${(props) => props.spanMd && `grid-column: span ${props.spanMd}`};
      padding: ${(props) => (props.direction ? "16px 24px" : "24px 0")};
    `
  )}
  ${mediaQuery(
    "sm",
    css`
      ${(props) => props.spanSm && `grid-column: span ${props.spanSm}`}
    `
  )}
`;

const WrapLink = ({ className, children, to }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

const Button = styled(WrapLink)`
  cursor: pointer;
  color: ${(props) => (props.primary ? colors.primary : colors.white)};
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none; 
  padding: 12px 16px 10px;
  transition: background 0.2s ease-in-out;
  background-color: ${(props) => props.primary ? "transparent" : `${rgba(lighten(0.2, colors.darkGray), 0.4)}`};
  border-radius: 2px;
  border: 1px solid ${(props) => (props.primary ? colors.primary : colors.darkGray)};
  &:hover {
    background-color: ${(props) => props.primary ? `${rgba(lighten(0.2, colors.primary), 0.05)}` : `${rgba(lighten(0.2, colors.darkGray), 0.8)}`};
  }
  ${mediaQuery(
    "xxs",
    css`
      text-align: center;
    `
  )}
`;

const QuoteContainer = styled.div`
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  padding: 48px 128px 16px;
  width: 80%;
  border-radius: 3px;
  background-color: ${rgba(colors.black, 0.95)};
  cursor: pointer;
  & span {
    margin-top: 4px;
    text-align: right;
    color: ${darken(0.8, colors.white)};
    &:before {
      content: "- ";
    }
  }
  ${mediaQuery(
    "xl",
    css`
      width: 90%;
      padding: 32px 128px 16px;
    `
  )}
  ${mediaQuery(
    "lg",
    css`
      width: 100%;
      padding: 40px 64px 24px;
    `
  )}
  ${mediaQuery(
    "md",
    css`
      padding: 40px 32px 24px;
      & span {
        margin-top: 8px;
      }
    `
  )}
  ${mediaQuery(
    "sm",
    css`
      margin: 0 auto 32px;
      padding: 32px 32px 16px;
    `
  )}

  ${mediaQuery(
    "xxs",
    css`
      padding: 24px 16px 12px;
    `
  )}
`;

const QuotePhrase = styled.div`
  min-height: 70px;
  overflow: hidden;

  ${mediaQuery(
    "md",
    css`
      min-height: 70px;
    `
  )}
  ${mediaQuery(
    "sm",
    css`
      min-height: 116px;
    `
  )}
`;

const Quote = ({ text, translate, autor }) => {
  const [traducao, setTraducao] = useState(false);
  return (
    <QuoteContainer onClick={()=>setTraducao(prev=>!prev)}>
      <QuotePhrase>
        <ReactTextTransition 
          text={traducao ? translate : text}
          springConfig={presets.gentle}
        />
      </QuotePhrase>
      <span>{autor}</span>
    </QuoteContainer>
  );
};

const IndexPage = () => (
  <Layout type="about" title="Sobre" text="Saiba um pouco mais sobre mim">
    <SEO title="Sobre" />
    <Container gridGap={16}>
      <InfoImage />
      <InfoText>
        <SubTitle>Desenvolvedor Javascript</SubTitle>
        <Phrase>
          Eu sou um desenvolvedor Javascript e aficionado por UI/UX e design em
          geral. Utilizo Node.js server-side e React como controlador de
          interface.
        </Phrase>
        <List>
          <ListItem>
            <span>Site:</span> tsuda.space
          </ListItem>
          <ListItem>
            <span>Cidade:</span> 17 323133837
          </ListItem>
          <ListItem>
            <span>Cidade:</span> São José do Rio Preto, SP
          </ListItem>
          <ListItem>
            <span>Dribbble:</span> tsuda.space
          </ListItem>
          <ListItem>
            <span>Behance:</span> tsuda.space
          </ListItem>
          <ListItem>
            <span>Linkedin:</span> tsuda.space
          </ListItem>
        </List>
        <Phrase>
          Identificar, pesquisar, resolver e implementar são o conjunto de
          habilidades que um desenvolvedor possue. A linguagem que ele utiliza é
          apenas uma ferramenta e, como todas ferramentas, ela possui aplicações
          especificas. Node.js permite utilizar Javascript para qualquer tipo de
          aplicação computacional.
        </Phrase>
      </InfoText>
    </Container>
    <Quote
      autor="Andrew Hunt"
      text='"In some ways, programming is like painting. You start with a blank canvas
      and certain basic raw materials. You use a combination of science, art,
      and craft to determine what to do with them."'
      translate='"De certa forma, programar é como pintar. Você começa com uma tela em branco e com certos materiais brutos.
      Você utiliza uma combinação de ciência, arte e talento para determinar o que fazer com eles."'
    />
    <SectionTitle title="Habilidades" />
    <Container gridGap={16} marginBottom={64}>
      <SkillContainer spanSm={6}>
        <FaHtml5 />
        <span>HTML5</span>
      </SkillContainer>
      <SkillContainer spanSm={6}>
        <FaCss3 />
        <span>CSS3</span>
      </SkillContainer>
      <SkillContainer spanSm={6}>
        <IoLogoJavascript />
        <span>Javascript</span>
      </SkillContainer>
      <SkillContainer spanSm={6}>
        <SiMaterialUi />
        <span>Material-Ui</span>
      </SkillContainer>
      <SkillContainer spanSm={6}>
        <FaReact />
        <span>React</span>
      </SkillContainer>
      <SkillContainer spanSm={6}>
        <FaNodeJs />
        <span>Node.js</span>
      </SkillContainer>
      <SkillContainer spanSm={6}>
        <DiMongodb />
        <span>MongoDB</span>
      </SkillContainer>
      <SkillContainer spanSm={6}>
        <FaPython />
        <span>Python</span>
      </SkillContainer>
    </Container>
    <SectionTitle title="Interesse" />
    <Container gridGap={16} marginBottom={32}>
      <SkillContainer
        type="int"
        span={4}
        spanLg={6}
        color="#fff7d6"
        direction="row"
      >
        <GiAtom />
        <span>Ciência & Tecnologia</span>
      </SkillContainer>
      <SkillContainer
        type="int"
        span={4}
        spanLg={6}
        color="#0097fa"
        direction="row"
      >
        <AiOutlineGlobal />
        <span>Relações Internacionais</span>
      </SkillContainer>
      <SkillContainer
        type="int"
        span={4}
        spanLg={6}
        color="#e056fd"
        direction="row"
      >
        <BsLayoutWtf />
        <span>UI/UX Design</span>
      </SkillContainer>
      <SkillContainer
        type="int"
        span={4}
        spanLg={6}
        color="#f9ca24"
        direction="row"
      >
        <BiGame />
        <span>Jogos</span>
      </SkillContainer>
      <SkillContainer
        type="int"
        span={4}
        spanLg={6}
        color="#00c6b8"
        direction="row"
      >
        <MdLocalMovies />
        <span>Filmes & Series</span>
      </SkillContainer>
      <SkillContainer
        type="int"
        span={4}
        spanLg={6}
        color="#686de0"
        direction="row"
      >
        <AiFillCode />
        <span>Código</span>
      </SkillContainer>
      <SkillContainer
        type="int"
        span={4}
        spanLg={6}
        color="#ce9eac"
        direction="row"
      >
        <FaPaintBrush />
        <span>Illustrações</span>
      </SkillContainer>
      <SkillContainer
        type="int"
        span={4}
        spanLg={6}
        color="#585a7b"
        direction="row"
      >
        <GiCakeSlice />
        <span>The cake is a lie?</span>
      </SkillContainer>
      <SkillContainer
        type="int"
        span={4}
        spanLg={6}
        color="#eb4d4b"
        direction="row"
      >
        <FaDAndD />
        <span>RPG</span>
      </SkillContainer>
    </Container>
    <Container gridGap={16} marginBottom={16}>
      <Button to="/portifolio/">Portfólio</Button>
      <Button primary to="/contact/">
        Contato
      </Button>
    </Container>
  </Layout>
);

export default IndexPage;
