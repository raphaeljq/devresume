// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../images/avatar.png';

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Raphael Chaves</h5>
        <p className="deep-purple lighten-2 white-text ">Desenvolvedor Full-Stack Pleno</p>
        <p>Macapá/ap, Brasil</p>
        <p><strong>Contratação disponível:</strong></p>
        <span className="pink lighten-3 medal white-text">Emprego</span> <span className="pink lighten-3 medal white-text">Freelance</span>
      </Row>
  </Card>
);

export default UserProfile;