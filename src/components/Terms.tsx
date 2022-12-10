import React, { Fragment } from 'react'; // we need this to make JSX compile
import styled from "styled-components";


export const Terms = () =>{


    const termsofuse = "Teasesoro.cl es una plataforma de anuncios. El creador de un anuncio debe certificar su identidad para para cumplir aceptar los términos de uso y la responsabilidad legal. Éste proceso de certificación implica la presentación de una copia digital de la credencial universitaria de la Universidad de Santiago de Chile. Éste documento es solicitado de forma obligatoria durante el proceso de publicación de anuncio. El anunciante es responsable de todo el contenido expuesto en su anuncio incluso su cumplimiento y acepta la responsabilidad legal ante cualquier hecho que pueda ocasionar un daño de cualquier tipo a un usuario que adquiera los servicios anunciados."

    return <Fragment>
        <div id="condiciones">
        <Termsof>
        <div>
        <label className="titlelabel">Términos de Uso</label>
        <label className="bodylabel">{termsofuse}</label>
        </div>
        </Termsof>
        </div>
    </Fragment>
}

export const Termsof = styled.div`

    font-family: 'Noto Sans Mono', monospace;
    margin-top: 5vh;
    justify-content: center;
    margin:5%;
    width:90%;
    align-items: center;
    text-align: center;
    display: block;
    box-shadow: -5px 6px 55px -8px rgba(0, 0, 0, 0.88);
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
 
    .bodylabel{
    display:flex;
    margin-inline:5vw;
    margin-top:4vh;
    width:90%;
    color: bisque;
    font-size: 1.2em;
    padding-bottom: 3vh;
}
    .titlelabel{
    font-size: 1.8em;
    display:block;
    color: white;
    padding: 2vh;
    font-we
    padding-bottom: 0;
}
`
