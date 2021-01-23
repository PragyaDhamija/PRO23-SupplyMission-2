class CarrierB{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.b1 = Bodies.rectangle(x, y, width, height, options);
      
    this.width = width;
    this.height = height;
    
    World.add(world, this.b1);


  }
  display(){
    var pos = this.b1.position;
    var angle = this.b1.angle;
    //fill("pink")

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("blue")
    fill("lightblue");
    rect(0, 0, this.width, this.height);
    pop();

  }
};
