import React from "react";
import styled from "styled-components";
// Icons
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaBehance } from "@react-icons/all-files/fa/FaBehance";
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

const List = styled.div`
  display: flex;
  grid-gap: ${(props) => props.gap}px;
  margin-top: ${(props) => props.marginTop}px;
`;

const ListItem = styled.a`
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  color: #fff;
  text-decoration: none;
  background-color: ${(props) =>
    props.transparent ? "transparent" : "#242c37"};
  &:hover {
    background-color: ${(props) =>
      props.transparent ? "transparent" : "#1bb385"};
    ${(props) => props.transparent && "color: #1bb385;"}
  }
`;

const WrapIcon = ({ className, Icon }) => {
  return <Icon className={className} />;
};
const CustomIcon = styled(WrapIcon)`
  color: inherit;
  font-size: 16px;
`;

const SocialList = ({ marginTop = 32, gap = 16, transparent = false }) => {
  console.log("Social List");
  console.log(marginTop);
  return (
    <List marginTop={marginTop} gap={gap} transparent={transparent}>
      <ListItem
        transparent={transparent}
        href="https://twitter.com/cytsuda"
        target="_blank"
      >
        <CustomIcon Icon={FaTwitter} />
      </ListItem>
      <ListItem
        transparent={transparent}
        href="https://github.com/cytsuda"
        target="_blank"
      >
        <CustomIcon Icon={FaGithub} />
      </ListItem>
      <ListItem
        transparent={transparent}
        href="https://www.behance.net/cytsuda"
        target="_blank"
      >
        <CustomIcon Icon={FaBehance} />
      </ListItem>
      <ListItem
        transparent={transparent}
        href="https://dribbble.com/yoshiotsuda"
        target="_blank"
      >
        <CustomIcon Icon={FaDribbble} />
      </ListItem>
      {/* <ListItem
        transparent={transparent}
        href="https://www.behance.net/cytsuda"
        target="_blank"
      >
        <CustomIcon Icon={FaFacebookF} />
      </ListItem> */}
      <ListItem
        transparent={transparent}
        href="https://www.linkedin.com/in/cytsuda/"
        target="_blank"
      >
        <CustomIcon Icon={FaLinkedinIn} />
      </ListItem>
    </List>
  );
};

export default SocialList;
