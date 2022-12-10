import React, { Fragment } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import Card, { personFactory } from './Card';

export default function Cards(){
    const p1 = personFactory.build({
        image: "./public/p1.jpeg",
        name: "Diego Riquelme",
        area: "Estudiante de Ingeniería de Ejecución en Computación e Informática",
        description: "Clases Particulares de FPI, FCYP y Paradigmas de la Programación.",
        price: "60min: $10.000",
        contact: "+56 9 3019 9649",
    })

    const p2 = personFactory.build({
        image: "./public/p2.jpeg",
        name: "Ignacio Zuñiga",
        area: "Estudiante de Ingeniería Civil Mecánica",
        description: "Clases particulares de Análisis Estadístico para Ingeniería (MBI), Estadística I y II (FAE).",
        price: "40min: $5.000 | 80min: $10.000",
        contact: "+56 9 5535 3336",
    })


    const p3 = personFactory.build({
        image: "./public/p3.jpeg",
        name: "Matías Aliaga",
        area: "Estudiante de Pedagogía en Historia",
        description: "Clases particulares de historia y geografía, repaso de fechas, procesos y acontecimientos..",
        price: "60 min: $10.000",
        contact: "+56 9 6712 3405",
    })

    return(
        <CardStyled>
            <Card image={p1.image} name={p1.name} area={p1.area} description={p1.description} price={p1.price} contact={p1.contact}></Card>
            <Card image={p2.image} name={p2.name} area={p2.area} description={p2.description} price={p2.price} contact={p2.contact}></Card>
            <Card image={p3.image} name={p3.name} area={p3.area} description={p3.description} price={p3.price} contact={p3.contact}></Card>

        </CardStyled>
    )
}

const CardStyled = styled.div`
      margin-top: 3vh;
      display: flex;   
      flex-wrap: wrap;

`