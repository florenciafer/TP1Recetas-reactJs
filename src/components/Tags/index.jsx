import React from "react";

const Tags = ({ className, nombre }) => {
    return <span className={className}>{nombre}</span>;
};

export default Tags;

//   {
//     id: "TM",
//     nombre: "Torta de Manzana",
//     dificultad: 5,
//     puntuacion: 7,
//     tiempo: "30 min",
//     nuevo: true,
//     sinAzucar: false,
//     img: require("./01.jpg"),
//   },