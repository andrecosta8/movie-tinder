import React from 'react'
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SearchIcon from "@mui/icons-material/Search";

const Navbar = styled.div`
width:100vw;
height:10vh;
font-size: 2em;
display:flex;
justify-content: space-around;
align-items: center;
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.835171568627451) 50%, rgba(0,0,0,1) 100%);
color: white;
z-index:999;

:hover {
  color: #D29F12;
  cursor:pointer;
}

@media(max-width: 480px) {
  border-radius: 0 0 10% 10%;
  position: fixed;
}
`;

const Header = () => {
    let navigate = useNavigate();
  return (
    <Navbar>
        <div onClick={()=>setTimeout(()=>{navigate("/")},500)}><HomeIcon fontSize="large" /></div>
        <div onClick={()=>setTimeout(()=>{navigate("/shame")},500)}><ThumbDownIcon fontSize="large"/></div>
        <div onClick={()=>setTimeout(()=>{navigate("/favorites")},500)}><ThumbUpIcon fontSize="large"/></div>
        <div onClick={()=>setTimeout(()=>{navigate("/search")},500)}><SearchIcon fontSize="large"/></div>
    </Navbar>
  )
}

export default Header