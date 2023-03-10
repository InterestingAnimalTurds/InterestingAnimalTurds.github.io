class FileworkGenerator {
  constructor(amount, delayAmount, subSpeed, subAmount) {
    this.delayAmount = delayAmount;
    this.subSpeed = subSpeed;
    this.subAmount = subAmount;
    this.amount = amount;
    this.fileworks = new Array();
    this.allClear = false;
  }

  generate() {
   let a = random(1, this.amount+1);
    for (let i = 0; i < a; i++) {
      this.fileworks[i] = new Filework(
        Math.random() * (windowWidth),
        windowHeight,
        random(6, 8)
      );
      let impulse = new p5.Vector(random(-2, 2), random((-1*(windowHeight/10)), (-1*(windowHeight/10))));
      this.fileworks[i].addForce(impulse);
    }
  }

  display(t) {
    for (let i = 0; i < this.fileworks.length; i++) {
      this.fileworks[i].display(t);
    }
  }
  
  update() {
    for (let i = 0; i < this.fileworks.length; i++) {
      let gravity = new p5.Vector(0, 0.1 * this.fileworks[i].mass);
      this.fileworks[i].addForce(gravity);
      
      if(this.fileworks[i].vel.y > 1 && this.fileworks[i].exploded == false)
        {
          this.fileworks[i].exploded = true;
          this.generateSubFileworks(this.fileworks[i]);
          print("exploded");
        }

      this.fileworks[i].update();
      
      }
    for (let i = 0; i < this.fileworks.length; i++) {
      if(this.fileworks[i].pos.y>windowHeight){
        this.allClear = true;
      }
      else{
        this.allClear = false;
        break;
      }
    
    }
    
    if(this.allClear == true)
        {
          this.generate();
        }
  }
  
  generateSubFileworks(f){
    let last = this.fileworks.length;
    let radians = (Math.PI * 2) / this.subAmount;

    for(let i = 0; i<this.subAmount; i++){
      //print(i);
        this.fileworks[last+i] = new Filework(f.pos.x,f.pos.y,5);
        this.fileworks[last+i].exploded = true;
      
     
        
    
    //this.fileworks[(this.fileworks.length)+i].exploded = true;
      let impulse = new p5.Vector(Math.cos(radians * i) * Math.random() * int(random(1,50)),   Math.sin(radians * i) * Math.random() * int(random(1,50)));
    
        this.fileworks[last+i].addForce(impulse);
  
      }
    
    
      
  }
}
