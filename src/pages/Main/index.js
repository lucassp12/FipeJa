import React, { useState, useEffect } from "react";
import { FaCar, FaMotorcycle, FaTruck } from "react-icons/fa";
import logo from "../../assets/logo.png";

import api from "../../services/api";
import TableFipe from "../../Components/TableFipe";
import Footer from "../../Components/Footer";

import {
  Container,
  ContainerButtons,
  ContainerInputs,
  ButtonSelectVehicle,
} from "./styles";

const stateMarks = [
  {
    name: "",
    fipe_name: "",
    order: 0,
    key: "",
    id: 0,
  },
];

const stateVehicles = [
  {
    fipe_marca: "",
    name: "",
    marca: "",
    key: "",
    id: "",
    fipe_name: "",
  },
];

const stateYears = [
  {
    fipe_marca: "",
    fipe_codigo: "",
    name: "",
    marca: "",
    key: "",
    veiculo: "",
    id: "",
  },
];

const stateFipeVehicle = {
  referencia: "",
  fipe_codigo: "",
  name: "",
  combustivel: "",
  marca: "",
  ano_modelo: "",
  preco: "",
  key: "",
  time: 0.0,
  veiculo: "",
  id: "",
};

const Main = () => {
  const [typeVehicle, setTypeVehicle] = useState("carros");
  const [mark, setMark] = useState("");
  const [marks, setMarks] = useState(stateMarks);
  const [vehicles, setVehicles] = useState(stateVehicles);
  const [vehicle, setVehicle] = useState("");
  const [years, setYears] = useState(stateYears);
  const [year, setYear] = useState("");
  const [fipeVehicle, setFipeVehicle] = useState(stateFipeVehicle);
  const [displayFipe, setDisplayFipe] = useState(0);

  const loadMarks = async () => {
    const response = await api.get(`/api/1/${typeVehicle}/marcas.json`);
    setMarks(response.data);
  };

  const loadVehicles = async () => {
    const response = await api.get(
      `/api/1/${typeVehicle}/veiculos/${mark}.json`
    );
    setVehicles(response.data);
  };

  const loadYears = async () => {
    const response = await api.get(
      `/api/1/${typeVehicle}/veiculo/${mark}/${vehicle}.json`
    );
    setYears(response.data);
  };

  useEffect(() => {
    loadMarks();

    if (mark) {
      loadVehicles();
    } else {
      setVehicles(stateVehicles);
    }
    if (vehicle) {
      loadYears();
    } else {
      setYears(stateYears);
    }
  }, [typeVehicle, mark, vehicle ]);



  const addTypeVehicle = (type) => {
    setTypeVehicle(type);
    setVehicle("");
    setMark("");
    setYear("");
  };

  const addMark = (event) => {
    setMark(event.target.value);
    setVehicle("");
  };

  const addVehicle = (event) => {
    setVehicle(event.target.value);
  };

  const addYear = (event) => {
    setYear(event.target.value);
  };

  const handleReturnMain = () => {
    setDisplayFipe(0);
  };

  const handleGetFipeVehicle = async () => {
    if (mark && vehicle && year) {
      const response = await api.get(
        `/api/1/${typeVehicle}/veiculo/${mark}/${vehicle}/${year}.json`
      );
      setFipeVehicle(response.data);
      setDisplayFipe(1);
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <Container>
      <img  src={logo} alt="Logo" />
      <ContainerButtons display={displayFipe}>
        <ButtonSelectVehicle
          display={displayFipe}
          checked={typeVehicle === "carros"}
          onClick={() => addTypeVehicle("carros")}
        >
          <FaCar />
        </ButtonSelectVehicle>
        <ButtonSelectVehicle
          checked={typeVehicle === "motos"}
          onClick={() => addTypeVehicle("motos")}
        >
          <FaMotorcycle />
        </ButtonSelectVehicle>
        <ButtonSelectVehicle
          checked={typeVehicle === "caminhoes"}
          onClick={() => addTypeVehicle("caminhoes")}
        >
          <FaTruck />
        </ButtonSelectVehicle>
      </ContainerButtons>

      <ContainerInputs display={displayFipe}>
        <select onChange={addMark}>
          <option value="">Selecionar marca</option>

          {marks.map((mark) => (
            <option key={mark.id} value={mark.id}>
              {mark.name}
            </option>
          ))}
        </select>
        <select disabled={mark ? false : true} onChange={addVehicle}>
          <option value="">Selecionar veículo</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.name}
            </option>
          ))}
        </select>
        <select disabled={vehicle ? false : true} onChange={addYear}>
          <option>Selecionar ano</option>
          {years.map((year) => (
            <option key={year.id} value={year.id}>
              {year.name}
            </option>
          ))}
        </select>
        <button onClick={handleGetFipeVehicle}>Pesquisar</button>
      </ContainerInputs>

      <TableFipe
        display={displayFipe}
        informationsVehicle={fipeVehicle}
        returnMain={handleReturnMain}
      />
     <Footer />
    </Container>
  );
};

export default Main;
