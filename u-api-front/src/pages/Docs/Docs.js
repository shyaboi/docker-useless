import React, { useState, useEffect } from "react";
import {
  Container,
  NavLink,
  ListGroup,
  ListGroupItem,
  Badge,
  Row,
  Col,
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GettingStarted from "../../pages/Docs/GettingStarted";
import HelloWorld from "../../pages/Docs/HelloWorld";
import Routing from "../../pages/Docs/Routing";
import DocsEditor from "../../pages/Docs/DocsEditor";
import HTML from "../../pages/Docs/HTML";

const Docs = (props) => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={15} md={2}>
            <ListGroup>
              <ListGroupItem className="justify-content-between">
                <NavLink href="/docs/">Getting Started</NavLink>
              </ListGroupItem>
              <ListGroupItem className="justify-content-between">
                <NavLink href="/docs/editor">The Code Editor</NavLink>
              </ListGroupItem>
              <ListGroupItem className="justify-content-between">
                <NavLink href="/docs/routing">Routing</NavLink>
              </ListGroupItem>
              <ListGroupItem className="justify-content-between">
                <NavLink href="/docs/hello-world">Hello World</NavLink>
              </ListGroupItem>
              <ListGroupItem className="justify-content-between">
                <NavLink href="/docs/html">Sending HTML</NavLink>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col>
            {/* switch for router to load different parts of docs */}
            <Switch>
              <Route exact path="/docs/">
                <GettingStarted />
              </Route>
              <Route exact path="/docs/routing">
                <Routing />
              </Route>
              <Route exact path="/docs/editor">
                <DocsEditor />
              </Route>
              <Route exact path="/docs/hello-world">
                <HelloWorld />
              </Route>
              <Route exact path="/docs/html">
                <HTML />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default Docs;
