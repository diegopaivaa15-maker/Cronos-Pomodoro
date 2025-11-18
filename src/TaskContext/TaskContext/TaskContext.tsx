import { createContext } from "react"
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "../initialTaskState"
import type { TaskActionModel } from "./TaskActions"

type taskContextProps = {
    state: TaskStateModel;
    dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue ={ 
    state: initialTaskState,
     dispatch: () =>{},
    };

    export const TaskContext = createContext<taskContextProps>(initialContextValue);