import React, { useState, useEffect, Suspense } from "react";
import {
    Container,
  Row,
  Col,
} from "reactstrap";
import HomeR from '../../assets/images/homer.png'
import HomeRE from '../../assets/images/homere.png'

const GettingStarted = (props) => {


  return (
    <Container fluid>
<Row>
    <Col className='doc-headers'>
    <h1>
        Getting Started with UseLessAPI.com
    </h1>
    <p>
        To get started with UselessAPI, the first thing you can do is make a new route/API.
    </p>
    <Suspense fallback={<div>Loading...</div>}>
    <Row xs={1} md={2} id="pics">

    <img src={HomeR} 
    />
    </Row>
    </Suspense>
    <hr>
    </hr>
    <p>
        To do this, click on the Editor tab on the navigation bar on the top left similar to the example below.
    </p>
    <Row xs={1} md={2} id="pics">

    <img src={HomeRE} 
    />
    </Row>
    <hr>
    </hr>
    <p>
        This will take you to the UseLess code editor (made with <a href='https://github.com/securingsincity/react-ace#readme'> React-Ace Editor</a> )
    </p>
   
    </Col>
</Row>
    </Container>
  );
};

export default GettingStarted;