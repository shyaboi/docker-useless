import React, { useState, useEffect } from "react";
import { Container, Row, Col, Label } from "reactstrap";
import CodeBlock from "@tenon-io/tenon-codeblock";
import RoutePic from "../../assets/images/route.png";
import RoutePicR from "../../assets/images/routeR.png";

const HTML = (props) => {
  return (
    <Container fluid >
      <Row>
        <Col className="doc-headers">
          <Label>
            <h1>Sending HTML</h1>
          </Label>
          <p>
            You can also send HTML via the 'response.send("ITEM")' method.
          </p>
          <p>
              If you do, the normal '.render()' will not function normally. I reccomend you write your code similar to the example below.<CodeBlock
          codeString={`response.send('<YourHTMLHere></YourHTMLHere>');`} />
          </p>
          <p>If the syntax is correct, this will render a fully functional HTML page with most HTML5 features such as canvas functional.</p>
          <p>
              You can even include embeded/inline CSS and JavaScript in your HTML code, and it will render at the route correctly.
          </p>
          <hr></hr>
          
        </Col>
      </Row>
    </Container>
  );
};

export default HTML;