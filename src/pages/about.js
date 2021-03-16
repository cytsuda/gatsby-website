import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { rgba } from "polished";

// Custom Component
import SEO from "../components/seo";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/layout/layout";

// Icons
import { FaRegSmileBeam } from "@react-icons/all-files/fa/FaRegSmileBeam";
import { FaProjectDiagram } from "@react-icons/all-files/fa/FaProjectDiagram";
import { FaAward } from "@react-icons/all-files/fa/FaAward";
import { FaHeadset } from "@react-icons/all-files/fa/FaHeadset";

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

// Image
// import RightArContainer from "../assets/right-outlined_color.svg";

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
  row-gap: ${props =>
    props.rowGap ? props.rowGap : props.gridGap ? props.gridGap : 0}px;
  column-gap: ${props =>
    props.columnGap ? props.columnGap : props.gridGap ? props.gridGap : 0}px;

  ${props => (props.margin ? `margin: ${props.margin}px;` : `margin: 16px 0;`)}
  ${props =>
    props.marginY &&
    `margin-top: ${props.marginY}px; margin-bottom: ${props.marginY}px;`}
  ${props =>
    props.marginX &&
    `margin-right: ${props.marginX}px; margin-left: ${props.marginX}px;`}
  ${props => props.marginTop && `margin-top: ${props.marginTop}px;`}
  ${props => props.marginBottom && `margin-bottom:  ${props.marginBottom}px;`}
  ${props => props.marginRight && `margin-right:   ${props.marginRight}px;`}
  ${props => props.marginLeft && `margin-left:    ${props.marginLeft}px;`}

  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

const InfoImage = styled(WrapImage)`
  grid-column: 1 / span 4;
  @media (max-width: 992px) {
    grid-column: 1 / -1;
  }
`;
const InfoText = styled.div`
  grid-column: 5 / -1;
  @media (max-width: 992px) {
    grid-column: 1 / -1;
  }
`;

const SubTitle = styled.h2`
  color: #66ebba;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: 1px;
`;

const Phrase = styled.p`
  margin-bottom: 16px;
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 16px;
  grid-gap: 12px;
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
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

const ListItem = props => {
  return (
    <ListItemStyle>
      <RiArrowRightSLine style={{color: "#66ebba"}}/>
      {props.children}
    </ListItemStyle>
  );
};

const Square = styled.div`
  background-color: rgba(58, 68, 85, 0.8);
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 32px;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  grid-column: span 3;
  @media (max-width: 992px) {
    grid-column: span 6;
  }
  @media (max-width: 576px) {
    grid-column: span 12;
    margin-top: 24px;
  }
`;

const SquareNumber = styled.p`
  font-weight: 500;
  font-size: 48px;
  letter-spacing: 2px;
  position: relative;
`;

const SquareInfo = styled.span`
  font-weight: 200;
  font-size: 16px;
`;

const Circle = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1bb385;
  font-size: 28px;
  top: 0;
  left: 50%;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background-color: #262c36;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
`;

const SkillContainer = styled.div`
  display: flex;
  align-items: center;

  border: 2px solid
    ${props =>
      props.type === "int" ? "transparent" : "rgba(20, 179, 133, 0.1)"};
  border-bottom: 2px solid
    ${props =>
      props.type === "int" ? "transparent" : "rgba(20, 179, 133, 0.5)"};
  border-right: 2px solid
    ${props =>
      props.type === "int" ? "transparent" : "rgba(20, 179, 133, 0.5)"};
  border-radius: 3px;
  ${props =>
    props.type === "int"
      ? `
          background: #2c3644;
        `
      : `
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.25) 25%,
            rgba(0, 0, 0, 0.35) 50%,
            rgba(0, 0, 0, 0.25) 75%,
            rgba(0, 0, 0, 0) 100%
          );
        `}
  background-size: 300%;
  color: ${props => (props.color ? props.color : "#1bb385")};
  padding: ${props => (props.direction ? "16px 32px" : "24px 0")};
  grid-column: ${props => (props.span ? `span ${props.span};` : `span 3`)};
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  grid-gap: ${props => (props.direction ? 10 : 0)}px;
  font-size: ${props => (props.direction ? 24 : 36)}px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-position: 100%;
  }
  & span {
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    ${props => props.type === "int" && "font-weight: 700;"}
    color: white;
  }
  @media (max-width: 992px) {
    ${props => props.spanLg && `grid-column: span ${props.spanLg}`}
  }
  @media (max-width: 768px) {
    ${props => props.spanMd && `grid-column: span ${props.spanMd}`}
  }
  @media (max-width: 576px) {
    ${props => props.spanSm && `grid-column: span ${props.spanSm}`}
  }
`;

