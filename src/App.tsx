import './styles/Theme.css'
import './styles/Global.css'



import { Container } from './componentes/Container';
import { Logo } from './componentes/Logo';
import { Menu } from './componentes/Menu';
import { CountDown } from './componentes/CountDown';
import { DefaultInput } from './componentes/DefaultInput';
import { Cycles } from './componentes/Cycles/indext';
import { DefaultButton } from './componentes/DefaultButton';
import { PlayCircle } from 'lucide-react';
import { Footer } from './componentes/Footer';


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

                            <Container>
                            <form className='form' action=''>
                                <div className='formRow'>
                                   <DefaultInput labelText='task' id="meuInpout" type='text' placeholder='Digite algo'/>
                                </div>

                                <div className='formRow'>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>

                                <div className='formRow'>
                                  <Cycles/>
                                </div>

                                <div className='formRow'>
                                  <DefaultButton icon={< PlayCircle/> } color='red' />
                                </div>
                            </form>
                         </Container>

                         <Container>
                          <Footer/>
                         </Container>
                         
   </>
 );
}

