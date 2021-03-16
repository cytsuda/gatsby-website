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
  grid-gap: 16px;
`;

const ListItem = styled.div`
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242c37;
  border-radius: 50%;
  margin-top: 32px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  &:hover {
    background-color: #1bb385;
  }
`;

const WrapIcon = ({ className, Icon }) => {
  return <Icon className={className} />;
};
const CustomIcon = styled(WrapIcon)`
  color: #fff;
  font-size: 16px;
`;

const SocialList = () => {
  return (
    <List>
      <ListItem>
        <CustomIcon Icon={FaTwitter} />
      </ListItem>
      <ListItem>
        <CustomIcon Icon={FaGithub} />
      </ListItem>
      <ListItem>
        <CustomIcon Icon={FaBehance} />
      </ListItem>
      <ListItem>
        <CustomIcon Icon={FaDribbble} />
      </ListItem>
      <ListItem>
        <CustomIcon Icon={FaFacebookF} />
      </ListItem>
      <ListItem>
        <CustomIcon Icon={FaLinkedinIn} />
      </ListItem>
    </List>
  );
};

export default SocialList;
