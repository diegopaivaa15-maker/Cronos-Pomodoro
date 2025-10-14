import { Container } from "../componentes/Container";
import { Footer } from "../componentes/Footer";
import { Logo } from "../componentes/Logo";
import { Menu } from "../componentes/Menu";

type MainTemplets={
  children: React.ReactNode
};

export function MainTemplets({ children }: MainTemplets){
    return ( 
    <>
            <Container>
            <Logo/>
            </Container>
            
             <Container>
             <Menu/>
             </Container>

              {children}
                
                <Container>
                <Footer/>
                </Container>
                         
   </>
 );
}

