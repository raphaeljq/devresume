// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contact</h5>
        <Card>
          <Row>
            <form name="contact"netlify>
              <Input placeholder="yourname@yourcompany.com" type="email" label="Email" s={12} />
              <Input placeholder="Any text message..." label="Message" s={12} />
            <Col s={12} m={12}>
              <Button waves='light' type="submit" className="deep-purple lighten-2">SEND</Button>
            </Col>
            </form>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Contact;
