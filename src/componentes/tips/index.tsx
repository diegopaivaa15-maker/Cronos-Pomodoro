import { useTaskContext } from "../../TaskContext/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycletype } from "../../utils/getNextCycletype";

export function Tips(){
     const {state} = useTaskContext();
     const nextCycle = getNextCycle(state.currentCycle);
     const nextCyletype = getNextCycletype (nextCycle);

      //Tips
    const tipsFormWhenActiveTask ={
      workTime: <span>Foque por {state.config.workTime}</span>,
      shortBreakTime: <span>Descanse por {state.config. shortBreakTime}</span>,
      longBreakTime: <span>Descanso longo</span>,    
    };

    const tipsForNoActiveTask ={
      workTime: <span>Proximo ciclo é de {state.config.workTime}</span>,
      shortBreakTime: <span>Proximo ciclo é de {state.config. shortBreakTime}</span>,
      longBreakTime: <span>Proximo descanso sera longo</span>,    
    };

    return(
        <>
         {!!state.activeTask && tipsFormWhenActiveTask[state.activeTask.type]}
       {!state.activeTask && tipsForNoActiveTask[nextCyletype]}
        </>
    )
}