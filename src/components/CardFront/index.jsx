import React from "react";
import Tags from "../Tags";

const CardFront = ({ img, sinAzucar, nuevo }) => {
    return (
        <div className="CardFront">
            <img className="image" src={img} alt="prueba" />
            <div className="tagContainer">
                {sinAzucar && <Tags className="orange" nombre="Sin azúcar" />}
                {nuevo && <Tags className="red" nombre="Nuevo" />}
            </div>
        </div>
    );
};

export default CardFront;