class Player {
  /**
   * Plays a warrior turn.
   *
   * @param {Warrior} warrior The warrior.
   */
  playTurn(warrior) {
    // Cool code goes here
    warrior.think(warrior.feel().getLocation());
    if(warrior.feel().isEmpty())
      warrior.walk();
    else
      warrior.attack();
  }
}
