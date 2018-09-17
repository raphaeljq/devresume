// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Button } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const Success = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contact</h5>
        <Card>
          <h5> Dados submetidos com sucesso </h5>
          <Button waves='light' node='a' className="deep-purple lighten-2" href='/contact'>  {'<Voltar para a tela formulário'}  </Button>
        </Card>
    </Col>
  </Row>
);

export default Success;