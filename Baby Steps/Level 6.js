let escape = false;
let backwardClear = false;

class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */
  playTurn(warrior) {
    // Cool code goes here
    warrior.think('escape='+escape.toString()+'\tbackwardClear='+backwardClear.toString()+'\n');
    if(!backwardClear){
      if(warrior.feel('backward').isEmpty()){
        warrior.walk('backward');
      }
      else if(warrior.feel('backward').isWall()){
        backwardClear = true;
        warrior.walk();
      }
      else{
        warrior.rescue('backward');
      }
    }
    else if(escape && warrior.feel('backward').isWall()){
      if(warrior.health()==20){
        escape = false;
        warrior.walk();
      }
      else{
        warrior.rest();
      }
    }
    else if(warrior.health()<11){
      escape = true;
      warrior.walk('backward');
    }
    else if(warrior.feel().isEmpty()){
      warrior.walk();
    }
    else if(warrior.feel().getUnit().isBound()){
      warrior.rescue();
    }
    else{
      warrior.attack();
    }
  }
}
