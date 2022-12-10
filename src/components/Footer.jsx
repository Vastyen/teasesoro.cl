import React, { Fragment } from 'react'; // we need this to make JSX compile
import styled from "styled-components";
import { FaGithub } from 'react-icons/fa';
export const Footer = () => {

    return <Fragment>
        
        <Foot>
            <a className="Foot" href="https://github.com/vastien"><FaGithub className='FaGithub' size={25} /> @vastien</a>
        <label className="Foot">Desarrado con 🫀 por Bastián Escribano</label>
        </Foot>
    </Fragment>

}

export default Foot

const Foot = styled.label`
.Foot{
    padding-top: 10px;
    padding-bottom: 0px;
    margin: 0 auto;
    display:flex;
    text-align: center;
    justify-content:center;
    font-size: 1em;
  .FaGithub{
    margin-right: 2vh;
  }

    `