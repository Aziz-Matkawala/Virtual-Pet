//Create variables here
var dog,dogIMG, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dogIMG = loadImage("dogIMG.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  var dog = createSprite(250, 250, 100, 100);
  dog.addImage("image", dogIMG);
  database = firebase.database
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)

}


function draw() {  
  backGround("yellow")
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(20);
  text("Food"+ foodStock, 250, 50);


}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



