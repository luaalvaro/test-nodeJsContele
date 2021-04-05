import React, { useState } from 'react';
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

function App() {
  const [contactInformation, setContactInformation] = useState({ firstName: '', lastName: '', email: '', phone: '', language: '', country: ''})
  const [shippingAddress, setShippingAddress] = useState({address: '', address2: '', city: '', state: '', zip: ''})
  const [billingAddress, setBillingAddress] = useState({address: '', address2: '', city: '', state: '', zip: '', sameAddress: false})
  const [additionals, setAdditionals] = useState({vehicleEquipedWithFuelOff: false, bikeTruckOrMachinery: false, identifyFleet: false, manyTrackers: 0})

  const handleOrder = () => {
    console.log(contactInformation, shippingAddress, billingAddress, additionals)
  }

  return (
    <Container>
      <Header />

      <FormSection>
        <Row>
          <ContactInfo data={contactInformation} setData={setContactInformation} />
          <ShippingAddress data={shippingAddress} setData={setShippingAddress} />
        </Row>

        <Row>
          <BillingAddress data={billingAddress} setData={setBillingAddress} />
          <CheckBoxes data={additionals} setData={setAdditionals} />
        </Row>
      </FormSection>

      <OrderSection onClick={handleOrder} />
    </Container>
  );
}

export default App;
