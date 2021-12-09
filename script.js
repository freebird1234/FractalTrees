const canvas = document.getElementsByClassName('canvas1')[0]; 
const ctx = canvas.getContext('2d');

const button = document.getElementById('tree-generator');

canvas.width = window.innerWidth;
canvas.height=window.innerHeight;
let curve=0;
function drawTree(startX ,startY,length,branchWidth,angle,color1 ,color2){
    
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle=color1;
    ctx.fillStyle=color2;
    ctx.shadowBlur=12;
    ctx.shadowColor='black'
    ctx.lineWidth=branchWidth;
    ctx.translate(startX,startY);
    ctx.rotate(angle*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(0,-length);
    ctx.stroke();

    if(length<16){
        ctx.beginPath();
        ctx.arc(0,-length,15,0,Math.PI/2);
        ctx.fill();
        ctx.restore();
        return;
    }
    curve=Math.random()*25+15;
    drawTree(0,-length*0.85,length*0.75,branchWidth*0.8,angle+curve,color1,color2);
    drawTree(0,-length*0.75,length*0.75,branchWidth*0.8,angle-curve,color1,color2);
   
    ctx.restore();
}



function generateRandomTree(){

 let startX=canvas.width/2;
 let startY=canvas.height-100;
 let length=220 + Math.random()*15-15;
 let branchWidth=Math.random()*10+4;
 let angle=0;
 let color1= 'rgb(' + Math.random()*255+20 + ',' +Math.random()*255+20+','+Math.random()*255+20;
 let color2= 'rgb(' + Math.random()*255+20 + ',' +Math.random()*255+20+','+Math.random()*255+20;
 button.style.background=color1;
 drawTree(startX,startY,length,branchWidth,angle,color1,color2);
}



button.addEventListener('mousedown' ,function(){
ctx.clearRect(0,0,canvas.width,canvas.height);
generateRandomTree();
});

drawTree(canvas.width/2,canvas.height-100,200,10,0,'brown','pink');
//drawHTree(canvas.width/2-200,canvas.height/2-20,6,500);