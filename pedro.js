function setup() {
  createCanvas(600, 600);
  background("yellow");

 }
function draw() {
  
  
  stroke("black");
  fill("rgb(147,147,255)");
  
 // console.log(mouseIsPressed);
  
  if(mouseIsPressed) { 
  rect(mouseX, mouseY, 50, 50);
 }
  
}
