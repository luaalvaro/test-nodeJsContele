import React, { useState, useEffect } from 'react';
import './styles.css'

import Container from './components/Container.js';
import Header from './components/Header.js';
import FormSection from './components/FormSection.js';
import Row from './components/Row.js';
import ContactInfo from './components/ContactInfo.js';
import ShippingAddress from './components/ShippingAddress.js';
import BillingAddress from './components/BillingAddress.js';
import CheckBoxes from './components/CheckBoxes.js';
import OrderSection from './components/OrderSection.js';
import ConfirmDetails from './components/ConfirmDetails'

import validateInfo from './validateInfo';

function App() {
  const [contactInformation, setContactInformation] = useState({ firstName: '', lastName: '', email: '', phone: '', language: '', country: ''})
  const [shippingAddress, setShippingAddress] = useState({address: '', address2: '', city: '', state: '', zip: ''})
  const [billingAddress, setBillingAddress] = useState({address: '', address2: '', city: '', state: '', zip: '', sameAddress: false})
  const [additionals, setAdditionals] = useState({vehicleEquipedWithFuelOff: false, bikeTruckOrMachinery: false, identifyFleet: false, manyTrackers: ''})

  const [errorsValidation, setErrosValidation] = useState({})
  const [confirmInformation, setConfirmInformation] = useState('')
  let errors = {};

  useEffect(() => {
    errors = validateInfo(contactInformation, shippingAddress, billingAddress, additionals)
  })

  const handleOrder = () => {
    errors = validateInfo(contactInformation, shippingAddress, billingAddress, additionals)
    setErrosValidation(errors)
    
    if (Object.keys(errors).length === 0) {
      setConfirmInformation('confirm')
    }

  }
    return (
      <Container>
        <Header />
          <FormSection>
            <Row>
              <ContactInfo errorsValidation={errorsValidation} data={contactInformation} setData={setContactInformation} />
              <ShippingAddress errorsValidation={errorsValidation} data={shippingAddress} setData={setShippingAddress} />
            </Row>
    
            <Row>
              <BillingAddress errorsValidation={errorsValidation} data={billingAddress} setData={setBillingAddress} />
              <CheckBoxes errorsValidation={errorsValidation} data={additionals} setData={setAdditionals} />
            </Row>
          </FormSection> 
        <OrderSection onClick={handleOrder} />
      </Container>
    );
}

export default App;