const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'This is Project 30 !!!';

let index = 1;

let time = 300/speedEl.value;

writeText();

function writeText(){
    textEl.innerText = text.slice(0,index);
    index++;
    if(index > text.length){
        index = 1;
    }
    setTimeout(writeText,time)
}

speedEl.addEventListener('input',(e)=>{
    time = 300 / e.target.value;
})