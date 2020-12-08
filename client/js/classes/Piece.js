class Piece {
  constructor(section, y = 15) {
    this.color = '';
    this.section = section;
    this.sectionIndex = this.section.index;
    this.x = this.section.x;
    this.y = y;
    this.diameter = 23;
    this.stroke = 'rgba(0,0,0,0.25)';
    this.strokeWeight = 1;
  }

  setColor() {
    let white = '#f7f3a5';
    let black = '#8e4141';
    let color;
    switch (this.sectionIndex) {
      case 1:
        color = white;
        break;
      case 5:
        color = black;
        break;
      case 7:
        color = black;
        break;
      case 12:
        color = white;
        break;
      case 13:
        color = black;
        break;
      case 17:
        color = white;
        break;
      case 19:
        color = white;
        break;
      case 24:
        color = black;
        break;
      default:
        color = white;
        break;
    }

    this.color = color;
  }

  clicked(dice, selectState, turn) {
    console.log(selectState)
    let color = turn === 'white' ? '#f7f3a5' : '#8e4141'
    if(this.color != color)
      return
    let d = dist(mouseX, mouseY, this.x, this.y);
      if(d < this.diameter / 2) {
        //Pick up effect for piece
        let lastPieceY = this.section.pieces[this.section.pieces.length - 1].y

        if( lastPieceY === this.y){
          this.diameter = 26;
          this.stroke = 'rgba(0,0,0,0.25)';
          this.strokeWeight = 2;
          selectState = true;
  
          //check dice and highlight applicable sections
          sections.forEach(section => {
            if(this.color == '#f7f3a5') {
              if(this.section.indexForWhite == section.indexForWhite - dice.first){
                section.highlight = true;
                //move function stuff

                //if move was done
                dice.first = 0
              }
              if(this.section.indexForWhite == section.indexForWhite - dice.second){
                section.highlight = true;
                //move function stuff

                //if move was done
                //dice.second = 0
              }
              if(this.section.indexForWhite == section.indexForWhite - dice.sum){
                section.highlight = true;
                //move function stuff

                //if move was done
                //dice = { first: 0, second: 0, sum: 0}
              }
            }
  
            if(this.color == '#8e4141') {
              if(this.section.indexForBlack == section.indexForBlack - dice.first){
                section.highlight = true;
                //move function stuff
                
                //if move was done
                //dice.first = 0
              }
              if(this.section.indexForBlack == section.indexForBlack - dice.second){
                section.highlight = true;
                //move function stuff

                //if move was done
                 //dice.second = 0
              }
              if(this.section.indexForBlack == section.indexForBlack - dice.sum){
                section.highlight = true;
                //move function stuff

                //if move was done
                //dice = { first: 0, second: 0, sum: 0}
              }
            }
          })
  
        }

      }

    return selectState
  }

  rightClicked(selectState) {
    selectState = false;
    this.stroke = 'rgba(0,0,0,0.25)';
    this.strokeWeight = 1;
    this.diameter = 23;

    sections.forEach(section => {
      section.highlight = false;
    })

    return selectState;
  }

  setY() {
    console.log(this.sectionIndex)
    if (this.section.pieces[this.section.pieces.length - 1] && this.sectionIndex < 13) {
      console.log('upper')
      this.y = this.section.pieces[this.section.pieces.length - 1].y + 15;
    } else if (this.section.pieces[this.section.pieces.length - 1] && 13 < this.sectionIndex) {
      console.log('lower')
      this.y = this.section.pieces[this.section.pieces.length - 1].y + -15;
    } else {
      console.log('bullshit')
      this.y = this.section.y - 15;
    }
  }

  render() {
    // if (
    //   dist(this.x, this.y, mouseX, mouseY) < this.diameter / 2 &&
    //   mouseIsPressed
    // ) {
    //   this.x = mouseX;
    //   this.y = mouseY;
    // }
    stroke(this.stroke);
    strokeWeight(this.strokeWeight);
    fill(this.color);
    circle(this.x, this.y, this.diameter);
  }
}
