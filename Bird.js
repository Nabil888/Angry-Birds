class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.visibility = 255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push();
      this.visibility-=0.5;
      tint(255,this.visibility)
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}
class Bird2 extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird2.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.visibility = 255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push();
      this.visibility-=0.5;
      tint(255,this.visibility)
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}
class Bird3 extends BaseClass {
  constructor(x,y){
    super(x,y,60,67);
    this.image = loadImage("sprites/bird3.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.visibility = 255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push();
      this.visibility-=0.5;
      tint(255,this.visibility)
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}
class Bird4 extends BaseClass {
  constructor(x,y){
    super(x,y,40,40);
    this.image = loadImage("sprites/bird4.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.visibility = 255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push();
      this.visibility-=0.5;
      tint(255,this.visibility)
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}
