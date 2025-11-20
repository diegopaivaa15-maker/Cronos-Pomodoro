import { useEffect, useReducer} from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "../initialTaskState";
import { taskReducer } from "./TaskReducer";
import { Timeworkermenage } from "../../workes/TimerworkerMenage"



  type TtaskContextProviderProps = {
    children: React.ReactNode;
  };

export function TaskContextProvider({children}:TtaskContextProviderProps){
    const [ state,dispatch ] = useReducer(taskReducer, initialTaskState);

    const Worker = Timeworkermenage.getInstance();

    Worker.onmessage(e => {
      const CountDownSeconds = e.data;
      console.log(CountDownSeconds);

      if(CountDownSeconds <= 0){
         console.log('Worker Completed');
        Worker.terminate();
      }
    });

    useEffect(()=> {
        if(!state.activeTask){
          console.log('Worker por falta de activeTask')
          Worker.terminate();
        }
        Worker.postMessage(state);
    },[Worker,state]);
    
   return (
    <TaskContext.Provider value={{ state,dispatch }}>
    {children}
    </TaskContext.Provider>
  );
}
