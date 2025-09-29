import './styles/Theme.css'
import './styles/Global.css'



import { Container } from './componentes/Container';
import { Logo } from './componentes/Logo';
import { Menu } from './componentes/Menu';
import { CountDown } from './componentes/CountDown';


export function App(){
    return ( 
    <>
            <Container>
            <Logo/>
            </Container>
            
                <Container>
                    <Menu/>
                    </Container>

                        <Container>
                            <CountDown/>
                         </Container>

   
   </>
    );
}

