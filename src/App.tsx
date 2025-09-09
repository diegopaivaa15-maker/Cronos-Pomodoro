

import './styles/theme.css';
import './styles/Global.css';

import { Heading } from './componentes/Heading';
import  { Container } from './componentes/Container';
import { Logo } from './componentes/Logo';



export function App(){
     return (
     <> 
     <Container> 
     <Logo/>
    </Container>

     <Container> 
     <Heading>MENU</Heading>
    </Container>

     <Container> 
     <Heading>FORMULARIO</Heading>
    </Container>

     <Container> 
     <Heading>footer</Heading>
    </Container>
     </>
     );
}

 