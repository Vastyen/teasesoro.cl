import React, { Fragment } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import Card, { personFactory } from './Card';

export default function Cards(){
    const p1 = personFactory.build({
        image: "./public/p1.jpeg",
        name: "Diego Riquelme",
        area: "Estudiante de Ingeniería de Ejecución en Computación e Informática.",
        description: "Clases Particulares de FPI, FCYP y Paradigmas de la Programación.",
        price: "60min: $10.000",
        contact: "+56 9 3019 9649",
    })

    return(
        <CardStyled>
            <Card image={p1.image} name={p1.name} area={p1.area} description={p1.description} price={p1.price} contact={p1.contact}></Card>
        </CardStyled>
    )
}

const CardStyled = styled.div`
      margin-top: 3vh;
      display: flex;   
      flex-wrap: wrap;

`