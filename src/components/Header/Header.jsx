import React from 'react'
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";

const Navbar = styled.div`
width:100vw;
height:10vh;
font-size: 2em;
display:flex;
justify-content: space-around;
align-items: center;
background-color: black;
color: white;

:hover {
  color: #D29F12;
  cursor:pointer;
}
`;

const Header = () => {
    let navigate = useNavigate();
  return (
    <Navbar>
        <div onClick={()=>setTimeout(()=>{navigate("/")},500)}>Movie Wall</div>
        <div onClick={()=>setTimeout(()=>{navigate("/shame")},500)}>Wall of Shame</div>
        <div onClick={()=>setTimeout(()=>{navigate("/favorites")},500)}>Favorites</div>
        <div onClick={()=>setTimeout(()=>{navigate("/search")},500)}>Search</div>
    </Navbar>
  )
}

export default Header