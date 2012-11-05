function load_files(filelist) {

  // call the load function with the file list
  var _number_of_files = filelist.length;
  for ( var i = 0; i < _number_of_files; i++) {
    
    // TODO check if valid format
    
    // read the file
    var reader = new FileReader();
    reader.onerror = errorHandler;
    reader.onload = loadHandler(filelist[i]);
    
    // start reading this file
    reader.readAsArrayBuffer(filelist[i]);
    
  }
  
}



//
// the HTML5 File Reader callbacks
//

// setup callback for errors during reading
var errorHandler = function(e) {

  console.log('Error:' + e.target.error.code);
  
};

// setup callback after reading
var loadHandler = function(file) {

  return function(e) {

    // reading complete
    var _data = e.target.result;
    
    // all done, start the parsing
    parse(_data);
    
  };
  
};
