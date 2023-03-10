var filework1;
var textLayer;
var fG;
var flag= false;
let File_access;
let filework_logic_monitor;


let one_min_time = 60000;
let start_time; 





let Start_Graphic;

let flag_filePicker_allowed_open = false;
let flag_Isfilepicker = false;
let flag_IsFilein = false;
let flag_filePicker_open = false;

let Debugging_Graphic;


function setup() {
  
  //frameRate(12)
  createCanvas(windowWidth, windowHeight);
  background(255);
  filework_logic_monitor = new LogicMonitor();
  File_access = new FileAccess(filework_logic_monitor,'divOpenFile');
  divOpenfile = document.getElementById("divOpenFile");
  
  //PUT TEXT HERE_________________________________
  // textLayer = new TextLayer(generateRandomText(40000), 10, 12);
  let gravity = 0.01;
 
  Start_Graphic = createGraphics(windowWidth,windowHeight);

  Debugging_Graphic = createGraphics(windowWidth,windowHeight);




  // textLayer.display();
  this.fGraphics = createGraphics(windowWidth, windowHeight);
  fG = new FileworkGenerator(10,1,1,10);
  fG.generate();
  mouseHoverCheck();

}

function draw() {
  //textLayer.displayImage.fill(255, 255, 255)
  //textLayer.displayImage.fill(255, 255, 255)
  checkFlag_is_mainLoop();

  if(!flag)
  {
    start_loop();
    if(flag_filePicker_allowed_open)
    {
      // waiting_for_files(flag_filePicker_open);
     // Debugging_Graphic.fill(255,0,0);
     // Debugging_Graphic.rect(windowWidth/2, windowHeight/2, 200,200);
      //image(Debugging_Graphic,0,0);
      
      waiting_for_files(flag_filePicker_open);
      
    }
  }
 
  if(flag){
    

    background(255);
    image(textLayer.displayImage, 0, 0);
    textSize(12);
    fG.update();
    fG.display(textLayer);
    // this.textLayer.display();
    let time = millis();
    // Timer_limits(time);
    
  }

  //textLayer.display();
}

// function Timer_limits(currentTime)
// {
//   if(start_time + 10000 < currentTime )
//   {
//     noLoop();
//     print("Test_Writing");
//     // this.textLayer.display();
//     File_access.newContent = this.textLayer.text;
//     File_access.writeinFile();

//   }


function checkFlag_is_mainLoop()
{
  if(flag_IsFilein)
  {
    upload_file_to_loop()
    loop();
    flag = true;
    flag_IsFilein = false;
  }

}



function waiting_for_files(flag_filePicker_open)
{
 if(flag_filePicker_open)
 {
  File_access.Is_filepicker= true;
  Debugging_Graphic.fill(0,255,0);
  Debugging_Graphic.ellipse(windowWidth/2, windowHeight/2, 200,200);
  readingFiles();
  flag_filePicker_open = false;
  File_access.Is_filepicker = false;

 }


}

function start_loop()
{
  Start_Graphic.background(255);
  Start_Graphic.rectMode(CENTER);
  Start_Graphic.rect(windowWidth/2, windowHeight/2, 200,200);
  Start_Graphic.textAlign(CENTER,CENTER);
  Start_Graphic.text("please click present your file for the show we thank you, we thank you (when you like what is presented press the 's' key to save, change and rearrange)",windowWidth/2, windowHeight/2,175,175);
  image(Start_Graphic,0,0);
  flag_Isfilepicker = false;
 

}


function upload_file_to_loop()
{
  
  if(File_access.content != "")
  {
    textLayer = new TextLayer(File_access.content, 10, 12);
    textLayer.display();
  
  }
  else
  {
    textLayer = new TextLayer(generateRandomText(40000), 10, 12);
    textLayer.display();
  }

}

function readingFiles()
{
    File_access.readFile();
    if(File_access.content !="" )
    {
      flag_IsFilein = true;
      start_time = millis();
    }
    
}

function keyPressed()
{
 
  if(key == "s")
  {
    print("Test_Writing");
    // this.textLayer.display();
    File_access.newContent = this.textLayer.text;
    File_access.writeinFile();
    //filework_logic_monitor.Is_filein = false;
    saveFrames('test','jpg',1,1);
  }
}




function mouseHoverCheck()
{
  divOpenfile.addEventListener("mouseover", event => {
   
    flag_filePicker_allowed_open = true;
    
   
    event.target.style.color = "red";
  });
  divOpenfile.addEventListener("click", event => {
   
    flag_filePicker_open = true; 
   
    event.target.style.color = "red";
  });
  
  divOpenfile.addEventListener("mouseout", event => {
    
    flag_filePicker_allowed_open = false;

    event.target.style.color = "black";
  });
}







function generateRandomText(number) {
  let i = 0;
  let word = "";
  for (let i = 0; i < number; i++) {
    let c = String.fromCharCode(int(random(200, 900)));
    word = word + c;
    i++;
  }
  return word;
}

function windowResized() {
  background(255);
  resizeCanvas(windowWidth, windowHeight);
  textLayer.display();
}
