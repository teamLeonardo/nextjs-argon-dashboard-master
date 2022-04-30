import React from "react";
import "assets/css/login-home.css"

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

function Login() {
  return (
    <>
      <Col lg="4" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
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
                <div className="box-img4">
                  <img className="box-img-4"
                    alt="..."
                    src={require("assets/img/icons/home/IMG4.png")}
                  />
                  <span>Concytec</span>
                </div>
              </div>
              {/* <Button
                className="btn-icon"
                color=""
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/club.png")}
                  />
                </span>
                {/* <span className="btn-inner--text"></span> */}
              {/* </Button> */}
              {/* <Button
                className="btn-icon"
                color=""
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/concytec.png")}
                  />
                </span>
                {/* <span className="btn-inner--text"></span> */}
              {/* </Button> */}
              {/* <Button
                className="btn-icon"
                color=""
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/SIGECCYT.png")}
                  />
                </span> */}
              {/* <span className="btn-inner--text"></span> */}
              {/* </Button> */}
              {/* <Button
                className="btn-icon"
                color=""
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/home/IMG4.png")}
                  />
                </span>
                <span className="btn-inner--text">Concytec</span> */}
              {/* </Button> */}
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Iniciar sesión</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Usuario CONCYTEC"
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
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Recordar contraseña</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Iniciar sesión
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small> <b>Olvidaste tu contraseña?</b></small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small><b>Create una cuenta</b></small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
}

Login.layout = AuthCustom;

export default Login;
