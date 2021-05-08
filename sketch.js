var canvas;
var music;
var st1, st2, st3, st4;
var mainStone;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){

    canvas = createCanvas(800,600);

    //create 4 different surfaces
    st1 = new Stone(20, 390, 40, 10)
    st1.shapeColor = "grey";

    st2 = new Stone(80, 390, 40, 10)
    st2.shapeColor = "brown";

    st3 = new Stone(140, 390, 40, 10)
    st3.shapeColor = "green";

    st4 = new Stone(200, 390, 40, 10)
    st4.shapeColor = "blue";

    mainStone = new Stone(20, 20, 20, 20)
    mainStone.shapeColor = "Black";

    //create box sprite and give velocity

}

function draw() {

    background(rgb(169,169,169));

    mainStone.x = world.mouseX;
    mainStone.Y = world.mouseY;
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
