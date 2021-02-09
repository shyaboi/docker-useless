import React, { useState, useEffect, Suspense } from "react";
import {
  Container,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  NavLink,
  Row,
  Col,
} from "reactstrap";
var derta;

const All = (props) => {
  const [routes, setRoutes] = useState([]);

  const getAll = async () => {
    let response = await fetch(`/u-c/all-JSON`);
    let data = await response.json();
    derta = await data;
    console.log(derta[0].route);
    let roots = [];

    for (let i = 0; i < derta.length; i++) {
      const el = await derta[i];
      roots.push(el);
    }
    console.log(roots);
    setRoutes(roots);
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Suspense fallback={<div>Fetching latest UseLess routes...</div>}>
            {routes.map((routes) => (
              <Card>
                <CardBody>
                  <NavLink href={"/u-c-r" + routes.route}>
                    {" "}
                    <CardTitle tag="h4">
                      UselessAPI.com/u-c-r{routes.route}
                    </CardTitle>
                  </NavLink>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Created By {routes.user}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2 text-muted">
                    The Raw Code:
                  </CardSubtitle>
                  <CardText>{routes.funktion}</CardText>
                  <a href={"/u-c-r" + routes.route}>
                    {" "}
                    <Button color="info">Take Me to {routes.route}</Button>
                  </a>
                </CardBody>
              </Card>
            ))}
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
};

export default All;
