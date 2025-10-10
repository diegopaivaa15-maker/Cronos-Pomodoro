import './styles/Theme.css'
import './styles/Global.css'
import { Container } from '../componentes/Container';
import { Logo } from '../componentes/Logo';
import { Menu } from '../componentes/Menu';
import { CountDown } from '../componentes/CountDown';
import { MainForm } from '../componentes/mainForm';
import { Footer } from '../componentes/Footer';

type MainTempletsProps={
    children: React.ReactNode;
};

export function MainTemplets({children}: MainTempletsProps){
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

                            <Container>
                           <MainForm/>
                         </Container>

                         {children}

                         <Container>
                          <Footer/>
                         </Container>
                         
   </>
 );
}

