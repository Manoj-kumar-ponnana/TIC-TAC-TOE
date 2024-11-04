let wc=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let box=[' ',' ',' ',' ',' ',' ',' ',' ',' '];
let cp='x';
let stat='gameOn';
let currCell=0;
let draw=true;
let xPoints=0;
let oPoints=0;
function myfun(n){
    if(stat=='gameOn' && box[n]==' '){
        if(cp=='x'){
            document.getElementsByClassName('cell')[n].innerHTML=cp;
            box[n]=cp;
            checkGame();
            cp='o';
        }
        else{
            document.getElementsByClassName('cell')[n].innerHTML=cp;
            box[n]=cp;
            checkGame();
            cp='x';
        }
        document.getElementById('current-player').innerHTML=cp;
        currCell+=1;
    }
}
function checkGame(){
    for(let i=0;i<wc.length;i++){
        if(box[wc[i][0]]==cp && box[wc[i][1]]==cp && box[wc[i][2]]==cp){
            document.getElementById('current-result').innerHTML='Player '+ cp +' has won and 1 point has been added';
            draw=false;
            score(cp);
            stat='gameOver';
        }
    }
    if(draw && currCell==8){
        document.getElementById('current-result').innerHTML="Draw , Reset to play another round";
    }

}

function score(player){
    if(player=='x'){
        xPoints+=1;
    }
    else{
        oPoints+=1;
    }
    document.getElementById('x-score').innerHTML=xPoints;
    document.getElementById('o-score').innerHTML=oPoints;
}

let x=document.getElementById('btn1');
x.addEventListener('click',clear);
function clear(){
    box=[' ',' ',' ',' ',' ',' ',' ',' ',' '];
    for(i=0;i<9;i++){
        document.getElementsByClassName('cell')[i].innerHTML='';
    }
    currCell=0;
    document.getElementById('current-result').innerHTML="";
    stat='gameOn';
}

let y=document.getElementById('btn2');
y.addEventListener('click',()=>{window.location='index.html'})