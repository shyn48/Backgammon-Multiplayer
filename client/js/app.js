/** //TODO:
 * !selectState returns undefined sometimes
 * *use move function inside the click event
 * *make dice calculations and determine next move possiblities
 */

let sections = [];
let pieces = [];
let canvWidth = 700,
  canvHeight = 430;

let menu = "main";
let img;
let selectState = false;

function preload() {
  img = loadImage('/client/img/backgammon.jpg')
}

function setup() {
  createCanvas(canvWidth, canvHeight);

  for (let i = 1; i <= 6; i++) {
    sections.push(new Section(i * 30, 10, i, 13 - i, 12 + i));
    if (i == 1) {
      for (let j = 0; j <= 5; j++) {
        let piece = new Piece(sections[0], (j + 1) * 15 + 10)
        sections[0].pieces.push(piece);
        pieces.push(piece);
      }
    }
    if (i == 5) {
      for (let j = 0; j <= 2; j++) {
        let piece = new Piece(sections[4], (j + 1) * 15 + 10)
        sections[4].pieces.push(piece);
        pieces.push(piece);
      }
    }
  }

  for (let i = 7; i <= 12; i++) {
    sections.push(new Section(i * 30 + 40, 10, i, 13 - i, 12 + i));
    if (i == 7) {
      for (let j = 0; j <= 5; j++) {
        let piece = new Piece(sections[6], (j + 1) * 15 + 10)
        sections[6].pieces.push(piece);
        pieces.push(piece)
      }
    }

    if (i == 12) {
      for (let j = 0; j <= 1; j++) {
        let piece = new Piece(sections[11], (j + 1) * 15 + 10)
        sections[11].pieces.push(piece);
        pieces.push(piece)
      }
    }
  }

  for (let i = 1; i <= 6; i++) {
    sections.push(new Section(i * 30, 340 - 10, 12 +i, 12 + i, 13 - i));

    if (i == 1) {
      for (let j = 0; j <= 5; j++) {
        let piece = new Piece(sections[12], 340 - (j + 1) * 15 - 10);
        sections[12].pieces.push(piece);
        pieces.push(piece);
      }
    }

    if (i == 6) {
      for (let j = 0; j <= 2; j++) {
        let piece = new Piece(sections[16], 340 - (j + 1) * 15 - 10)
        sections[16].pieces.push(piece);
        pieces.push(piece);
      }
    }
  }

  for (let i = 7; i <= 12; i++) {
    sections.push(new Section(i * 30 + 40, 340 - 10, 12 + i ,12 + i, 13 - i));

    if (i == 7) {
      for (let j = 0; j <= 5; j++) {
        let piece = new Piece(sections[18], 340 - (j + 1) * 15 - 10)
        sections[18].pieces.push(piece);
        pieces.push(piece)
      }
    }

    if (i == 12) {
      for (let j = 0; j <= 1; j++) {
        let piece = new Piece(sections[23], 340 - (j + 1) * 15 - 10)
        sections[23].pieces.push(piece);
        pieces.push(piece)
      }
    }
  }

  pieces.forEach(piece => piece.setColor())

  console.log(pieces)

}

function draw() {
  let sceneUtil = new Scene()

  sceneUtil.drawMainMenu(menu, img);

  if(menu == 'game'){
    sceneUtil.drawGameScene(menu)
  }

  if(selectState === true){
    textSize(25)
    text("Right Click to cancel", 440, 100)
  }

}

function mouseClicked() {
  if (menu == 'main') {
    if (mouseX < 400 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        menu = 'game'
      } else if (mouseY < 275 && mouseY > 200) {
        menu = 'findGame'
      } else if (mouseY < 425 && mouseY > 350) {
        menu = 'exit'
        //exit electron process
      }
    }
  }
}
function mousePressed() {
  if(mouseButton === LEFT) {
    if(selectState === false) {
      for (let i = 0; i < pieces.length; i++) {
        selectState = pieces[i].clicked({ first: 2, second: 3, sum: 5 }, selectState, 'black')
      }
    }
  }
  if(mouseButton === RIGHT) {
    for (let i = 0; i < pieces.length; i++) {
      selectState = pieces[i].rightClicked(6, selectState)
    }
  }
}