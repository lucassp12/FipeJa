import React from "react";
import { FaArrowLeft } from "react-icons/fa";

import { Container } from "./styles";

const TableFipe = ({ display, informationsVehicle, returnMain }) => {
  const getDateNow = () => {
    const daysOfTheWeek = [
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
      "Domingo",
    ];
    const monthsOfTheYear = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const date = new Date();

    return `${daysOfTheWeek[date.getDay()]},
     ${date.getDate()} de ${
      monthsOfTheYear[date.getMonth()]
    } de ${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <Container display={display}>
      <button onClick={() => returnMain()}>
        <FaArrowLeft /> Voltar
      </button>
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
            <td>{getDateNow()}</td>
          </tr>
          <tr>
            <td style={{ background: "red", color: "#fff" }}>Preço Médio:</td>
            <td style={{ background: "red", color: "#fff" }}>
              {informationsVehicle.preco}
            </td>
          </tr>
        </tbody>
    </Container>
  );
};

export default TableFipe;
