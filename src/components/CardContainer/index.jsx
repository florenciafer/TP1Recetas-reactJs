
import React from "react";
import Card from "../Card";

const CardContainer = ({ listarecetas }) => {
    return (
        <div className="container">
            {listarecetas.map((card) => {
                return <Card info={card} />;
            })}
        </div>
    );
};

export default CardContainer;