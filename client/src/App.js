import React, { useState } from 'react';

import Container from './components/Container';
import Header from './components/Header';
import FormSection from './components/FormSection';
import Row from './components/Row';
import ContactInfo from './components/ContactInfo';
import ShippingAddress from './components/ShippingAddress';
import BillingAddress from './components/BillingAddress';
import CheckBoxes from './components/CheckBoxes';
import OrderSection from './components/OrderSection';

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
