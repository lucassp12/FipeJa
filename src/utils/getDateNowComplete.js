const getDateNowComplete = () => {
  const daysOfTheWeek = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
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

  let hours = date.getHours();

  if (hours.length < 2) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();

  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }

  return `${daysOfTheWeek[date.getDay()]},
   ${date.getDate()} de ${
    monthsOfTheYear[date.getMonth()]
  } de ${date.getFullYear()} às ${hours}:${minutes}`;
};

export default getDateNowComplete;
