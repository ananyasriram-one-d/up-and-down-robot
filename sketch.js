var head,eye,neck,rbody;
var options;

function setup() {
createCanvas(400, 400);

}

function draw() {
  background(0);
  
  var rbody = rect(155,mouseY,90,120);
 
 var neck = rect(190,mouseY - 50,20,50)
  
  var head = circle(200,mouseY - 80,80);
  let a = color('yellow');
  fill(a);
  
  var eye = circle(200,mouseY - 80,30);
  let c = color('pink');
  fill(c);  
 }
  