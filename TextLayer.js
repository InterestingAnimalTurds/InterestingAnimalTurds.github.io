class TextLayer {
  
  constructor(text, charSpaceX, charSpaceY) {
    this.text = text;
    this.charSpaceX = charSpaceX;
    this.charSpaceY = charSpaceY;
    this.rows = new p5.TypedDict();
    this.characters = new Array();

    for (let i = 0; i < text.length; i++) {
      let character = text.charAt(i);
      //print(character);
      this.characters[i] = character.toString();
    }
  }

  display() {
    this.updateText();
    this.displayImage = createGraphics(windowWidth, windowHeight);
    this.textDisplay = createGraphics(windowWidth, windowHeight);
    let lineCountX = 0;
    let lineCountY = 1;
    this.arrayY = new Array();
    this.arrayX = new Array();

    let countY = 0;
    let countX = 0;

    for (let i = 0; i < this.text.length; i++) {
      let c = this.characters[i];
      this.displayImage.textSize(11);
      // textLeading(0);
      this.displayImage.textAlign(CENTER,CENTER);
      //text(c,100,100);
      //print(lineCountX);
      if (lineCountX * this.charSpaceX < windowWidth - this.charSpaceX) {
        let currentText = new textObject(
          c,
          lineCountX * this.charSpaceX + this.charSpaceX / 2,
          this.charSpaceY * lineCountY - this.charSpaceY / 2,
          i
        );
        this.displayImage.noStroke();
        this.displayImage.fill(255,255,255,80);
        this.displayImage.rectMode(CENTER);
        this.displayImage.rect(
          lineCountX * this.charSpaceX + this.charSpaceX / 2,
          this.charSpaceY * lineCountY - this.charSpaceY/2,
          this.charSpaceX,
          this.charSpaceY
        );
        this.displayImage.fill(0);
        this.displayImage.text(
          c,
          lineCountX * this.charSpaceX + this.charSpaceX / 2,
          this.charSpaceY * lineCountY- this.charSpaceY / 2
        );

        if (lineCountY == 1) {
          this.arrayX[countX] = currentText;
          countX++;
        }
        if (lineCountX == 0) {
          this.arrayY[countY] = currentText;
          countY++;
        }

        lineCountX++;
      } else {
        lineCountX = 0;
        lineCountY++;
      }

      if (lineCountY * this.charSpaceY > windowHeight) {
        //print(this.arrayY);
        return;
      }
    }
  }
  addText(text, posX, posY) {
    //this.displayImage.noStroke();
    this.displayImage.fill(255,255,255,80);
    this.displayImage.rectMode(CENTER);
    this.displayImage.rect(
      posX,
      posY,
      this.charSpaceX,
      this.charSpaceY
    );

    
    this.displayImage.fill(0);
    this.displayImage.text(
      text,
      posX,
      posY
    );

    
    
  }

  updateText()
  {
    let newText=this.characters[0];
    for(let i =1; i<this.characters.length; i++)
    {
      newText = newText+this.characters[i];
    }

    this.Text = newText;

  }
  
  
}

class textObject {
  constructor(text, posX, posY, index) {
    this.text = text;
    this.posX = posX;
    this.posY = posY;
    this.index = index;
  }
}
