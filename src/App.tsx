

import './styles/theme.css';
import './styles/Global.css';
import { Container } from 'lucide-react';
import { Heading } from './componentes/Heading';



export function App(){
     return (
     <> 
     <Container> 
     <Heading>LOGO</Heading>
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

 