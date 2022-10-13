import React, { Fragment } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import Card, { personFactory } from './Card';


export default function Cards(){
    const p1 = personFactory.build({
        image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80",
        name: "Bastián Escribano",
        area: "Área Informática",
        description: "Servicios de Asesorías de Programación, Guías, Clases Particulares y Realización de Tareas.",
        price: "60min: $15.000",
        contact: "+56 9 46241025",
    })

    return(
        <CardStyled>
            <Card image={p1.image} name={p1.name} area={p1.area} description={p1.description} price={p1.price} contact={p1.contact}></Card>
            <Card image={p1.image} name={p1.name} area={p1.area} description={p1.description} price={p1.price} contact={p1.contact}></Card>
            <Card image={p1.image} name={p1.name} area={p1.area} description={p1.description} price={p1.price} contact={p1.contact}></Card>
            <Card image={p1.image} name={p1.name} area={p1.area} description={p1.description} price={p1.price} contact={p1.contact}></Card>
        
        </CardStyled>
    )
}

const CardStyled = styled.div`
      margin-top: 3vh;
      display: flex;   
      flex-wrap: wrap;

`