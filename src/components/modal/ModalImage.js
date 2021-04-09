import React, { useState } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Style var
import { colors, mediaQuery } from "@styles/styles";

const Main = styled.div`
  overflow: hidden;
  ${(props) => props.gridColumn && `grid-column: ${props.gridColumn};`}
  display:flex;
  flex-direction: column;
  grid-gap: 16px;
  
  ${mediaQuery(
    "lg",
    css`
      max-height: 45vh;
      margin-bottom: 32px;
    `
  )}
`;

const Image = styled.div`
  ${(props) => (props.show ? "display: max-heightock;" : "display:none;")}
`;

const Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 12px;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.active ? colors.darkPrimary : darken(0.6, colors.white)};
  &:hover {
    background: ${colors.primary};
  }
`;

const ImageContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

const ModalImage = (props) => {
  const { photos, title, gridColumn } = props;
  const [selected, setSelected] = useState(0);
  const images = photos.map((image) => getImage(image.childrenImageSharp[0]));
  return (
    <Main gridColumn={gridColumn}>
      <ImageContainer>
        {images.map((image, index) => (
          <Image show={selected === index} key={index}>
            <GatsbyImage
              image={image}
              alt={`${title}_${index}`}
              objectFit="contain"
            />
          </Image>
        ))}
      </ImageContainer>
      <Select>
        {images.map((item, index) => (
          <Circle
            key={index}
            onClick={() => setSelected(index)}
            active={selected === index}
          />
        ))}
      </Select>
    </Main>
  );
};

export default ModalImage;
