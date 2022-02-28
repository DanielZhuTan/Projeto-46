const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var skatistaImg, skatista;
var pracaImg, praca;
var pedraImg, pedra;
var lataImg, lata;
var pista, pistaImg;
var fundo, fundoImg;

function preload()
{
   pistaImg = loadImage("pista.jpg");
   fundoImg = loadImage("fundo.jpg");
   pedraImg = loadImage("pedra.png");
   lataImg = loadImage("lata.png");
   skatistaImg = loadAnimation("Daniel/png/1.png","Daniel/png/2.png","Daniel/png/3.png");
  
}

function setup() {
	createCanvas(850, 690);

	//engine = Engine.create();
	//world = engine.world;

	//Crie os Corpos aqui.

   
   pista = createSprite(450,600,900,200);
   pista.velocityX = -2;

   skatista = createSprite(150,500,20,20);
   skatista.addAnimation("SkatistaRunner", skatistaImg);;
   skatista.scale = 0.3;
	 
	//Engine.run(engine);
  
}


function draw() {
  background(fundoImg);

  if(pista.x < 400){
     pista.x = pista.width/2;
  }

  drawSprites();
 
}

function gerarObstaculos(){
   if(frameCount % 40 === 0){
       var obstaculos = createSprite(200,500,10,40);
       obstaculos.velocityX = -4;
       var rand = Math.round(random(1,2));

       switch(rand) {
          case 1: obstaculos.addImage(lataImg);
             break;
          case 2: obstaculos.addImage(pedraImg);
          default:
             break;
       }
   }
}