class Ball {
    constructor(x,y){
        var options = {
            'frictionair':0.0001,
            'density': 0.0001
        
        }
         this.body = Bodies.rectangle(x,y,50,50,options);
         this.width = 50;
         this.height = 50;
         World.add(world,this.body)

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("black")
        ellipse(0,0, this.width, this.height);
        pop();
      }
}
