import React from "react";
import "assets/css/registro.css"

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container
} from "reactstrap";
import AuthCustom from "layouts/AuthCustom";
// layout for this page
import styled from "styled-components"
import { ContainerImg } from "components/ConteinerImg";


const StyledForm = styled(Form)`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
  height: 100%;

  @media (min-width: 992px) {
    position: relative;
    width: 700px !important;
    min-height: 700px;
    max-width: 700px;
    border-radius: 53px;
    height: 95%;
  }
  #text-color{
    font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 50px;
/* or 278% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2px;

color: #9730F0;
  }    
`;



function Register() {
  return (
    <Container fluid className="vh-100 row align-items-center ">
      <Col className="px-5 rounded-start d-none d-lg-block text-white">
        <div className="text-start d-flex justify-content-center">
          <h1 className="fs-3 text-center px-4 text-light display-3 w-75">
            Para poder registrarte necesitas saber lo siguiente:
          </h1>
        </div>
        <div className="subtext d-flex justify-content-center">
          <div className="conte-subtext d-flex flex-column w-75">
            <div className="subtext-1 d-flex">
              <span className="fs-1 display-1 pr-3">1</span>
              <span>
                El Club de Ciencia y Tecnología tiene un nombre que lo identifica, deberá
                estar relacionada
                con temas cientificos y/o con nombres de científicos que hayan aportado el desarrollo del
                conocimiento. <br /><b>Ejemplo: Albert Einsten</b>
              </span>
            </div>
            <br />
            <div className="subtext-1 d-flex">
              <span className="fs-1 display-1 pr-3">2</span>
              <span>
                El Club de Ciencia y Tecnología tiene un nombre que lo identifica, deberá
                Que los correos registrados solo son válidos en GMAIL
                <br />
                <b>Ejemplo: ccytalberteinsten@gmail.com</b>
              </span>
            </div>
          </div>
        </div>
      </Col>
      <StyledForm className="col p-sm-2 p-md-5 bg-white" >
        {/* <!-------------------------IMAGENES FORMULARIO------------------> */}
        <div class="d-none d-md-flex justify-content-between">
          {/* <!-------------------------LOGOS SPONSOR------------------> */}
          <div class="logos d-flex flex-column my-5 col-xs-12">
            <div class="logos2 text-center float-start my-1">
              <img src={require("assets/img/icons/common/concytec.png")} class=" img-fluid m-2" />
              <img src={require("assets/img/icons/common/club.png")} class=" img-fluid" alt="" />
            </div>
            <img src={require("assets/img/icons/common/SIGECCYT.png")} class="img-fluid m-2" alt="" />
          </div>
          {/* <!-------------------------LOGO CCYT------------------> */}
          <div class="img d-flex flex-column justify-content-center float-end my-5 p-2 col-sx-12">
            <img src={require("assets/img/icons/home/IMG1.png")} class=" img-fluid d-block mx-auto" width="100px" alt="" />
            <span class=" d-block text-center" id="text-color">CCYT</span>
          </div>
        </div>
        <h2 className="fw-bold text-start py-2">Registro como CCYT</h2>
        <div action="#">
          <div className="mb-4">
            <input type="name" className="form-control" name="password" placeholder="Nombre del CCYT" />
          </div>
          <div className="mb-4">
            <input type="email" className="form-control" name="email" placeholder="Correo electrónico" />
          </div>
          <div className="mb-4" />
          <input type="password" className="form-control" name="password" placeholder="Contraseña" />
        </div>
        <br></br>
        <div className="mb-4 form-check" >
          <input type="checkbox" name="connecd" className="form-check-input" />
          <label for="connected" className="form-check-label">
            <a href="#">
              Aceptar los terminos y
              Condiciones</a>
          </label>
        </div>

        <div className="d-grid">

          <Button color="primary" block outline={false}>
            Registrarse
          </Button>
        </div>
        <div className="my-3 text-center">
          <span>
            ¿Ya tienes una cuenta?<a href="#">Iniciar Sesión</a>
          </span>
          <br />
        </div>
      </StyledForm>
    </Container >
  );
}

Register.layout = AuthCustom;

export default Register;
