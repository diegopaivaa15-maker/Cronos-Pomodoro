export function formatSegunds(seconds: number){
    const minutes = String(Math.floor(seconds/60)).padStart(2, `0`);
    const secondsMode = String(Math.floor(seconds % 60)).padStart(2, `0`);
    return `${minutes}:${secondsMode}`;
}