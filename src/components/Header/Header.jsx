import React, { useState } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SearchIcon from "@mui/icons-material/Search";

const Nav = styled.nav`
  width:100vw;
  height:8vh;
  font-size: 2em;
  display:flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.835171568627451) 50%, rgba(0,0,0,1) 100%);
  color: white;
  z-index:999;
  box-shadow: rgba(42, 48, 226, 0.663) 0px 1px 2px, rgb(51, 51, 51) 0px 5px 5px 5px;
  cursor: pointer;
  border-radius: 0 0 10% 0%;

  :hover {
    color: #D29F12;
    cursor:pointer;
  }

  @media(max-width: 480px) {
    position: fixed;
  }

`;

const NavItem = styled.a`
  
  ${({ active }) => active && `
    color: #D29F12;
  `}
`;

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  let navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
    navigate(item)
  };

  return (
    <Nav>
      <NavItem active={activeItem === '/'} onClick={() => handleItemClick('/')}><HomeIcon fontSize="large" /></NavItem>
      <NavItem active={activeItem === '/shame'} onClick={() => handleItemClick('/shame')}><ThumbDownIcon fontSize="large"/></NavItem>
      <NavItem active={activeItem === '/favorites'} onClick={() => handleItemClick('/favorites')}><ThumbUpIcon fontSize="large"/></NavItem>
      <NavItem active={activeItem === '/search'} onClick={() => handleItemClick('/search')}><SearchIcon fontSize="large"/></NavItem>
    </Nav>
  );
};

export default Navbar;
