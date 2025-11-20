let isRunning = false;
import { CountDown } from './../componentes/CountDown/index';

self.onmessage = function (event){
        if(isRunning) return;

        isRunning = true;

     const state = event.data;
     const {activeTask, segundsRemaining} = state;

     const endDate = activeTask.startDate + segundsRemaining * 1000;
        const now = Date.now;
        let CountDownSeconds = Math.ceil((endDate - now) / 1000);


     function tick(){
        self.postMessage(CountDownSeconds);
        
        const now = Date.now;
         CountDownSeconds = Math.floor((endDate - now) / 1000);

         setTimeout(tick, 1000);
     }
     
     tick();
};