 function consoleLog(outputString) {
     var p = document.createElement('p');
     p.innerHTML = outputString;
     var parentElem = document.getElementById("outputChapter");
     parentElem.appendChild(p);
 }

 function clearDiv(){
     document.getElementById('outputChapter').innerHTML = '';
 }
