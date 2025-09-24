import './styles/Theme.css'
import './styles/Global.css'



import { Container } from './componentes/Container';
import { Logo } from './componentes/Logo';
import { Menu } from './componentes/Menu';


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
                            <section>FORM</section>
                         </Container>

                            <Container>
                              <section>LOGO</section>
                            </Container>

        

        

   
   </>
    );
}

