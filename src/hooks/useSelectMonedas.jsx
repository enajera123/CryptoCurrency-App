import React, { useState } from "react";
import styled from "@emotion/styled";
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;
const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;
function useSelectMonedas(label, monedas) {
  const [state, setState] = useState("");
  function SelectMonedas() {
    return (
      <>
        <Label>{label}</Label>
        <Select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select your money</option>
          {monedas.map((moneda) => (
            <option value={moneda.id} key={moneda.id}>
              {moneda.nombre}
            </option>
          ))}
        </Select>
      </>
    );
  }
  return [state, SelectMonedas];
}

export default useSelectMonedas;
