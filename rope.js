class ROpe{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 250
        }
        this.pointB = pointB
        this.ROpe = Constraint.create(options);
        World.add(world, this.ROpe);
    }
    attach(body){
        this.ROpe.bodyA = body;
    }
    
    fly(){
        this.ROpe.bodyA = null;
    }

    display(){
        if(this.ROpe.bodyA){
            var pointA = this.ROpe.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(29);
            strokeWeight(3)
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            
            pop();
        }
    }
    
}