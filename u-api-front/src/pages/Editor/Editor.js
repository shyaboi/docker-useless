import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  toggle,
} from "reactstrap";
import { render } from "react-dom";
import AceEditor from "react-ace";
import Togs from "../../components/ToggleSwitch/Toggle";
import "ace-builds/src-noconflict/mode-javascript";
// ace theme imports
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
var finalFunction;
function onChange(newValue) {
  finalFunction = newValue;
}
// var Mona = require('../src/Monaco-Editor/Monaco')

function Editor() {
  //Dropdown Open states--------------------------------------------------------------------------------------------
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownThemeOpen, setDropdownThemeOpen] = useState(false);
  const [dropdownFontOpen, setDropdownFontOpen] = useState(false);
  const [dropdownWrapOpen, setDropdownWrapOpen] = useState(false);
  //END Dropdown Open states--------------------------------------------------------------------------------------------
  
  //Dropdown Selector states--------------------------------------------------------------------------------------------
  const [themeState, setthemeState] = useState('');
  const [ThemeText, setthemeText] = useState('');
  const [fontSize, setfontSize] = useState('');
  const [wrapState, setWrapState] = useState(true);
  const [wrapStateText, setWrapStateText] = useState('');
  //END Dropdown Selector states--------------------------------------------------------------------------------------------
  

  //toggle states--------------------------------------------------------------------------------------------

  // const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleTheme = () => setDropdownThemeOpen((prevState) => !prevState);
  const toggleFontSize = () => setDropdownFontOpen((prevState) => !prevState);
  const toggleWrap = () => setDropdownWrapOpen((prevState) => !prevState);
  // const toggleBasicAuto = () => setDropdownOpen((prevState) => !prevState);
  // const toggleHeight = () => setDropdownOpen((prevState) => !prevState);
  // const toggleLiveAuto = () => setDropdownOpen((prevState) => !prevState);
  // const toggleSnippets = () => setDropdownOpen((prevState) => !prevState);
  //END toggle states--------------------------------------------------------------------------------------------

//Post states--------------------------------------------------------------------------------------------

  const [isLoading, setIsLoading] = useState(false);
  let [route, setRoute] = useState("");
  let [funk, setFunk] = useState("");
//END Post states--------------------------------------------------------------------------------------------


useEffect(() => {
  if (localStorage.getItem('currentTheme')) {
   let theme =  localStorage.getItem('currentTheme');
   let themeText =  localStorage.getItem('currentThemeText');
   let fontSizez =  localStorage.getItem('FontSize');
   let wrap =  localStorage.getItem('Wrap');
   if (wrap == 'Enabled') {
     setWrapState(true)
    setWrapStateText('Enabled')
   }else{setWrapState(false);setWrapStateText(wrap)}
   // console.log( localStorage.getItem('currentTheme'),localStorage.getItem('currentThemeText'))
   setthemeState(theme)
   setthemeText(themeText)
   setfontSize(fontSizez)
  }else{
    setthemeState('terminal')
    setthemeText('Termial')
    setfontSize(44)
    setWrapState(true)
    setWrapStateText('Enabled')
  }
},[]);


  const onSubmit = async (event) => {
    // prevent redirect
    event.preventDefault();
    console.log(finalFunction);

    setFunk(finalFunction);
    setIsLoading(true);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/u-c/new", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        route: route,
        funktion: finalFunction,
      })
    );
    // do something asynchronous that takes time, this function is just an example
    // reset form and loading state
    setIsLoading(false);
    alert(`Redirecting you to https://uselessapi/u-c-r/${route}`);
    window.location.replace(`https://uselessapi.com/u-c-r/${route}`);
    // alert(`your new route can be see at https://uselessapi/u-c-r${route}`);
  };


  const changeThemeValue = (e) => {
    let currentTheme = e.currentTarget.value
    let currentThemeText = e.currentTarget.textContent
    setthemeState(currentTheme)
    setthemeText(currentThemeText)
    localStorage.setItem('currentTheme', currentTheme);
    localStorage.setItem('currentThemeText', currentThemeText);
  }
  const changeFontValue = (e) => {
    let fontSizez = e.currentTarget.value
    setfontSize(fontSizez)
    localStorage.setItem('FontSize', fontSizez);
  }
  const changeWrapValue = (e) => {
    let wrap = e.currentTarget.value
    if (wrap == 1){ 
      setWrapState(true)
      setWrapStateText('Enabled')
      localStorage.setItem('Wrap', 'Enabled');
    }
    else { 
      setWrapState(false)
      setWrapStateText('Disabled')
      localStorage.setItem('Wrap', 'Disabled');

    }
  }


  return (
    <Container className="App">
      <Row>
        <Col id="editor-head">
          <Label for="exampleText">
            <h1>Make your UseLess thing</h1>
          </Label>
        </Col>
      </Row>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">
                Route will be hosted at https://uselessapi/u-c-r/{route}
                {/* Example:(https://uselessapi.com/api/u-c-r/my-test) */}
              </Label>
              <Input
                type="route"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
                name="route"
                id="route"
                placeholder="my-rad-api"
              />
            </FormGroup>
          </Col>
          {/* <Col>
            <FormGroup>
              <Label for="exampleSelect">Select(not used yet)</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col> */}
        </Row>
        <Row fluid id="drop-row">
          <Dropdown isOpen={dropdownThemeOpen} toggle={toggleTheme} >
            <DropdownToggle caret color='info'>{ThemeText}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Pick Your Editor Theme</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='kuroir'>Kuroir</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='github'>GitHub</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='terminal'>Terminal</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='tomorrow'>Tomorrow</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='twilight'>Twilight</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='xcode'>Xcode</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='textmate'>textmate</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='solarized_dark'>Solarized Dark</DropdownItem>
              <DropdownItem onClick={changeThemeValue} value='solarized_light'>Solarized Light</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={dropdownFontOpen} toggle={toggleFontSize}>
            <DropdownToggle caret color='info'>{fontSize}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Size in px</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={5}>5</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={10}>10</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={15}>15</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={20}>20</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={25}>25</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={30}>30</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={35}>35</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={40}>40</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={45}>45</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={50}>50</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={55}>55</DropdownItem>
              <DropdownItem onClick={changeFontValue} value={88}>88</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={dropdownWrapOpen} toggle={toggleWrap}>
            <DropdownToggle caret color='info'>Wrap {wrapStateText}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Set text wrap of the editor</DropdownItem>
              <DropdownItem onClick={changeWrapValue} value={1}>Enabled</DropdownItem>
              <DropdownItem onClick={changeWrapValue} value={2}>Disabled</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Row>
        <Row>
          <Col>
            <AceEditor
              height="60vh"
              width="60vw"
              mode="javascript"
              theme={themeState}
              fontSize={parseInt(fontSize)}
              wrapEnabled={wrapState}
              editorProps={{ $blockScrolling: true }}
              value={funk}
              onChange={onChange}
              id="funktion"
              placeholder="response.send('hiworld')"
              type="textarea"
              name="funktion"
              showGutter="true"
            />
          </Col>
        </Row>
        <hr></hr>
        <Row id="submitRow">
          <Col>
            <Button type="submit" color="info">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Editor;
