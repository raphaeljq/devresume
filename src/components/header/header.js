// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, NavItem, Row, Icon} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'

import company_avatar2 from '../../images/company2.png';


const Header = () => (
  <Row>  
    <Navbar className="deep-purple lighten-2">
      
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="contact">Contact</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;