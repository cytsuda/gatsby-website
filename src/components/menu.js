import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  list-style: none;
  grid-gap: 42px;
  &.nav {
    padding: 24px 0px;
  }
  @media (max-width: 768px) {
    position: fixed;
    width: 90%;
    height: 80vh;
    background-color: rgba(36, 44, 55, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -100%;
    left: 5%;
    margin: 0;
    transition: all ease-in-out 0.2s;
    border: 1px solid white;
    display: flex;
    opacity: 0;
    z-index: 99;
    &.open {
      transform: translateY(140%);
      opacity: 1;
    }
  }
`;

const isActive = (isCurrent, className) => {
  return { className: clsx(className, isCurrent && "active") };
};

const ListItemWrapper = ({ className, to, children }) => {
  return (
    <Link getProps={({ isCurrent }) => isActive(isCurrent, className)} to={to}>
      {children}
    </Link>
  );
};

const LinkItem = styled(ListItemWrapper)`
  color: #ddd;
  font-weight: 500;
  coursor: pointer;
  transition: all ease-in-out 0.2s;
  position: relative;
  text-decoration: none;
  &:after {
    content: "";
    width: 0;
    height: 2px;
    background-color: #1bb385;
    bottom: -4px;
    left: 0;
    position: absolute;
    transition: all ease-in-out 0.2s;
  }
  &:hover,
  &.active {
    color: #fff;
    &:after {
      width: 24px;
    }
  }
`;

const MenuIcon = styled.div`
  background: #2c3644;
  border: 1px solid #e7eefb;
  cursor: pointer;
  display: none;
  height: 48px;
  width: 48px;
  position: fixed;
  border-radius: 50%;
  z-index: 200;
  top: 16px;
  right: 16px;
  transition: all ease 0.3s;
  &:hover {
    border-color: #66ebba;
  }
  &:hover div,
  &:hover div::before,
  &:hover div::after {
    background: #66ebba;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuItem = styled.div`
  left: 13px;
  top: 22px;
  &::before {
    top: 6px;
    ${(props) => props.open && ` transform: rotate(-45deg);`}
  }
  &::after {
    top: -6px;
    ${(props) => props.open && `transform: rotate(45deg);`}
  }
  &,
  &::before,
  &::after {
    background: #e7eefb;
    cursor: pointer;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    transition: background ease 0.3s, top ease 0.3s 0.3s, transform ease 0.3s;
    width: 20px;
  }
  &::before,
  &::after {
    ${(props) =>
      props.open && `top: 0; transition: top ease .3s, transform ease .3s .3s;`}
  }
  & {
    ${(props) => props.open && `width: 0`}
  }
`;
const MenuComponent = (props) => {
  const type = "type" in props ? props.type : null;
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuIcon onClick={() => setOpen((prev) => !prev)}>
        <MenuItem open={open} />
      </MenuIcon>
      <List className={clsx(open && "open", !type && "nav")}>
        <LinkItem to="/">Início</LinkItem>
        <LinkItem to="/about/">Sobre</LinkItem>
        <LinkItem to="/curriculum/">Currículo</LinkItem>
        <LinkItem to="/service/">Serviços</LinkItem>
        <LinkItem to="/portifolio/">Portfólio</LinkItem>
        <LinkItem to="/contact/">Contato</LinkItem>
      </List>
    </>
  );
};

export default MenuComponent;
