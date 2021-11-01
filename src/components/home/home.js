// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, CardPanel } from 'react-materialize';
import { SocialIcon } from 'react-social-icons';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/company2.png';

var today = new Date();
var year = today.getFullYear();
const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
         <p>     Este sou eu, <strong>Raphael Almeida Chaves</strong>. Sou programador Frontend e Webdesigner especializado em Wordpress.</p>

         <p>Atualmente Desenvolvo websites em <strong>Wordpress</strong> e desempenho atividade <strong>frontend</strong> como desenvolvedor de Web apps em linguagem <strong>javascript</strong> em frameworks como <strong>React.js</strong>, ambiente <strong>Node.js</strong> . Desenvolvo também em Frameworks Css como <strong>Materialize</strong>, <strong>Bootstrap</strong>, <strong>Semantic Ui</strong> , além de desenvolver Web apps que se comportam como <strong>PWAs (Progressive Web Apps)</strong> </p>

             <p>Saindo um pouco da parte técnica, eu sonho em trabalhar de forma remota, estando no lugar que eu precisar estar. Acredito que o futuro do trabalho é não precisar de uma localização fixa para exercê-lo. Então, o limite entre estar no lugar de trabalho e estar no lugar de descanso é bem tênue para mim. Quero hoje estar trabalhando em um cowork na avenida paulista, mas amanhã, posso estar em Dubai esperando uma conexão para o Japão. Tudo isso graças as maravilhas da internet e suas tecnologias. Ferramentas nós temos muitas, então, que coloquemos elas à nosso favor.</p>
             <p>Tenho um interesse muito grande também em ajudar as pessoas que mais necessitam. Levando conhecimento e libertando mentes para chegarem longe e se possível até onde eu jamais chegaria.</p>


          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
   

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Estagiário"
                    company="Central Web"
                    periodo="2002"
                    description="Desempenhei rotinas pertinentes à um iniciante no desenvolvimento de websites, como manutenção de websites já desenvolvidos,
                    efetuando a manutenção de conteudo e acrescentando qualquer conteúdo adicional solicitado pelos clientes"
                    avatar={company_avatar}
        />
        
        <Experience title="Operador de VT"
                    company="TV Amazônia"
                    periodo="2003/2005"
                    description="Desempenhei tarefas de operação de mesa de master neste canal de tv. Inserindo e gerênciando o que era exibido em sua grade de programação nos horários em que eu assim estava como plantonista"
                    avatar={company_avatar}
        />
        <Experience title="Programador Frontend Jr"
                    company="Informanager Brasil"
                    periodo="2009/2010"
                    description="Desempenhei a função de programador de interfaces no sistema de ECM Infodoc como Programador Jr"
                    avatar={company_avatar}                    
        />
        <Experience title="Programador Joomla"
                    company="Animation 3d Studio"
                    periodo="2011/2012"
                    description="Desempenhei a função de programador de websites em joomla. Tirando das UI desenhadas para o código php/html, além de organizar as informações, cuidar da usabilidade e testar cada funcionalidade dos sites desenvolvidos para esta empresa" 
                    avatar={company_avatar}
        />
        <Experience title="Programador Java jr"
                    company="Indra Brasil"
                    periodo="2012/2014"
                    description="Desempenhei a função de programador Java até certo período na INDRA BRASIL, in loco na SECRETARIA DA FAZENDA em Macapá/AP. Desempenhei também tarefas de testador de software."            
                    avatar={company_avatar}
        />
        <Experience title="Help desk"
                    company='ESIG Software'
                    periodo="2015/2017"
                    description="Trabalhei na função de HELP DESK, fazendo suporte em sistemas, no sistema E-SIG."
                    avatar={company_avatar}

        />
        <h5 className="subtitle">Skills</h5>
        <Row>
            <Col m={12} s={12}>
              <CardPanel className="row">
                
                 <span className="white-text orange darken-2 medal col">HTML5</span>
                 <span className="white-text indigo accent-2 medal col">CSS3</span>
                 <span className="yellow accent-2 medal col">javascript</span>
                 <span className="white-text deep-purple lighten-2 medal col">Bootstrap</span>
                 <span className="white-text pink lighten-3 medal col">Materialize</span> 
                 <span className="white-text blue lighten-2 medal col">Reactjs</span>
                 <span className="light-green accent-4 medal col ">Nodejs</span>
                 <span className="white-text green accent-4 medal col">Mongodb</span>
                 <span className="white-text indigo lighten-3 medal col">PHP</span>
                 <span className="white-text yellow darken-2 medal col">MySql</span>
                 <span className="white-text light-blue medal col">Wordpress</span>

                
              </CardPanel>
            </Col>
        </Row>
        <h5 className="subtitle">Social Network</h5>
        <Row>
            <Col m={12} s={12}>
              <CardPanel className="indigo lighten-4 row">
                
              <SocialIcon url="http://twitter.com/raphaeljq" />
              <SocialIcon url="http://instagram.com/raphaeljq" />
              <SocialIcon url="http://www.linkedin.com/in/raphaeljq/" />
              <SocialIcon url="http://www.github.com/raphaeljq" />

                
              </CardPanel>
            </Col>
        </Row>
           
    </Col>

  </Row>
);

export default Home;
