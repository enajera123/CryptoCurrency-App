import React from "react";
import styled from "@emotion/styled";
const Heading = styled.div`
  color: #fff;
  background-color: #6f2e2e;
  padding: 14px;
  margin: 30px 0;
  text-align: center;
  font-family: "lato", sans-serif;
  text-transform: uppercase;
  
`;
function Error() {
  return (
    <Heading>
      <h1>Todos los campos son obligatorios</h1>
    </Heading>
  );
}

export default Error;
