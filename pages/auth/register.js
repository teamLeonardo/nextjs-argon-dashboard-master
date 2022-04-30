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

function Register() {
  return (
    <Container classNameName="bg-fondo">
      <Row className="align-items-center">
        <Col className="p-5 rounded-start d-none d-lg-block">
          <div className="text-start">
            <h1 className="fs-2 text-center p-5 text-light">Para poder registrarte necesitas saber lo siguiente:
            </h1>
          </div>
          <div className="subtext text-light">
            <div className="conte-subtext">
              <span className="fs-1">1</span>
              <span>
                El Club de Ciencia y Tecnología tiene un nombre que lo identifica, deberá
                estar relacionada
                con temas cientificos y/o con nombres de científicos que hayan aportado el desarrollo del
                conocimiento. <br /><b>Ejemplo: Albert Einsten</b>
              </span>
              <br />
              <span className="fs-1">2</span>
              <span>
                El Club de Ciencia y Tecnología tiene un nombre que lo identifica, deberá
                Que los correos registrados solo son válidos en GMAIL
                <br />
                <b>Ejemplo: ccytalberteinsten@gmail.com</b>
              </span>
            </div>
          </div>
        </Col>
        <Col className="p-5 rounded-3 bg-light m-5">
          <div className="text-start">
            <img src="./IMAGENES/Logo SIGECCYT 4.png" width="30%" alt="" />
            <img src="./IMAGENES/club.png" width="15%" alt="" />
          </div>
          <div className="text-start">
            <img src="./IMAGENES/concytec.png" width="15%" alt="" />
          </div>
          <div className="text-end">
            <img src="./IMAGENES/IMG4.png" width="15%" alt="" />
          </div>
          <h2 className="fw-bold text-start py-5">Registro como CCYT</h2>
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

          <div className="mb-4 form-check" >
            <input type="checkbox" name="connecd" className="form-check-input" />
            <label for="connected" className="form-check-label">
              <a href="#">
                Aceptar los terminos y
                Condiciones</a>
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn-primary">Registrarse</button>
          </div>
          <div className="my-3 text-center">
            <span>
              ¿Ya tienes una cuenta?<a href="#">Iniciar Sesión</a>
            </span>
            <br />
          </div>
        </Col>
      </Row >
    </Container >
  );
}

Register.layout = AuthCustom;

export default Register;
