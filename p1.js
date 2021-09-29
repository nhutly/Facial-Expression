//Nhut Ly - CS 559 - Fall 2021
var canvas = document.getElementById('myCanvas');

var slider1 = document.getElementById('slider1');
var slider2 = document.getElementById('slider2');

slider1.value = 50;
slider2.value = 50;



function draw(){
  var context = canvas.getContext('2d');
  var dx = slider1.value;
  var dy = slider2.value;
  
  
  
  // draw face
  context.beginPath();
  context.arc(250, 250, 200, 0, 2 * Math.PI);
  context.fillStyle = "yellow";
  context.fill();
  
  
  // draw smile
  context.lineWidth = 5;
  context.strokeStyle = "black";
  context.beginPath();
  var counterClock = true;

  if (dy == 50){
    context.ellipse(250, 350, 100, 0, 0, Math.PI , Math.PI*2, counterClock);
  }else if (dy < 50){//sad face
    counterClock = false;
    context.ellipse(250, 350, 100, 50-dy, 0, Math.PI , Math.PI*2, counterClock);
  }else{//smile face
    context.ellipse(250, 350, 100, dy-50+1, 0, Math.PI , Math.PI*2, counterClock);
  }
  context.stroke();
  
  
  // draw left eye
  context.lineWidth = 5;
  context.strokeStyle = "black";
  context.beginPath();
  var counterClock = true;

  if (dx == 50){
    context.ellipse(150, 150, 30, 0, 0, Math.PI , Math.PI*2, counterClock);
  }else if (dx < 50){//sad face
    counterClock = false;
    context.ellipse(150, 150, 30, (50-dx)/2, 0, Math.PI , Math.PI*2, counterClock);
  }else{//smile face
    context.ellipse(150, 150, 30, (dx-50+1)/2, 0, Math.PI , Math.PI*2, counterClock);
  }
  context.stroke();
  
  // draw right eye
  context.beginPath();
  if (dx == 50){
    context.ellipse(350, 150, 30, 0, 0, Math.PI , Math.PI*2, counterClock);
  }else if (dx < 50){//sad face
    counterClock = false;
    context.ellipse(350, 150, 30, (50-dx)/2, 0, Math.PI , Math.PI*2, counterClock);
  }else{//smile face
    context.ellipse(350, 150, 30, (dx-50+1)/2, 0, Math.PI , Math.PI*2, counterClock);
  }
  context.stroke();
  
  
  // draw third eye
  context.lineWidth = 3;
  context.fillStyle = "orange";
  context.beginPath();
  context.moveTo(240,130);
  context.lineTo(250,100);
  context.lineTo(260,130);
  context.lineTo(250,160);
  context.lineTo(240,130);
  context.fill();
  context.stroke();
  
  // draw ears
  context.lineWidth = 3;
  context.strokeStyle = "pink"
  context.beginPath();
  context.arc(250, 30, 20, 0, 2 * Math.PI, false);
  context.stroke();
  
  // draw nose
  context.lineWidth = 3;
  context.fillStyle = "red"
  context.beginPath();
  context.moveTo(240,260);
  context.lineTo(250,240);
  context.lineTo(260,260);
  context.lineTo(240,260);
  context.fill();
  context.stroke();
}


slider1.addEventListener("input", draw);
slider2.addEventListener("input", draw);
draw();


