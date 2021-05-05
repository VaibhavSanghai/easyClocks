var hr, mn, sc;
var scAngle, mnAngle, hrAngle; 

function setup() {
  createCanvas(800,400); 
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  hr = hour(); 
  mn = minute(); 
  sc = second(); 


  translate(200, 200);
  rotate(-90);

  scAngle = map(sc, 0, 60, 0, 360); 
  mnAngle = map(mn, 0, 60, 0, 360); 
  hrAngle = map(hr % 12, 0, 12, 0, 360); 

  //sec hand
  push();
  rotate(scAngle); 
  stroke(255, 0, 0); 
  strokeWeight(7); 
  line(0, 0, 100, 0); 
  pop(); 

  //min hand
  push();
  rotate(mnAngle); 
  stroke(0, 255, 0); 
  strokeWeight(7); 
  line(0, 0, 75, 0); 
  pop(); 

  //hr hand
  push();
  rotate(scAngle); 
  stroke(0, 0, 255); 
  strokeWeight(7); 
  line(0, 0, 50, 0); 
  pop(); 

  stroke(0,255,0);
  point(0, 0);
  strokeWeight(7);
  noFill();

  //arc corresponding to the second hand
  stroke("blue"); 
  arc(0, 0, 300, 300, 0, scAngle);
  
  //arc corresponding to the minute hand
  stroke("red"); 
  arc(0, 0, 280, 280, 0, mnAngle);

  //arc corresponding to the hour hand
  stroke("green"); 
  arc(0, 0, 260, 260, 0, hrAngle);

  drawSprites();
}