
import { PlayCircleIcon, StopCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles/indext";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../TaskContext/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycletype } from "../../utils/getNextCycletype";
import { formatSegunds } from "../../utils/FormatSegunds";



export function MainForm(){
  const {state, setState} = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement> (null);

    //Ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCyletype = getNextCycletype (nextCycle);
  
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>){
      event.preventDefault();
  
      if(taskNameInput.current === null) return;

      const taskName= taskNameInput.current.value.trim();
     
      if(taskName){
        alert(`Digite o nome da tarefa`)
        return 
      }
      const newTask: TaskModel = {
        id: Date.now().toString(),
        name: taskName,
        startDate: Date.now(),
        completeDate: null,
        interruptDate: null,
        duration: state.config[nextCyletype],
        type: nextCyletype,
      };

      const secondsRemaning = newTask.duration * 60
      
      setState(prevState => {
        return { 
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        CurrentCycle: nextCycle,
        secondsRemaning, //conferir 
        formattedSecondsRemaining: formatSegunds(secondsRemaning),
        tasks: [...prevState.tasks, newTask],
        };
      });
    }

    function haldeInterrrupTask (){
      setState(prevState => {
        return { 
        ...prevState,
        activeTask: null,
        secondsRemaning: 0,
        formattedSecondsRemaining: `00:00`,
        tasks: prevState.tasks.map(task => {
          if(prevState.activeTask && prevState.activeTask.id === task.id){
            return {...task, interruptDate: Date.now()}
          }
          return task;
        })
        };
      });
    }

  return ( 
    
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      {state.currentCycle > 0 &&(
        <div className="formRow">
          <Cycles/>
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
           <DefaultButton 
           aria-label="Iniciar nova tarefa" 
           type="submit" 
           icon={<PlayCircleIcon />} 
           key='botao_submit'
           />
           )} 
           
           {!!state.activeTask && (   //resolvendo um problema com isso e com key mais pode ser so o key
            <DefaultButton 
            aria-label="Parar tarefa atual" 
            title="Parar tarefa atual"
           type="button" 
           color="red"
           icon={<StopCircleIcon/>} 
           onClick={haldeInterrrupTask}
            key='botao_button'
           />
          
        )};
      </div>
    </form>
  );
};