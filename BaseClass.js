class BaseClass
{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        this.boxObject = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Window.png");        
        World.add(world, this.boxObject);
      }
      display(){
        //var angle = this.boxObject.angle;
        //push();
        //translate(this.boxObject.position.x, this.boxObject.position.y);
        //rotate(angle);
        push();
        strokeWeight(1.5);
        
        imageMode(CENTER);
        image(this.image,this.boxObject.position.x,this.boxObject.position.y, this.width, this.height);
        pop();
      }
}