class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);       
    }

    fly(){
        this.sling.bodyA = null;
    }

    attacher(bodyA)
    {
        this.sling.bodyA=bodyA;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(211,59,59);
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);       
        }

       
        
    }
    
}