let  canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let  x  = -1.8;
/*
ctx.moveTo(0,450);
ctx.lineTo(900,450);
ctx.stroke();
ctx.moveTo(450,0);
ctx.lineTo(450,900);
ctx.stroke();*/
function drawPoint( y ) {
   
    x+=0.3;
    y = 30 * y;
    y = 450 - y; 
   // alert(y);
    ctx.fillRect(x,y,3,3);
    
}
function cleanField (){
  ctx.clearRect(0,0,900,900); 
}

