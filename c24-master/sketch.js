// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var engine,world,body;
var ground1,barell;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas = createCanvas(500,500);

engine=Engine.create();
world=engine.world;
barell=new Barell(100,355,PI);
ground1=new Ground(250,490);
B1=new Tanker(75,435,110,90);
B2=new Tanker(75,365,25,50);


}

function draw() {
// Remember to update the Matter Engine and set the background.
background("lavender");
Engine.update(engine);
barell.display();
ground1.display();
B1.display();
B2.display();
triangle(88,390,130,390,88,340); 
triangle(62,390,20,390,62,340); 

 
}


function keyReleased() {
    // Call the shoot method for the cannon.
}