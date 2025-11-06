import { TaskActionTypes, type TaskActionModel } from "./TaskActions";

export function taskReducer (state: TaskActionModel, action: TaskActionModel){
    switch(action.type) {
        case TaskActionTypes.START_TASK:
            return state;
    }
    switch(action.type) {
        case TaskActionTypes.INTERRUPT_TASK:{
            return state;
            }
             case TaskActionTypes.RESET_STATE:{
            return state;
            }
    }
    return state;
}