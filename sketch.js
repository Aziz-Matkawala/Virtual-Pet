//Create variables here
var dog,dogIMG, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dogIMG = loadImage("dogIMG1.png");
  happyDog = loadImage("dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250, 100, 100);
  dog.addImage("image", dogIMG);
  dog.scale = 0.25;
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)

}


function draw() {  
  background("yellow")
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage("image", happyDog);
  }

  drawSprites();
  //add styles here
  textSize(20);
  text("Food = "+ foodS, 250, 50);


}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
else{
  x=x-1;
}
  database.ref('/').update({
    Food:x
  })
}



