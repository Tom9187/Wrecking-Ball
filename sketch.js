const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,b1,b2,b3,b4
var ball,rope




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400)
 b1 = new Box (1000,200)
 b2 = new Box (1000,250)
b3 = new Box (1000,300)
b4 = new Box (1000,350)
ball = new Ball(700,200)
rope = new ROpe(ball.body,{x:900,y:40})
}
 function draw (){
    background("blue")
    Engine.update(engine)
    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    ball.display();
    rope.display();
 }
 function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
 }


