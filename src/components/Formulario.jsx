import React from "react";
import styled from "@emotion/styled";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { useEffect } from "react";
import { useState } from "react";
import Error from "./Error";
const Boton = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

function Formulario({setMonedas}) {
  const [cryptoMoneda, setCryptoMoneda] = useState([]);
  const [error, setError] = useState(false);
  const [coin, SelectMonedas] = useSelectMonedas("Select Your Money", monedas);

  const [cryptoCoin, SelectCriptoMoneda] = useSelectMonedas(
    "Select Your Crypto Currency",
    cryptoMoneda
  );

  function handleSubmit(e) {
    e.preventDefault();
    if ([coin, cryptoCoin].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 3000);
      return
    }
    setMonedas({coin,cryptoCoin})
    
  }

  useEffect(() => {
    async function consultarApi() {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const cryptoMonedasArray = resultado.Data.map((coin) => {
        const objeto = {
          id: coin.CoinInfo.Name,
          nombre: coin.CoinInfo.FullName,
        };
        return objeto;
      });

      setCryptoMoneda(cryptoMonedasArray);
    }
    consultarApi();
  }, []);
  

  return (
    <>
      <form>
        {error && <Error />}
        <SelectMonedas />
        <SelectCriptoMoneda />
        <Boton value="Quote" type="submit" onClick={handleSubmit} />
      </form>
    </>
  );
}

export default Formulario;
