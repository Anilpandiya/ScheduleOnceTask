import { Component } from '@angular/core';

import { GetOutputFileService }  from './get-output-file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputContent  = '';
  outputContent = '';

  constructor(private getoutfileServ : GetOutputFileService){}
  
  // below Method for accessing input file
  openFile(event) {

    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
        let reader = new FileReader();
        reader.onload = () => {
            // this 'text' is the content of the file
            var text = reader.result;
            //console.log(text);
            this.inputContent = text.toString();
        }
        
          reader.readAsText(input.files[index]);
          console.log('Got Input File....');
    };
}

// below Method for getting segment weights & respective result
get7segment = function (ascii) {
  var lines = ascii.split('\n');
  var retVal = "";

  console.log('Inside get7segment..')

  for (var line = 0; line < lines.length; line = line + 2) {
    var arr = [ [], [], [], [], [], [], [], [], [] ]; // A 2D array defined for numbers(9) & segments(7) 
    var k = 0;
    if (lines[line] == null || lines[line] == undefined)
      continue;
    var a = lines[line].split('');
    for (var i = 1; i < a.length; i++) {
      if (a[i] == '_') {
        arr[k][0] = true;
      }
      i++;
      i++;
      k++;
    }
    if (line < lines.length) {
      line++;
      if (lines[line] == null || lines[line] == undefined)
        continue;
      a = lines[line].split('');
      k = 0;
      for (var i = 0; i < a.length; i++) {
        if (a[i] == '|') {
          arr[k][5] = true;
        }
        i++;
        if (a[i] == '_') {
          arr[k][6] = true;
        }
        i++;
        if (a[i] == '|') {
          arr[k][1] = true;
        }
        k++;
      }
    }
    if (line < lines.length) {
      line++;
      if (lines[line] == null || lines[line] == undefined)
        continue;
      a = lines[line].split('');
      k = 0;
      for (var i = 0; i < a.length; i++) {
        if (a[i] == '|') {
          arr[k][4] = true;
        }
        i++;
        if (a[i] == '_') {
          arr[k][3] = true;
        }
        i++;
        if (a[i] == '|') {
          arr[k][2] = true;
        }
        k++;
      }
    }
    for (var t = 0; t < arr.length; t++) {
      var result = 0;
      for (var u = 0; u < arr[t].length; u++) {
        if (arr[t][u])
          result += Math.pow(2, u);
      }
      var res = this.getNumber(result) + "";
      retVal += res;
      // console.log(res);
    }
    retVal += '\n\n';
  }
  //console.log(retVal);
  this.outputContent = retVal;
  return retVal;

};

// below Method will gave the respective number based on segment weights.
 getNumber = function (n) {
  switch (n) {
    case 63:
      return '0';
    case 6:
      return '1';
    case 91:
      return '2';
    case 79:
      return '3';
    case 102:
      return '4';
    case 109:
      return '5';
    case 125:
      return '6';
    case 7:
      return '7';
    case 127:
      return '8';
    case 111:
      return '9';
    default:
      return '?';
  }

}

//below Method is for calling service
download(){
  this.getoutfileServ.down(); 
}

}
