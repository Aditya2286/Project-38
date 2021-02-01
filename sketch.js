var gameState=0;
var database;
var attack,dead,idle,jump,jumpAttack,run,bladeImg;
var bg,ground,groundImg;
var ro;
function preload(){
    attack=loadAnimation("Attack/Attack (1).png","Attack/Attack (2).png","Attack/Attack (4).png","Attack/Attack (6).png","Attack/Attack (9).png");
    dead=loadAnimation("Dead/Dead (1).png","Dead/Dead (2).png","Dead/Dead (3).png","Dead/Dead (5).png","Dead/Dead (7).png","Dead/Dead (8).png","Dead/Dead (10).png");
    idle=loadAnimation("Idle/Idle (1).png","Idle/Idle (2).png");
    jump=loadAnimation("Jump/Jump (1).png","Jump/Jump (3).png","Jump/Jump (5).png","Jump/Jump (7).png","Jump/Jump (9).png");
    jumpAttack=loadAnimation("JumpAttack/JumpAttack (2).png","JumpAttack/JumpAttack (3).png","JumpAttack/JumpAttack (5).png","JumpAttack/JumpAttack (7).png","JumpAttack/JumpAttack (9).png");
    run=loadAnimation("Run/Run (1).png","Run/Run (2).png","Run/Run (8).png","Run/Run (9).png","Run/Run (10).png")
    bladeImg=loadAnimation("Blade.png");
    bg=loadImage("Background/BG.png");
    groundImg=loadImage("Background/Objects/Ground.png");
}

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();

    ro=createSprite(150,590,200,200);
    ro.addAnimation("running",run);
    ro.scale=0.2;
    ro.velocityX=5;

    /*ground=createSprite(width/2,height-35);
    ground.addImage(groundImg);
    ground.scale=4.5;*/
}

function draw(){
    background(bg); 

    camera.position.x=ro.x+500;

    //creating infinite ground
    if(frameCount % 10 === 0){
        ground = createSprite(width/2,height-35);
        ground.addImage(groundImg);
        ground.scale=4.5;
    }
    
    
    drawSprites();
}