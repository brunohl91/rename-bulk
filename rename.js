'use strict';

// change to your language to prefix srt files
let srtPrefix = '.por';

// change to your extensions
let extensions = [ '.srt', '.mkv', '.avi', '.mp4' ];

// change to your directory
const directory = '.';

// libs
const fs = require('fs');
const path = require('path');

// read dir
fs.readdirSync(directory).forEach(file => {
  
  // variables
  let ext = path.extname(file);
  let name = file.match(/S\d{1,2}E\d{1,3}/g);

  // if invalid ext
  if (extensions.indexOf(ext) < 0) {
    console.log("Invalid Extension:" + file);
    return false;
  }
  // if pattern not found
  if (name.length == 0) {
    console.log("Pattern not found:" + file);
    return false;
  }
  // srt prefix with
  if (ext == '.srt') {
    ext = srtPrefix + ext;
  }

  // adjust
  let newName = name[0] + ext;
  fs.renameSync(file, newName);
  console.log("Renamed file: " + file + " to: " + newName);

});