const WrapLink = ({ className, children, to }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

const Button = styled(WrapLink)`
  cursor: pointer;
  padding: 12px 16px 10px;
  border: 1px solid ${props => (props.primary ? "#2ecc71" : "#2c3644")};
  color: ${props => (props.primary ? "#2ecc71" : "#fff")};
  border-radius: 2px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  background-color: ${props =>
    props.primary ? "transparent" : `${rgba("#2c3644", 0.4)}`};
  text-decoration: none;
  transition: background 0.2s ease-in-out;
  &:hover {
    background-color: ${props =>
      props.primary ? `${rgba("#000", 0.1)}` : `${rgba("#2c3644", 0.8)}`};
  }
`;

const IndexPage = () => (
  <Layout type="about" title="Sobre" text="Saiba um pouco mais sobre mim">
    <SEO title="Sobre" />
    <Container gridGap={16}>
      <InfoImage />
      <InfoText>
        <SubTitle>Javascript Developer</SubTitle>
        <Phrase>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Phrase>
        <List>
          <ListItem>
            <span>Site:</span> tsuda.space
          </ListItem>
          <ListItem>
            <span>Telefone:</span> 17 323133837
          </ListItem>
          <ListItem>
            <span>Cidade:</span> São José do Rio Preto, SP
          </ListItem>
          <ListItem>
            <span>Nothing here:</span> tsuda.space
          </ListItem>
          <ListItem>
            <span>Website:</span> tsuda.space
          </ListItem>
          <ListItem>
            <span>Website:</span> tsuda.space
          </ListItem>
          <ListItem>
            <span>Website:</span> tsuda.space
          </ListItem>
          <ListItem>
            <span>Website:</span> tsuda.space
          </ListItem>
        </List>
        <Phrase>
          Sed ac nulla eleifend, dapibus neque sagittis, vehicula metus. Sed
          velit tellus, maximus et sollicitudin sit amet, varius sed nulla.
          Morbi lorem ipsum, pretium ut arcu nec, interdum sagittis odio.
          Aliquam ut pellentesque lacus. Cras sed pretium ex. Ut efficitur
          mauris vel aliquet egestas. Nunc molestie purus fermentum, pharetra
          felis id, sagittis mi.
        </Phrase>
      </InfoText>
    </Container>
    <Container marginY={64} gridGap={16}>
      <Square>
        <Circle>
          <FaRegSmileBeam />
        </Circle>
        <SquareNumber>31</SquareNumber>
        <SquareInfo>Easy Things</SquareInfo>
      </Square>
      <Square>
        <Circle>
          <FaProjectDiagram />
        </Circle>
        <SquareNumber>39</SquareNumber>
        <SquareInfo>For fun</SquareInfo>
      </Square>
      <Square>
        <Circle>
          <FaHeadset />
        </Circle>
        <SquareNumber>19</SquareNumber>
        <SquareInfo>Simple Text</SquareInfo>
      </Square>
      <Square>
        <Circle>
          <FaAward />
        </Circle>
        <SquareNumber>12</SquareNumber>
        <SquareInfo>Another two words</SquareInfo>
      </Square>
    </Container>
    <SectionTitle title="Habilidades" />
    <Container gridGap={8} marginBottom={64}>
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
        <span>Mentiras</span>
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
      <Button to="/portfolio">Portfólio</Button>
      <Button primary to="/contato">
        Contato
      </Button>
    </Container>
  </Layout>
);

export default IndexPage;
