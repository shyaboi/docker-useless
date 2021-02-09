import React, { useState, useEffect } from "react";
import { Container, Row, Col, Label } from "reactstrap";
import CodeBlock from "@tenon-io/tenon-codeblock";
import Edit from '../../assets/images/editor.png'
import EditDrop from '../../assets/images/editorDrop.png'
import Drop from '../../assets/images/drop.png'
import Syn from '../../assets/images/syn.png'

const Editor = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col className="doc-headers">
          <Label>
            <h1>Editor</h1>
          </Label>
          <p>
              This is the editor page. Here you can create your new route/API and edit your exisiting routes.
          </p>
          <p>
              This editor was built with the help of <a href='https://github.com/securingsincity/react-ace#readme'> React-Ace Editor</a>
          </p>
    <Row xs={1} md={2} id="pics">

          <img src={Edit} />
          </Row>
          <hr>
          </hr>
          <p>
            You can customize the editor to your likeing on the top dropdowns such
            as the example below.
          </p>
    <Row xs={1} md={2} id="pics">

          <img src={EditDrop}/>
          </Row>
<hr>
</hr>
          <p>
            Currently the 3 options to be changed dynamically on the editor are the 'theme', 'font size', and wrap enabled/disabled.
          </p>
    <Row xs={1} md={2} id="pics">

          <img src={Drop}/>
          </Row>
<hr>
</hr>
<p>
    The editor currently can highlight syntax for JavaScript, and can change a varity of configuation options in the <a href='https://github.com/securingsincity/react-ace#readme'> React-Ace Editor</a>
</p>
<Row xs={1} md={2} id="pics">

<img src={Syn} width="600vw" />
</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Editor;
