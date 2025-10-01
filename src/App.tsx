import './styles/Theme.css'
import './styles/Global.css'



import { Container } from './componentes/Container';
import { Logo } from './componentes/Logo';
import { Menu } from './componentes/Menu';
import { CountDown } from './componentes/CountDown';
import { DefaultInput } from './componentes/DefaultInput';


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
                                    <p>Ciclos</p>
                                    <p>0 0 0 0</p>
                                </div>

                                <div className='formRow'>
                                   <button>Enviar</button>
                                </div>
                            </form>
                         </Container>
   </>
    );
}

