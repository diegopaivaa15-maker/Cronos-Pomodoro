import type { TaskModel } from "../models/TaskModel";

export function getNextCycletype(cuurentCycle:number): TaskModel[`type`]{
    if (cuurentCycle % 8 === 0) return `longBreakTime`; 
    if (cuurentCycle % 2 === 0) return `shortBreakTime`;
    return `workTime`;
}