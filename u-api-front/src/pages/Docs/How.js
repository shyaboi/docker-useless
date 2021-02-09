import React, { useState, useEffect } from "react";
import {
    Container,
  Row,
  Col,
} from "reactstrap";
import CodeBlock from "@tenon-io/tenon-codeblock";


const HelloWorld = (props) => {


  return (
    <Container fluid >
        <Row>
            <Col className='doc-headers'>
        <h1>
            Hello World
        </h1>
        <p>
            To send a simple string of 'Hello World' over your chose route.
            So first follow the instructions for <a href='/docs/routing'>choosing a route</a>
        </p>
        <CodeBlock
          codeString={`response.send('Hello World');`} />
        </Col>
        </Row>
    </Container>
  );
};

export default HelloWorld;