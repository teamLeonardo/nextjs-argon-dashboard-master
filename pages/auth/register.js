import React from "react";

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
} from "reactstrap";
// layout for this page

function Register() {
  return (
    <>
      <div class="container bg-fondo">
        <div class="row align-items-center">
          <div class="col p-5 rounded-start d-none d-lg-block">
            <div class="text-start">
              <h1 class="fs-2 text-center p-5 text-light">Para poder registrarte necesitas saber lo siguiente:
              </h1>
            </div>
            <div class="subtext text-light">
              <div class="conte-subtext">
                <span class="fs-1">1</span>
                <span>
                  El Club de Ciencia y Tecnología tiene un nombre que lo identifica, deberá
                  estar relacionada
                  con temas cientificos y/o con nombres de científicos que hayan aportado el desarrollo del
                  conocimiento. <br /><b>Ejemplo: Albert Einsten</b>
                </span>
                <br />
                <span class="fs-1">2</span>
                <span>
                  El Club de Ciencia y Tecnología tiene un nombre que lo identifica, deberá
                  Que los correos registrados solo son válidos en GMAIL
                  <br />
                  <b>Ejemplo: ccytalberteinsten@gmail.com</b>
                </span>
              </div>
            </div>
          </div>
          <div class="col p-5 rounded-3 bg-light m-5">
            <div class="text-start">
              <img src="./IMAGENES/Logo SIGECCYT 4.png" width="30%" alt="" />
              <img src="./IMAGENES/club.png" width="15%" alt="" />
            </div>
            <div class="text-start">
              <img src="./IMAGENES/concytec.png" width="15%" alt="" />
            </div>
            <div class="text-end">
              <img src="./IMAGENES/IMG4.png" width="15%" alt="" />
            </div>
            <h2 class="fw-bold text-start py-5">Registro como CCYT</h2>
            <div action="#">
              <div class="mb-4">
                <input type="name" class="form-control" name="password" placeholder="Nombre del CCYT" />
              </div>
              <div class="mb-4">
                <input type="email" class="form-control" name="email" placeholder="Correo electrónico" />
              </div>
              <div class="mb-4" />
              <input type="password" class="form-control" name="password" placeholder="Contraseña" />
            </div>

            <div class="mb-4 form-check" >
              <input type="checkbox" name="connecd" class="form-check-input" />
              <label for="connected" class="form-check-label">
                <a href="#">
                  Aceptar los terminos y
                  Condiciones</a>
              </label>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn-primary">Registrarse</button>
            </div>
            <div class="my-3 text-center">
              <span>
                ¿Ya tienes una cuenta?<a href="#">Iniciar Sesión</a>
              </span>
              <br />
            </div>
          </div>
        </div >
      </div >
    </>
  );
}

export default Register;
