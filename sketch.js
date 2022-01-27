var corredor
var estrada 
var estradaimg
var corredorimg

function preload(){
  //imagens pré-carregadas
  estradaimg = loadImage("path.png")
  corredorimg = loadAnimation("runner-1.png", "runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui

  estrada=createSprite(200,200);
  estrada.addImage(estradaimg);
  estrada.velocityY = 5;
  estrada.scale= 1.3;

  corredor = createSprite(100,350,30,30);
  corredor.addAnimation("animação",corredorimg);
  corredor.scale =0.08;


}

function draw() {
  background(0);

  if(estrada.y > 400){

    estrada.y = estrada.width/4;
    
  
  }

  drawSprites();
}
