import * as React from "react";
import styled from "styled-components";

import { MdPlace } from "@react-icons/all-files/md/MdPlace";
import { MdMail } from "@react-icons/all-files/md/MdMail";
import { MdShare } from "@react-icons/all-files/md/MdShare";
import { MdPhoneInTalk } from "@react-icons/all-files/md/MdPhoneInTalk";

// Custom Component
import SEO from "@components/seo";
import Layout from "@components/layout/layout";
import Social from "@components/social";
import Form from "@components/form";

const BoxContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`}
`;

const Box = styled.div`
  background-color: #2c3644;
  padding: 24px;
  grid-gap: 16px;
  align-items: center;
  display: flex;
  border-radius: 3px;
  grid-column: ${(props) => (props.full ? "1 / -1" : "auto")};
`;

const WrapIcon = ({ className, Icon }) => <Icon className={className} />;

const Icon = styled(WrapIcon)`
  color: #1bb385;
  font-size: 24px;
`;

const IconCont = styled.div`
  height: 54px;
  width: 54px;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #515f76;
`;

const IconBox = ({ icon }) => (
  <IconCont>
    <Icon Icon={icon} />
  </IconCont>
);

const TextBox = styled.div``;
const TextTitle = styled.h4`
  font-size: 24px;
  color: #515f76;
`;
const TextInfo = styled.p``;

const Portfolio = () => (
  <Layout type="contact" title="Contatos" text="Contate me mdf">
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
