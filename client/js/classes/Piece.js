class Piece {
  constructor(section, y = 15) {
    this.color = '';
    this.section = section;
    this.sectionIndex = this.section.index;
    this.x = this.section.x;
    this.y = y;
    this.diameter = 23;
  }

  move(sectionIndex) {
    let section = sections.find((s) => {
      s.index == sectionIndex;
    });
    console.log(section);
    this.x = section.x;
    this.y = section.pieces[section.pieces - 1].y + this.diameter;
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

  setY() {
    this.y = this.section.pieces[this.section.pieces.length - 1].y;
  }

  render() {
    this.setColor();
    stroke(0);
    fill(this.color);
    circle(this.x, this.y, this.diameter);
  }
}