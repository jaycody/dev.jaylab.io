function Drop(){
  this.location = createVector(random(width), random(height)*-1.3);
  this.velocity = createVector(0,0);
  
  this.minVelocity= 4;
  this.maxVelocity= 10;
  
  //things closer are faster, longer, wider
  this.zDepth     = random(20);
  
  this.dropLength = map(this.zDepth, 0, 20, 10, 20);
  this.gravity    = createVector(0, map(this.zDepth,0, 20, 0, .2));
  this.strokeWeightMap = map(this.zDepth,0,20,1,3);
  this.velocity.y = map(this.zDepth, 0, 20, this.minVelocity, this.maxVelocity);
  
  
  this.show = function(){
    //stroke(160, 32, 240);
    stroke(138, 43, 226);
    strokeWeight(this.strokeWeightMap);
    line(this.location.x, this.location.y, this.location.x, this.location.y+this.dropLength);
  };
  
  this.fall = function(){
    this.velocity.add(this.gravity);
    this.location.add(this.velocity);
  };
  
  this.resetDrop = function(){
    if (this.location.y > height){
      this.location.x = random(width);
      this.location.y = random(-200, -this.dropLength);
      this.velocity.y = map(this.zDepth, 0, 20, this.minVelocity, this.maxVelocity);
    } 
  };
}