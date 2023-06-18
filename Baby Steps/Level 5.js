let escape = false;

class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */
  playTurn(warrior) {
    // Cool code goes here
    if(escape && warrior.feel('backward').isWall()){
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
