import React from 'react'; // we need this to make JSX compile

import * as Factory from "factory.ts";
import styled from 'styled-components';

interface Person {
    image: string;
    name: string;
    area: string;
    description: string;
    price: string;
    contact: string;
}

export const personFactory = Factory.Sync.makeFactory<Person>({
    image: "",
    name: "",
    area: "",
    description: "",
    price: "",
    contact: ""
});

export default function Card(props: Person) {
    return (
        <CardStyled>
        <img className="image" src={props.image}/>
        <label className="name">{props.name}</label>
        <label className="area">{props.area}</label>
        <label className="description">{props.description}</label>
        <label className="price">{props.price}</label>
        <label className="contact">{props.contact}</label>
        </CardStyled>
    )
}


const CardStyled = styled.label`

    margin: 2vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: block;
    width: 35vh;
    padding: 2vh;
    font-family: 'Noto Sans Mono', monospace;
    box-shadow: -5px 6px 55px -8px rgba(0, 0, 0, 0.88);
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;


    .image{
        margin: 0 auto;
        border-radius: 70%;
        width:150px;
        height:150px;
        object-fit: cover;
        position: relative;
        z-index: 0;
    }

    .name{
        color: #FFE4C4;
        font-size: 2.7vh;
        display:block;
        padding: 5px;
    }

    .area{
        color: #FB8840;
        font-size: 2.3vh;
        display:block;
        padding: 5px;
    }

    .description{
        font-size: 2.2vh;
        display:block;
        color: #F2E9DB;
        padding: 5px;
    }

    .price{
        font-size: 2.4vh;
        display:block;
        color: #93E07D;
        padding: 5px;
    }

    .contact{
        font-size: 2.2vh;
        display:block;
        color: #7FB0FE;
        padding: 5px;
    }


    @media(max-width: 1024px){
        display:block;
        width: 90vw;
        margin: 0 auto;
        margin-bottom: 3vh;
        margin-inline: 5vw;
    }


`
