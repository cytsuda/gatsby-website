import * as React from "react";
import styled, { css } from "styled-components";
import { lighten, rgba } from "polished";

import { MdPlace } from "@react-icons/all-files/md/MdPlace";
import { MdMail } from "@react-icons/all-files/md/MdMail";
import { MdShare } from "@react-icons/all-files/md/MdShare";
import { MdPhoneInTalk } from "@react-icons/all-files/md/MdPhoneInTalk";

// Custom Component
import SEO from "@components/seo";
import Layout from "@components/layout/layout";
import Social from "@components/social";
import Form from "@components/form";

// styles var
import { colors, mediaQuery, textFont, fontFamily } from "@styles/styles";

const BoxContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`}
  ${mediaQuery(
    "md",
    css`
      display: flex;
      flex-direction: column;
    `
  )}
`;

const Box = styled.div`
  background-color: ${rgba(colors.darkGray, 0.9)};
  padding: 24px;
  grid-gap: 16px;
  align-items: center;
  display: flex;
  border-radius: 3px;
  grid-column: ${(props) => (props.full ? "1 / -1" : "auto")};
  ${mediaQuery(
    "xs",
    css`
      padding: 16px;
    `
  )}
  ${mediaQuery(
    "xxs",
    css`
      flex-direction: column;
    `
  )}
`;

const WrapIcon = ({ className, Icon }) => <Icon className={className} />;

const Icon = styled(WrapIcon)`
  color: ${colors.primary};
  font-size: 2.4rem;
`;

const IconCont = styled.div`
  height: 54px;
  width: 54px;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lighten(0.05, colors.darkGray)};
  ${mediaQuery("xs", css`
    height: 48px;
    width: 48px;
  `)}
`;

const IconBox = ({ icon }) => (
  <IconCont>
    <Icon Icon={icon} />
  </IconCont>
);

const TextBox = styled.div`
  ${mediaQuery("xxs", css`
    text-align: center;
  `)}
`;
const TextTitle = styled.h4`
  font-size: 2.4rem;
  color: ${lighten(0.3, colors.darkGray)};
`;
const TextInfo = styled.p``;

const Portfolio = () => (
  <Layout type="contact" title="Contatos" text="contate-me por esses meios">
    <SEO title="Contatos" />
    <BoxContainer marginBottom={24}>
      <Box>
        <IconBox icon={MdPlace} />
        <TextBox>
          <TextTitle>Localização</TextTitle>
          <TextInfo>São José do Rio Preto, SP</TextInfo>
        </TextBox>
      </Box>
      <Box>
        <IconBox icon={MdShare} />
        <TextBox>
          <TextTitle>Medias Sociais</TextTitle>
          <Social gap={0} marginTop={0} transparent />
        </TextBox>
      </Box>
      <Box>
        <IconBox icon={MdMail} />
        <TextBox>
          <TextTitle>Meu email</TextTitle>
          <TextInfo>cytsuda@gmail.com</TextInfo>
        </TextBox>
      </Box>
      <Box>
        <IconBox icon={MdPhoneInTalk} />
        <TextBox>
          <TextTitle>Telefone</TextTitle>
          <TextInfo>Main text</TextInfo>
        </TextBox>
      </Box>
    </BoxContainer>
    <BoxContainer>
      <Box full>
        <Form data={formArray} btnMsg="Enviar" />
      </Box>
    </BoxContainer>
  </Layout>
);

const formArray = [
  {
    type: "text",
    name: "nome",
    label: "Nome",
    placeholder: "Seu nome.",
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Seu email.",
  },
  {
    type: "textarea",
    rows: 5,
    name: "mensagem",
    label: "Mensagem",
    placeholder: "Escreva aqui sua mensagem.",
  },
];
export default Portfolio;
