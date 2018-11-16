import { Injectable } from '@angular/core';

@Injectable()

export class GetOutputFileService {

  //Service is defined for generating output files
  down(){
    this.downloadFile('output_user_story.txt',document.getElementById('textval').innerText);
  }
  
  downloadFile = function(filename, data) {

    try
    {
        // Try using msSaveBlob to save text file
        var blob = new Blob([data], {type:'text/plain'});
        if(navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, filename);
        }
       
    } catch(ex) //In case of exception occures
    {
        console.log("saveBlob method failed with the following exception:");
        console.log(ex);
    }
  }
  
}
