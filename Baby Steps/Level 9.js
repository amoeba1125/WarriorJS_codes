let escaping = false;
let rightClear = false;
let leftClear = false;
let facing = 'right';
let goRescue = false;
let goShoot = false;
let firstTurn = true;

class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */
  playTurn(warrior) {
    goRescue = goShoot = false;
    let lookArr = warrior.look();
    for(let i =0;i < lookArr.length;i++) {
      warrior.think(lookArr[i].isEmpty() ? '\' \'' : lookArr[i].isWall() ? '\'║\'' : 
      lookArr[i].getUnit().isBound() ? 'C' : lookArr[i].getUnit().isEnemy() ? 'E' : '?'
      +' ');
    }
    warrior.think('\ngoRescue='+goRescue.toString()+'\tgoShoot='+goShoot.toString()+'\tfacing='+facing.toString()+'\n');
    // Cool code goes here
    for(let i =0;i < lookArr.length;i++) {
      if(lookArr[i].isEmpty()){
        continue;
      }
      else if(lookArr[i].isUnit()){
        if(lookArr[i].getUnit().isBound()){
          goRescue = true;
          break;
        }
        else if(lookArr[i].getUnit().isEnemy()){
          goShoot = true;
          break;
        }
      }
      else if(lookArr[i].isWall()){
        rightClear = true;
        //warrior.pivot();
        break;
      }
    }
    if(firstTurn){
      warrior.pivot();
      firstTurn = false;
    }
    else if(goRescue){
      if(warrior.feel().isEmpty()){
        warrior.walk();
      }
      else{
        warrior.rescue();
      }
    }
    else if(goShoot){
      warrior.shoot();
    }
    else{
      warrior.walk();
    }
  }
}
