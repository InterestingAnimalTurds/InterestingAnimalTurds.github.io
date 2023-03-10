class FileAccess{
  
  
  
  constructor(filework_logic_monitor,ElementName){
    this.filehandle;
    this.writefilehandle;
    this.file;
    this.content = "";
    this.newContent = "";
    this.dictionaryhandle;
    this.writable;
    this.Is_filepicker = false;
    this.file_logic = filework_logic_monitor;
    this.divOpenfile = document.getElementById(ElementName);
    this.divOpenfile.addEventListener('click',async()=>{
     
      [this.filehandle] = await window.showOpenFilePicker();

      })
  }
  
    async readFile(){
      this.file = await this.filehandle.getFile();
      this.content = await this.file.text();
      this.file_logic.Is_filein = true;
      this.divOpenfile.remove();
    }
 
  async writeinFile(){
    
    print("writing");
    this.writable = await this.filehandle.createWritable();
    
    await this.writable.write(this.newContent);
    
    await this.writable.close();
    
  }
  
  content_update()
  {

    this.writeinFile();
    print("w");

  }
  
}

class LogicMonitor
{
  constructor()
  {
    this.Is_filein = false;

  }


}