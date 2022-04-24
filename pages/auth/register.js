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
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";
import AuthCustom from "layouts/AuthCustom";

function Register() {
  return (
    <>
      <div className="text-registro">
        <span>Para poder registrarte necesitas saber lo siguiente:</span>
        <div className="box-registro">
          <span>1</span><p>El Club de Ciencia y Tecnología tiene un nombre que lo identifica, deberá estar relacionada con temas cientificos y/o con nombres de científicos que hayan aportado el desarrollo del conocimiento. <br></br><b>Ejemplo: Albert Einsten</b></p>
        </div>
        <div className="box-registro">
          <span>2</span><p>Que los correos registrados solo son válidos en GMAIL.<br></br>
            <b>Ejemplo: ccytalberteinsten@gmail.com</b></p>
        </div>
      </div>
      <Col lg="4" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
              <small></small>
            </div>
            <div className="btn-wrapper text-center">
              <div className="logo-up">
                <div className="box-img1">
                  <img className="box-img-1"
                    alt="..."
                    src={require("assets/img/icons/common/concytec.png")}
                  />
                </div>
                <div className="box-img2">
                  <img className="box-img-2"
                    alt="..."
                    src={require("assets/img/icons/common/club.png")}
                  />
                </div>
              </div>
              <div className="box-img3">
                <img className="box-img-3"
                  alt="..."
                  src={require("assets/img/icons/common/SIGECCYT.png")}
                />
              </div>
              <div className="logo-righ">
                <div className="box-img5">
                  <img className="box-img-4"
                    alt="..."
                    src={require("assets/img/icons/home/IMG1.png")}
                  />
                  <span>CCYT</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Registro como CCYT</small>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Nombre del CCYT" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Correo del CCYT"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Contraseña"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              {/* <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div> */}
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        Aceptar{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Términos y Condiciones
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button">
                  Crear cuenta
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Register.layout = AuthCustom;

export default Register;
