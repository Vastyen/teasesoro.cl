import React, { Fragment } from 'react'; // we need this to make JSX compile
import styled from 'styled-components';
import { Termsof } from './Terms';


export const Form = () =>{


    return (<Fragment>
        <Termsof>
        <label id="publicate" className="titlelabel">Publícate</label>
        <label className="bodylabel">Si eres estudiante de la Universidad de Santiago de Chile y quieres ofrecer tus servicios como asesor o profesor particular ponte en contacto con nosotros</label>
        </Termsof>

        <FormStyle>
            <div data-aos="fade-up" id="talk">
            <form className="form" target="_blank" action="https://formsubmit.co/bastian.escribano@usach.cl" method="POST">
                <input type="text" name="_honey" className="dn"/>
                    <input type="hidden" name="_next" value="https://teasesoro.cl"/>
                        <input type="hidden" name="_captcha" value="false"/>
                    <label className="titlelabel">¡Hablemos!</label>
                            <input type="hidden" name="_subject" value="teasesoro.cl"/>
                                <div className="form-control">
                                    <input type="text" name="Name" id="Name" required/>
                                        <label>Nombre</label>
                                </div>
                                <div className="form-control">
                                    <input type="email" name="Email" id="Email" required/>
                                        <label>Email</label>
                                </div>
                                <p><textarea name="Mensaje" placeholder="¿Qué podemos hacer por ti?"></textarea></p>
                                <button type="submit">Enviar</button>
                </form>
            </div>
        </FormStyle>

        </Fragment>

    )
}


const FormStyle = styled.div`
.dn { 
    display:none;
}

.titlelabel{
    font-size: 1.8em;
    display:block;
    color: white;
    padding: 2vh;
    font-we
    padding-bottom: 0;
}

.styledForm {
    position: relative;
}

.form {
    margin:0 auto;
    width: 60vw;
    margin-inline: 20vw;
    font-family: 'Noto Sans Mono', monospace;
    height: 80vh;
    border-radius: 8px;
    box-shadow: 0 0 40px -10px #000;
    padding: 4vh;
    box-sizing: border-box; 
    position: relative;
}

textarea {
    width: 100%;
    padding: 2vh;
    height: 25vh;
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    transition: all .3s;
    border-bottom: 2px solid #bebed2;
}

input {
    width: 100%;
    padding: 1vh;   
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    font-family: 'Montserrat', sans-serif;
    transition: all .3s;
    border-bottom: 2px solid #bebed2
}

input:focus {
    border-bottom: 2px solid #78788c
}

p:before {
    content: attr(type);
    display: block;
    margin: 1vh;
    font-size: 14px;
}

button {
    float: right;
    margin: 2vh;
    border: 2px solid #A49861;
    background: 0;
    padding: 0.5vh;
    cursor: pointer;
    transition: all .3s;
    font-size: 2vh;
}

button:hover {
    color: rgb(179, 174, 174);

}

span {
    margin: 0 5px 0 15px
}
.form-control{
    position: relative;
    margin: 20px 0 40px;
}
.form-control input {
    background-color: transparent ;
    display: block ;
    width: 100%;
    margin-top: 30px;;
    font-size: 13px;
}


.form-control label{
    font-size: 13px;
    position: absolute;
    top: -2px;
    left: 0;
    /*pointer-events: none;*/
}

.form-control label {
    display: inline-block;
    font-size: 14px;
    min-width: 5px;
    transition-duration: 400ms;
}

.form-control input:focus + label,
.form-control input:valid + label,
.form-control label:hover,
.form-control input:hover + label
{
    font-size: 15px;
    transform: translateY(-20px);
    transition-delay: 80ms;
    transition-duration: 500ms;
}

.form-control input:valid{
    border-bottom-color: rgb(76, 161, 47);
}
@media (max-width: 621px) {
    .form {
        margin: 4vw;
        width: 90vw;

    }
    
}
`