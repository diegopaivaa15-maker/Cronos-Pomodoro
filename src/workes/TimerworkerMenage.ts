import type { TaskStateModel } from "../models/TaskStateModel";


let instance:Timeworkermenage | null = null;

export class Timeworkermenage{
    private worker: Worker;

    private constructor(){
        this.worker = new Worker (new URL('./timerworker.js', import.meta.url));
    }

    static getInstance(){
        if(!instance){
            instance = new Timeworkermenage();
        }
        return instance
    }
    postMessage(message: TaskStateModel){
        this.worker.postMessage(message);
    }
    onmessage(cb: (e: MessageEvent) => void){
        this.worker.onmessage = cb;
    }
    terminate(){
        this.worker.terminate()
        instance = null
    }
}