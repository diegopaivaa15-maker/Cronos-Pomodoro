export function getNextCycle(cuurentCycle:number){
    return cuurentCycle === 0 || cuurentCycle === 8 ? 1: cuurentCycle + 1;
}