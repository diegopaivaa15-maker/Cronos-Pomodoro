import { Container } from "../componentes/Container";
import { CountDown } from "../componentes/CountDown";

import { MainForm } from "../componentes/mainForm";
import type { TaskStateModel } from "../models/TaskStateModel";
import { MainTemplets } from "../Templets";

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  return (
    <MainTemplets>
      <Container>
        <CountDown {...props}/>
      </Container>

      <Container>
        <MainForm {...props}/>
      </Container>
    </MainTemplets>
  );
 }