const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ball,ground;
function setup (){
  createCanvas (400,400);
  engine = Engine.create ();
  world = engine.world;
  var b_o = {
    restitution:1.0,
  }
  var g_o = {
    isStatic:true,
  }
  ball = Bodies.circle (200,0,20,b_o);
  ground = Bodies.rectangle (200,height,400,10,g_o);
  World.add (world,ball);
  World.add (world,ground);
  console.log (ball);
}
function draw (){
  background (rgb(0,75,0));
  Engine.update(engine);
  fill (rgb(75,75,255));
  ellipseMode (RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  rectMode (CENTER);
  rect(ground.position.x,ground.position.y,400,10);
}