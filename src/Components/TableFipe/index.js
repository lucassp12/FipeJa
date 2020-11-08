import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import getDateNowComplete from '../../utils/getDateNowComplete';

import { Container } from "./styles";

const TableFipe = ({ display, informationsVehicle, returnMain }) => {
  return (
    <Container display={display}>
      <button onClick={() => returnMain()}>
        <FaArrowLeft /> Voltar
      </button>
      <table>
        <tbody>
          <tr>
            <td>Mês de referência:</td>
            <td>{informationsVehicle.referencia}</td>
          </tr>
          <tr>
            <td>Código Fipe:</td>
            <td>{informationsVehicle.fipe_codigo}</td>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>{informationsVehicle.marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>{informationsVehicle.name}</td>
          </tr>
          <tr>
            <td>Ano Modelo:</td>
            <td>{`${informationsVehicle.ano_modelo} ${informationsVehicle.combustivel}`}</td>
          </tr>
          <tr>
            <td>Data Consulta:</td>
            <td>{getDateNowComplete()}</td>
          </tr>
          <tr>
            <td style={{ background: "red", color: "#fff" }}>Preço Médio:</td>
            <td style={{ background: "red", color: "#fff" }}>
              {informationsVehicle.preco}
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TableFipe;
