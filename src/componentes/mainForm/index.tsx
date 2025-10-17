
import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles/indext";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../context/TaskContext";

export function MainForm(){
  const {setSate} = useTaskContext();
  function handleClick(){
    setSate(prevState => {
      return{
        ...prevState,
        formattedSecondsRemaining: '21:00'
      }
    })
  }

  return ( 
    
    <form className='form' action=''>
      <button onClick={handleClick} type="button">clicar</button>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
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