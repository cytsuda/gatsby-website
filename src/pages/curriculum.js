import React from "react";
import styled from "styled-components";

// Custom Component
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const Main = styled.div`
  display: flex;
  grid-gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
/*
  @media (max-width: 992px) {
    ${(props) => props.spanLg && `grid-column: span ${props.spanLg}`}
  }
  @media (max-width: 768px) {
    ${(props) => props.spanMd && `grid-column: span ${props.spanMd}`}
  }
  @media (max-width: 576px) {
    ${(props) => props.spanSm && `grid-column: span ${props.spanSm}`}
  }
*/
const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  margin-right: 16px;
  ${(props) => props.order && `order: ${props.orders}`}
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Group = styled.div`
  position: relative;
  margin-left: 32px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  &::after {
    position: absolute;
    top: 0;
    left: -24px;
    content: "";
    background-color: #2c3644;
    width: 2px;
    height: 100%;
  }
  &::before {
    position: absolute;
    top: 0;
    content: "";
    left: -32px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background-color: #1bb385;
    z-index: 2;
  }
`;

const GroupTitle = styled.h4`
  color: #1bb385;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const Tag = styled.p`
  background-color: #3a4455;
  align-self: flex-start;
  padding: 8px 16px 6px;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  margin-bottom: 16px;
`;

const Info = styled.p`
  font-style: italic;
  margin-bottom: 16px;
`;

const Details = styled.div`
  line-height: 1.8;
  & ul {
    margin-left: 18px;
  }
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
`;

const Curriculum = () => {
  return (
    <Layout title="Currículo" text="Confira meu curriculo">
      <SEO title="Curriculo" />
      <Main>
        <Columns>
          <Section order={1}>
            <Title>Sumário</Title>
            <Group>
              <GroupTitle>Subtitle Item</GroupTitle>
              <Tag>2009-2016</Tag>
              <Info>Small description</Info>
              <Details>Another length details about something else</Details>
            </Group>
          </Section>
          <Section order={2}>
            <Title>Secundário</Title>
            <Group>
              <GroupTitle>Subtitle Item</GroupTitle>
              <Tag>2009-2016</Tag>
              <Info>Small description</Info>
              <Details>Another length details about something else</Details>
            </Group>
            <Group>
              <GroupTitle>Subtitle Item</GroupTitle>
              <Tag>2009-2016</Tag>
              <Info>Small description</Info>
              <Details>
                Another length details about something else Mauris nec sapien
                eget ex tempus sagittis a eu dolor.
                <ul>
                  <li>
                    Aliquam ut quam sollicitudin, ultricies ante eu, bibendum
                    ante.
                  </li>
                  <li>Vestibulum aliquet magna vitae risus auctor blandit.</li>
                  <li>Etiam consectetur tortor eu nunc lacinia ultrices.</li>
                  <li>Integer porttitor arcu a tempus tristique.</li>
                  <li>Quisque interdum lorem vel hendrerit consequat.</li>
                </ul>
              </Details>
            </Group>
          </Section>
        </Columns>
        <Columns>
          <Section order={2}>
            <Title>Terciário</Title>
            <Group>
              <GroupTitle>Subtitle Item</GroupTitle>
              <Tag>2009-2016</Tag>
              <Info>Small description</Info>
              <Details>Another length details about something else</Details>
            </Group>
            <Group>
              <GroupTitle>Subtitle Item</GroupTitle>
              <Tag>2009-2016</Tag>
              <Info>Small description</Info>
              <Details>
                Another length details about something else Mauris nec sapien
                eget ex tempus sagittis a eu dolor.
                <ul>
                  <li>
                    Aliquam ut quam sollicitudin, ultricies ante eu, bibendum
                    ante.
                  </li>
                  <li>Vestibulum aliquet magna vitae risus auctor blandit.</li>
                  <li>Etiam consectetur tortor eu nunc lacinia ultrices.</li>
                  <li>Integer porttitor arcu a tempus tristique.</li>
                  <li>Quisque interdum lorem vel hendrerit consequat.</li>
                </ul>
              </Details>
            </Group>
            <Group>
              <GroupTitle>Subtitle Item</GroupTitle>
              <Tag>2009-2016</Tag>
              <Info>Small description</Info>
              <Details>Another length details about something else</Details>
            </Group>
          </Section>
        </Columns>
      </Main>
    </Layout>
  );
};

export default Curriculum;
