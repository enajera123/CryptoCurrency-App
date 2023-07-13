import styled from "@emotion/styled";
import React from "react";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Imagen = styled.img`
  display: block;
  width: 120px;
`;
const Text = styled.p`
  font-size: 18px;
  span {
    color:#698fa6;
    font-weight: 700;
  }
`;
const Precio = styled.p`
    font-size: 24px;
    span {
        color:#698fa6;
        font-weight: 700;
    }
`
function Resultado({ resultado }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} 
      alt="Imagen moneda"/>
      <div>
        <Precio>
          Prize: <span>{PRICE}</span>
        </Precio>
        <Text>
          Highest Prize of the Day: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Lowest Prize of the Day: <span>{LOWDAY}</span>
        </Text>
        <Text>
          24 Hours Variantion: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Last Update: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Contenedor>
  );
}

export default Resultado;
