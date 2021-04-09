import React from "react";
import styled, { css } from "styled-components";
import { rgba, darken } from "polished";
import moment from "moment";
import "moment/locale/pt-br";

import ModalImage from "@components/modal/ModalImage";

import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

// Styles var
import { colors, mediaQuery, textFont, fontFamily } from "@styles/styles";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
`;

const Backdrop = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${rgba(colors.black, 0.95)};
  opacity: 1;
  visibility: visible;
  pointer-events: none;
  ${Modal}:target & {
    pointer-events: auto;
  }
`;

const ModalMain = styled.div`
  position: fixed;
  width: calc(100vw - 240px);
  height: 90vh;
  transform: scale(0);
  transition: transform 0.2s 0.3s ease-in-out;
  background-color: ${rgba(colors.darkGray, 0.9)};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.01'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  display: flex;
  ${Modal}:target & {
    transform: scale(1);
  }

  ${mediaQuery(
    "lg",
    css`
      display: inline;
      overflow-x: hidden;
      overflow-y: auto;
      width: calc(100vw - 180px);
    `
  )}
  ${mediaQuery(
    "md",
    css`
      width: calc(100vw - 115px);
      left: 32px;
    `
  )}
  ${mediaQuery(
    "sm",
    css`
      width: 100vw;
      height: 100vh;
      left: 0;
    `
  )}
`;

const ModalContainer = styled.div`
  position: relative;
  display: flex;
  padding: 80px 120px;
  flex-direction: column;
  justify-content: center;
  color: ${colors.primary};
  overflow: hidden;
  ${mediaQuery(
    "lg",
    css`
      padding: 40px 56px;
    `
  )}
  ${mediaQuery(
    "md",
    css`
      padding: 40px;
    `
  )}
  ${mediaQuery(
    "sm",
    css`
      padding: 60px 40px;
    `
  )}
  ${mediaQuery(
    "xs",
    css`
      padding: 56px 16px 40px;
    `
  )}
`;

const WrapIcon = ({ className, Icon }) => (
  <a className={className} href="#">
    <Icon />
  </a>
);

const IconItem = styled(WrapIcon)`
  font-size: 32px;
  height: 56px;
  width: 56px;
  top: 32px;
  right: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  position: fixed;
  background-color: ${rgba(colors.white, 0.1)};
  color: white;
  &:hover {
    color: ${colors.primary};
    background-color: ${rgba(colors.white, 0.3)};
  }
  ${mediaQuery(
    "lg",
    css`
      transform: scale(0.9);
      top: 28px;
      right: 28px;
    `
  )}
  ${mediaQuery(
    "md",
    css`
      top: 16px;
      right: 16px;
    `
  )}
  ${mediaQuery(
    "sm",
    css`
      background-color: ${rgba(colors.black, 0.6)};
      &:hover {
        background-color: ${rgba(colors.black, 0.9)};
      }
    `
  )}
  ${mediaQuery(
    "xs",
    css`
      transform: scale(0.7);
      top: 8px;
      right: 8px;
    `
  )}
`;

const DetailBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 100%;
  grid-gap: 64px;
  ${mediaQuery(
    "xxl",
    css`
      grid-gap: 32px;
    `
  )}
  ${mediaQuery(
    "lg",
    css`
      display: flex;
      flex-direction: column;
    `
  )}
`;

const TopTittle = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 200;}
  ${mediaQuery(
    "sm",
    css`
      max-width: 80vw;
    `
  )}
  ${mediaQuery(
    "xs",
    css`
      max-width: 100%;
      font-size: 20px;
    `
  )}
`;

const InfoBox = styled.div`
  grid-column: 4 / span 2;
  display: flex;
  flex-direction: column;
  color: ${darken(0.4, colors.white)};
  overflow: hidden;
  ${mediaQuery(
    "lg",
    css`
      background-color: ${colors.black};
      padding: 32px;
      margin: -32px -32px;
      border-radius: 10px;
    `
  )}
  ${mediaQuery(
    "sm",
    css`
      padding: 20px;
      margin: auto -20px;
    `
  )}
`;

const InfoTitle = styled.h4`
  ${textFont(fontFamily.raleway, "2.4rem", 200, colors.white)}
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

const Link = styled.a`
  color: ${colors.primary};
  text-decoration: none;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 4px;
  margin-bottom: 16px;
`;

const DescriptionBox = styled.div`
  margin-bottom: 16px;
`;

const CategoryBox = styled.div``;

const InfoCategory = styled.div`
  display: flex;
  grid-gap: 8px;
  margin-top: 8px;
`;

const ItemCategory = styled.span`
  border: 1px solid ${darken(0.4, colors.white)};
  color: ${darken(0.4, colors.white)};
  padding: 4px 12px;
  border-radius: 5px;
`;

const Bold = styled.span`
  font-weight: 700;
  color: ${darken(0.1, colors.white)};
`;

const Paragraph = styled.p`
  margin-bottom: 8px;
  ${mediaQuery(
    "xxl",
    css`
      display: flex;
      flex-direction: column;
      grid-gap: 4px;
    `
  )}
`;

const ModalPortfolio = (props) => {
  const { id, data } = props;

  return (
    <Modal id={id}>
      <Backdrop href="#" />
      <ModalMain>
        <ModalContainer>
          <TopTittle>{data.subtitle}</TopTittle>
          <DetailBox>
            <ModalImage
              photos={data.photos}
              title={data.title}
              gridColumn="1 / span 3"
            />
            <InfoBox>
              <InfoTitle>{data.title}</InfoTitle>
              <InfoText>
                <Paragraph>
                  <Bold>Data do Projeto: </Bold>
                  {moment(data.date, "DD/MM/YYYY").format("LL")}
                </Paragraph>
                {data.github && (
                  <Paragraph>
                    <Bold>Github: </Bold>
                    <Link
                      href={data.github}
                      alt={`Github do projeto ${data.title}`}
                      target="_blank"
                    >
                      {data.github}
                    </Link>
                  </Paragraph>
                )}
                <Paragraph>
                  <Bold>URL do projeto: </Bold>
                  <Link
                    href={data.live}
                    alt={`Link do projeto ${data.title}`}
                    target="_blank"
                  >
                    {data.live}
                  </Link>
                </Paragraph>
              </InfoText>
              <DescriptionBox>
                <Bold>Descrição:</Bold> {data.description}
              </DescriptionBox>
              <CategoryBox>
                <Bold>Categorias: </Bold>
                <InfoCategory>
                  {data.category.map((item) => (
                    <ItemCategory key={item}>{item}</ItemCategory>
                  ))}
                </InfoCategory>
              </CategoryBox>
            </InfoBox>
          </DetailBox>
        </ModalContainer>
      </ModalMain>
      <IconItem Icon={AiOutlineClose} />
    </Modal>
  );
};

export default ModalPortfolio;
