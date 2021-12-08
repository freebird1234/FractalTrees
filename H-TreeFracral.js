const canvas = document.getElementsByClassName('canvas1')[0]; 
const ctx = canvas.getContext('2d');

const button = document.getElementById('ree-generator');

canvas.width = window.innerWidth;
canvas.height=window.innerHeight;

let hsl=60;
ctx.fillStyle= 'black';
ctx.strokeStyle='black';
ctx.lineWidth= 3;
function drawHTree(startX ,startY , depth ,length){

    if(depth<1){
        return;
    }
   // ctx.strokeStyle = 'rgb(' + Math.random()*255+','+Math.random()*255+','+Math.random()*255+')';
    hsl+50;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(startX+length , startY);
    ctx.moveTo(startX,startY+length/2);
    ctx.lineTo(startX, startY-length/2);
    ctx.moveTo(startX+length,startY+length/2);
    ctx.lineTo(startX+length, startY-length/2);
    ctx.stroke();
    let newLength=length/2;
   
    drawHTree(startX-newLength/2,startY-length/2,depth-1 ,newLength);
    drawHTree(startX-newLength/2 ,startY+length/2,depth-1,newLength);
    drawHTree(startX+length-newLength/2,startY-length/2,depth-1 ,newLength);
    drawHTree(startX+length-newLength/2 ,startY+length/2,depth-1,newLength);
 
}


drawHTree(canvas.width/2-200,canvas.height/2-20,6,500);