function BounceOff(shape1,shape2){
    if (shape1.x - shape2.x < shape2.width/2 + shape1.width/2
      && shape2.x - shape1.x < shape2.width/2 + shape1.width/2) {
        shape1.velocityX = shape1.velocityX * (-1);
        shape2.velocityX = shape2.velocityX * (-1);
  }
  if (shape1.y - shape2.y < shape2.height/2 + shape1.height/2
    && shape2.y - shape1.y < shape2.height/2 + shape1.height/2){
      shape1.velocityY = shape1.velocityY * (-1);
      shape2.velocityY = shape2.velocityY * (-1);
  }
  
  }
   
function isTouching(object1,object2) {
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
   return true
  }
  else {
    return false
  
  }
  }
 