
function setup() {
  createCanvas(600,600);
var box = createSprite (300,300,30,30);


}

function draw() 
{
  background(30);
  if (keyDown(RIGHT_ARROW))   {
box.position.x=box.position.x+2


  }
drawSprites();
}




