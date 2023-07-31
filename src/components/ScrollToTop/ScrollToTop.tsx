// import React from 'react'
// import styled from "styled-components";
// import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
// import IconButton from '@mui/material/IconButton';

// const ScrollButton = styled.div `
//   display: none;

//   @media(max-width: 480px) {
//     display:flex;
//     position: fixed;
//     bottom: 5vh;
//     right: 3vw;
//     opacity: 0.8;
//   }
// `;

// const ScrollToTop = () => {
//   return (
//     <ScrollButton>
//         <IconButton sx={{color: "#0d76b5"}} onClick={() => {
//           window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//         }}>
//         <ArrowCircleUpRoundedIcon sx={{ fontSize: 50 }} />
//         </IconButton>
//       </ScrollButton>
//   )
// }

// export default ScrollToTop

import styled from "styled-components";
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import IconButton from '@mui/material/IconButton';

const ScrollButton = styled.div`
  display: none;

  @media(max-width: 480px) {
    display:flex;
    position: fixed;
    bottom: 5vh;
    right: 3vw;
    opacity: 0.8;
  }
`;

const ScrollToTop: React.FC = () => {
  return (
    <ScrollButton>
      <IconButton sx={{ color: "#0d76b5" }} onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}>
        <ArrowCircleUpRoundedIcon sx={{ fontSize: 50 }} />
      </IconButton>
    </ScrollButton>
  );
};

export default ScrollToTop;
