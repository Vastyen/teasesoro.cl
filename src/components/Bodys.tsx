import React, { Fragment } from 'react'; // we need this to make JSX compile
import Navbar from './Navbar';
import styled from "styled-components";



function Bodys(){

    return (
    <Fragment>
            <Navbar></Navbar>
            <Titles>
            <label className="l1">Contacta a tu asesor/a verificado/a</label>
            <label className="l2">Un lugar transparente.</label>
            <label className="l3">Sin comisiones ni intermediarios.</label>
            </Titles>
    </Fragment>


    )
}

export default Bodys

const Titles = styled.div`

    margin-left: 3vh;
    margin-top: 3vh;
 
    
    .l1{
         font-family: 'Raleway', sans-serif;
        font-size: 5vh;
        color: rgb(255, 255, 255);
        display:block;
        font-weight: bold;
        font-family: 'Noto Sans Mono', monospace;
        
    }

    .l2{
        font-size:3.8vh;
        display:block;
        font-weight: bold;
        color: bisque;
        font-family: 'Noto Sans Mono', monospace;
    }

    .l3{
        font-size:2.5vh;
        display:block;
        color: #E3C19C;
                font-weight: bold;

        font-family: 'Noto Sans Mono', monospace;
    }





`
