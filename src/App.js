// import CssFile from   './App.css';
import React from "react";
import citiesData from "./data.json";
import { Typeahead } from "react-bootstrap-typeahead";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [singleSelections, setSingleSelections] = useState([]);
  const [multiSelections, setMultiSelections] = useState([]);

  return (

    
    <div className = "container bg "> 
  <h2 className= "blank"> hey lets build an amazing react-App</h2>

    <div class="shadow-lg p-5  bg-body rounded mt-5">
  
    <Form.Group>
        <Form.Label>Choose State</Form.Label>
        <form autoComplete="off">
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={setSingleSelections}
          options={citiesData.states}
          placeholder="Choose a state..."
          selected={singleSelections}/>
          </form>
      </Form.Group>
      <Form.Group>
        <Form.Label>Choose State</Form.Label>
        <form autoComplete="off">
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={setSingleSelections}
          options={citiesData.cities}
          placeholder="Choose a state..."
          selected={singleSelections} />
           </form>
      </Form.Group>

      <Form.Group style={{ marginTop: '20px' }}>
        <Form.Label>Choose City</Form.Label>
        <form autoComplete="off">
        <Typeahead
          id="basic-typeahead-multiple"
          labelKey="name"
          multiple
          onChange={setMultiSelections}
          options={citiesData.localities}
          placeholder="Choose several states..."
          selected={multiSelections}/>
          </form>
      </Form.Group>
    
    
    </div>

  </div>
)

}

export default App;
