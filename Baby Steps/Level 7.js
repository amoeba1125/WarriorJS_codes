let escaping = false;
let leftClear = false;
let rightClear = false;
let facing = 'right';
let lastHP = 20;

class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */
  playTurn(warrior) {
    warrior.think('escaping='+escaping.toString()+'\tleftClear='+leftClear.toString()+'\trightClear='+rightClear.toString()+'\tfacing='+facing.toString()+'\n');
    // Cool code goes here
    if(facing == 'right'){
      facing = 'left';
      warrior.pivot();
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
    else{
      warrior.attack();
    }
  }
}
