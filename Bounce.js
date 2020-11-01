function objective(firstBox,secondBox){
    if(abs(firstBox.x-secondBox.x)< firstBox.width/2+secondBox.width/2 && abs(firstBox.y-secondBox.y)< firstBox.height/2+secondBox.height/2){
        return true;
    }
      else{
        return false;
      }
}