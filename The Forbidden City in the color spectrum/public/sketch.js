// Create connection to Node.JS Server
const socket = io();

let bSize = 30; // brush size
let canvas;
let drawIsOn = false;

function setup() {
  canvas = createCanvas(500, 500);

  //set styling for the sketch
  background(255);
  noStroke();
}

function draw() {

  if(drawIsOn){
    fill(0);
    circle(mouseX,mouseY,bSize);
  }

}

//we only want to draw if the click is on the canvas not on our GUI
function mousePressed(){
  drawIsOn = true;
}

function mouseReleased(){
  drawIsOn = false;
}


////IMPLEMENT MULTI-USER DRAWING////



////IMPLEMENT MULTI-USER DRAWING////


//Events we are listening for
// Connect to Node.JS Server
socket.on("connect", () => {
  console.log(socket.id);
});

// Callback function on the event we disconnect
socket.on("disconnect", () => {
  console.log(socket.id);
});

