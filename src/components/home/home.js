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


const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
         <p>     Este sou eu, <strong>Raphael Chaves</strong>. Sou programador de sistemas Web, no momento sou freelancer. Amo programação front-end. Além de adorar programar telas, eu adoro planejá-las, desde seu rascunho no papel, com bastante estudo e cuidado. Criar experiências de acesso à web agradável que consiga auxiliar as pessoas a encontrarem com agilidade o que elas precisam, melhorar a experiência de uso dos sistemas para que todos tenham mais tempo de viver, encontrar logo o que procuram e fazer tudo o que precisam gastando menos tempo.</p>

         <p>     Sou formado em sistemas Web na faculdade <strong>Unimeta de Macapá/Ap.</strong> A primeira faculdade a oferecer esse curso em minha cidade. Por mais que o curso tenha me aberto portas, eu sempre fui autodidata. Aos 17 anos(  hoje, já com 34) eu aprendi meus primeiros passos em programação, no programa de criação de jogos de RPG, “RPG maker”. Criei meu primeiro site, usando apenas o bloco de notas e vagos conhecimentos em <strong>HTML</strong> e no ainda recente css1, utilizando alguns tutoriais da internet, hospedando ele na vila bol. Me sentia muito orgulhoso por poder criar minhas próprias páginas. Já com 18 anos, trabalhei em uma das primeiras agencias web de Macapá, a <strong>“Central Web”</strong>. Como era uma espécie de estágio, eu não fiquei lá por muito tempo e infelizmente, depois de um tempo, seu dono se mudou para belém. Depois disso, passei muito tempo apenas sonhando com esse mundo, criando meus sites em casa, apenas para minha diversão.</p>

         <p>     Um bom site precisa ter uma interface que seja amiga das pessoas. Não procuro colocar nos sites e interfaces que trabalho, apenas aquilo que que você achou bonito por aí ou que é tendência, mas aquilo que o usuário final realmente precisa para poder fazer o que ele deseja. Meu papel aqui no desenvolvimento de sites é também de um consultor, que gostar de ajudar a oferecer ao público alvo, a melhor experiência possível, pois é esse meu objetivo ao oferecer esse serviço: criar sites e interfaces que se liguem às pessoas, levando o valor que você quer entregar e espero que possa ajudar nessa tarefa, pela qual tenho um amor muito grande.</p>
             <p>Sou um conhecedor de <strong>padrões web</strong>, desenvolvedor de websites e sistemas para internet. Conhecedor de hardwares e aplicativos de computadores do tipo PC, sistemas operacionais <strong>Windows</strong> e distribuições mais comuns do Linux. Trabalhei no desenvolvimento de um sistema de ECM, desenvolvendo a interface para o usuário do sistema. Trabalhei no desenvolvimento de websites por meio de plataformas como <strong>wordpress e joomla</strong>. Criando layouts em <strong>HTML5</strong> e <strong>CSS3</strong>.</p>
             <p>Atualmente Desenvolvo websites em <strong>Wordpress</strong> e desempenho atividade <strong>frontend</strong> como desenvolvedor de Web apps em linguagem <strong>javascript</strong> em frameworks como <strong>React.js</strong>, ambiente <strong>Node.js</strong> . Desenvolvo também em Frameworks Css como <strong>Materialize</strong>, <strong>Bootstrap</strong>, <strong>Semantic Ui</strong> , além de desenvolver Web apps que se comportam como <strong>PWAs (Progressive Web Apps)</strong> </p>    
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
                
                 <span className="orange darken-2 medal col">HTML5</span>
                 <span className="indigo accent-2 medal col">CSS3</span>
                 <span className="yellow accent-2 medal col">javascript</span>
                 <span className="deep-purple lighten-2 medal col">Bootstrap</span>
                 <span className="pink lighten-3 medal col">Materialize</span> 
                 <span className="blue lighten-2 medal col">Reactjs</span>
                 <span className="light-green accent-4 medal col ">Nodejs</span>
                 <span className="green accent-4 medal col">Mongodb</span>
                 <span className="indigo lighten-3 medal col">PHP</span>
                 <span className="yellow darken-2 medal col">MySql</span>
                 <span className="light-blue medal col">Wordpress</span>

                
              </CardPanel>
            </Col>
        </Row>
        <h5 className="subtitle">Social Network</h5>
        <Row>
            <Col m={12} s={12}>
              <CardPanel className="indigo lighten-4 row">
                
              <SocialIcon url="http://twitter.com/raphaeljq" />
              <SocialIcon url="http://facebook.com/raphaeljq" />
              <SocialIcon url="http://instagram.com/raphaeljq" />
              <SocialIcon url="http://www.linkedin.com/in/raphaeljq/" />

                
              </CardPanel>
            </Col>
        </Row>
           
    </Col>

  </Row>
);

export default Home;