import React from "react";
import Puntaje from "../Puntaje";
import { GiSandsOfTime } from "react-icons/gi";

const CardBack = ({ nombre, puntuacion, dificultad, tiempo }) => {
    return (
        <div className="CardBack">
            <h1 className="Titulo-CardBack">{nombre}</h1>
            <p className="Subtitulo-CardBack">
                Puntuación:
        <span>
                    <Puntaje icono="heart" puntuacion={puntuacion}></Puntaje>
                </span>
            </p>
            <p className="Subtitulo-CardBack">
                Dificultad:
        <span>
                    <Puntaje icono="star" puntuacion={dificultad}></Puntaje>
                </span>
            </p>

            <p className="Subtitulo-CardBack">
                Tiempo: {tiempo}
                <GiSandsOfTime />
            </p>
        </div>
    );
};

export default CardBack;