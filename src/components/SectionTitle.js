import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
  max-width: 25%;
  color: #3a4455;
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  & h2 {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 3px;
  }
  & span {
    height: 1px;
    background-color: #1bb385;
    margin-left: 8px;
    flex: 1;
  }
  @media (max-width: 992px) {
    max-width: 30%;
  }
  @media (max-width: 768px) {
    max-width: 50%;
  }
  @media (max-width: 576px) {
    max-width: 70%;
  }
`;

const SectionTitle = (props) => {
  const { title } = props;
  return (
    <TextWrapper>
      <h2>{title}</h2>
      <span />
    </TextWrapper>
  );
};

export default SectionTitle;
