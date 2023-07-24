import React from 'react'
import styled from "styled-components";

const NotFoundPage = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0.6446953781512605) 0%, rgba(248,249,248,1) 50%);
  min-height:90vh;
`;

const Message = styled.p`
  font-size: 1.5em;
`

const NotFound = () => {
  return (
    <NotFoundPage>
      <Message>Nothing to see here!!!</Message>
      </NotFoundPage>
  )
}

export default NotFound