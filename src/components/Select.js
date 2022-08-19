import React, { useState } from 'react';
import { render } from 'react-dom';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import FlagIcon from './FlagIcon.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Selected=()=> {
  const [countries] = useState([
    { code: 'fr', title: 'FR'},
    { code: 'gb', title: 'EN'},
    { code: 'no', title: 'NO'}
  ]);
  const [toggleContents, setToggleContents] = useState('Select Country');
  const [selectedCountry, setSelectedCountry] = useState();

  return (
    <div className="App">
      <Form>
        <Dropdown  
          onSelect={eventKey => {
            const { code, title } = countries.find(({ code }) => eventKey === code);
          
            setSelectedCountry(eventKey);
            setToggleContents(<><FlagIcon code={code}/> {title}</>);
          }}
        >
          <Dropdown.Toggle  variant="secondary" id="dropdown-flags" className="text-left" style={{ width: '150px',
            backgroundColor:'white',color:'gray'}}>
            {toggleContents}
          </Dropdown.Toggle>

          <Dropdown.Menu style={{marginLeft: '-5px'}} >
            {countries.map(({ code, title }) => (
              <Dropdown.Item  key={code} eventKey={code}><FlagIcon code={code} className='flag_code'/> {title}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </div>
  );
}


export default Selected;