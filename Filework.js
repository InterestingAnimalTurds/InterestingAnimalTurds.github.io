class Filework {
  setup() {
    this.text = "";
  }

  constructor(x, y, mass) {
    //Basic Parameters of Filework
    this.pos = new p5.Vector(x, y);
    this.vel = new p5.Vector(0, 0);
    this.acc = new p5.Vector(0, 0);
    this.mass = mass;
    
    //Monitoring System Parameters 
    this.currentPositionX = -1;x
    this.lastPositionX = -1;
    this.currentPositionY = -1;
    this.lastPositionY = -1;
    
    this.fChar = -1;
    this.positions = new Array();
    this.lastPos = new p5.Vector(x, y);
    this.positions[0] = this.pos;
    this.count = 0;
    
    
    this.lastPosY = 0;
    this.lastPosX = 0;
    this.lastTextY=0;
    this.lastTextX=0;
    this.lastI=0;
    this.lastJ=0;
    
    this.thirdTextY =0;
    this.thirdTextX =0;
    this.thirdI =0;
    this.thirdJ =0;
    
    this.foruthTextY =0;
    this.foruthTextX =0;
    this.foruthI =0;
    this.foruthJ =0;
    
    //this.explode = false;
    this.exploded = false;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
//     if(this.exploded == false){
//       if(this.vel.y >1)
//       {
//         print("this");
//         this.explode = true;
//       }
//     }
   
  }

  addForce(force) {
    let f = force.div(this.mass);
    this.acc.add(f);//<-----------------Mass + f = acc
  }

  display(t) {
    
    for (let i = 0; i < t.arrayY.length; i++) 
    {
      if(this.pos.y < t.arrayY[i].posY + t.charSpaceY / 2 &&
         this.pos.y > t.arrayY[i].posY - t.charSpaceY / 2) 
      {
        
        for (let j = 0; j < t.arrayX.length; j++) {
          
          if(this.pos.x < t.arrayX[j].posX + t.charSpaceX / 2 &&
             this.pos.x > t.arrayX[j].posX - t.charSpaceY / 2) 
          {
            
            if(this.lastTextX==t.arrayX[j].posX&&
               this.lastTextY==t.arrayY[i].posY)
              {
                continue;
              }
            
            else
              {
                //let s = String.fromCharCode(int(random(200, 900)));
                t.characters[t.arrayY[i].index + j] = " ";
                t.addText(" ", t.arrayX[j].posX, t.arrayY[i].posY);
                
                if(this.lastI != 0){
                  //let s = String.fromCharCode(int(random(200, 900)));
                  t.characters[t.arrayY[this.lastI].index + this.lastJ] = " ";
                  t.addText(" ", this.lastTextX, this.lastTextY);
                }
                
                if(this.thirdI != 0){
                  //let s = String.fromCharCode(int(random(200, 900)));
                  t.characters[t.arrayY[this.thirdI].index + this.thirdJ] = " ";
                  t.addText(" ", this.thirdTextX, this.thirdTextY);
                }
                
                if(this.foruthI != 0){
                  //let s = String.fromCharCode(int(random(200, 900)));
                  t.characters[t.arrayY[this.foruthI].index + this.foruthJ] = "";
                  t.addText("", this.foruthTextX, this.foruthTextY);
                }
                
                if(this.thirdI != 0)
                  {
                    this.foruthI = this.thirdI ;
                    this.foruthJ = this.thirdJ ;
                    this.foruthTextY = this.thirdTextY ;
                    this.foruthTextX = this.thirdTextX ;
                  }
                
                if(this.lastI != 0)
                  {
                    this.thirdI = this.lastI;
                    this.thirdJ = this.lastJ;
                    this.thirdTextY = this.lastTextY;
                    this.thirdTextX = this.lastTextX;
                  }               
                this.lastI = i;
                this.lastJ = j;
                this.lastTextX=t.arrayX[j].posX;
                this.lastTextY=t.arrayY[i].posY;
              }
            
            //textLayer.addText("",textLayer.arrayX[j].posX,textLayer.arrayY[i].posyY;
          }
        }
        
        //print("here");
        //         this.positions[0] = this.pos;

        //         for( let i = 10; i>=0; i= i-1)
        //           {

        //             if(this.positions[i] != null)
        //               {
        //                 print(i);
        //                 this.positions[i+1] = this.positions[i];
        //               }
        //           }

        //         this.positions[1] = this.lastPos;
        //         //print(this.positions);
        //         let opacity = 255;
        //         for(let i = 0; i<=10; i++)
        //           {
        //             if(this.positions[i] != null)
        //               {
        //                 ellipse(this.positions[i].x, this.positions[i].y,5);
        //               }
        //           }
        
        if (this.count == 0) {
          this.count = 0;
           noStroke();
          fill(255, 0, 0, 50);
           // //print(this.lastPosX);
           ellipse(this.lastPos.x, this.lastPos.y, 5);
        }

        if (this.count == 0) {
          this.lastPos.y = this.pos.y;

          this.lastPos.x = this.pos.x;
        }

        this.count++;

          noStroke();
          fill(255, 0, 0);
          //print(this.pos.y);
          ellipse(this.pos.x, this.pos.y, 6);
      }
    }
  }
}
