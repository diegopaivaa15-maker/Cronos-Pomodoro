
import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles/indext";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../TaskContext/TaskContext/UseTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycletype } from "../../utils/getNextCycletype";



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
        formattedSecondsRemaining: `00:00`,
        tasks: [...prevState.tasks, newTask],
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
          // value={takName}
          // onChange={(e)=> setTaskName(e.target.value)}
          ref={taskNameInput}
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
};