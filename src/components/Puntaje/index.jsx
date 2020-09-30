import React from "react";
import { BsHeart, BsHeartHalf, BsHeartFill } from "react-icons/bs";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const ICONS = {
    heart: {
        empty: <BsHeart></BsHeart>,
        half: <BsHeartHalf></BsHeartHalf>,
        filled: <BsHeartFill></BsHeartFill>,
    },
    star: {
        empty: <BsStar></BsStar>,
        half: <BsStarHalf></BsStarHalf>,
        filled: <BsStarFill></BsStarFill>,
    },
};

const obtenerIconos = (puntaje, icons) => {
    const aux = [];
    for (let i = 0; i < puntaje; i++) {
        aux.push(icons);
    }
    return aux;
};

const Puntaje = ({ icono, puntuacion }) => {
    const icons = ICONS[icono];

    const resto = puntuacion % 2;
    const iconosLlenos = obtenerIconos((puntuacion - resto) / 2, icons.filled);
    const iconosMedios = resto ? icons.half : null;
    const iconosVacios = obtenerIconos(
        (10 - puntuacion - resto) / 2,
        icons.empty
    );

    return [...iconosLlenos, iconosMedios, ...iconosVacios];
};

export default Puntaje;