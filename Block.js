class Block {
  var name;
  var textures = [];
  var position = [];
  
  constructor(name, textures, position) {
    this.name = name;
    this.textures = textures;
    this.position = position;
  }
  
  function add() {
    var blockA = document.insertElement('section').insertElement('div').setAttribute('class', 'block');
    var frontFace = blockA.insertElement('figure').setAttribute('class', 'front').insertElement('img').setAttribute('src', textures[0]);
    var backFace = blockA.insertElement('figure').setAttribute('class', 'back').insertElement('img').setAttribute('src', textures[1]);
    var leftFace = blockA.insertElement('figure').setAttribute('class', 'left').insertElement('img').setAttribute('src', textures[2]);
    var rightFace = blockA.insertElement('figure').setAttribute('class', 'right').insertElement('img').setAttribute('src', textures[3]);
    var topFace = blockA.insertElement('figure').setAttribute('class', 'top').insertElement('img').setAttribute('src', textures[4]);
    var bottomFace = blockA.insertElement('figure').setAttribute('class', 'bottom').insertElement('img').setAttribute('src', textures[5]);
  }
  function remove() {
    document.
  }
  
  function get(position) {
    return World.blocks[position[0]][position[1]][position[2]];
  }
}
