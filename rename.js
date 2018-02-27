'use strict';

// change to your language to prefix srt files
let srtPrefix = '.por';

// change to your extensions
let extensions = [ '.srt', '.mkv', '.avi', '.mp4' ];

// change to your directory
const directory = process.argv[2] || '.';

// regular expression
const reg = process.argv[3] || /S\d{1,2}E\d{1,3}/g;

// libs
const fs = require('fs');
const path = require('path');

// read dir
fs.readdirSync(directory).forEach(file => {
  
  // variables
  let ext = path.extname(file);
  let name = file.match(reg);

  // if invalid ext
  if (extensions.indexOf(ext) < 0) {
    console.log("Invalid Extension:" + file);
    return false;
  }
  // if pattern not found
  if (!name || name.length == 0) {
    console.log("Pattern not found:" + file);
    return false;
  }
  // srt prefix with
  if (ext == '.srt') {
    ext = srtPrefix + ext;
  }

  // adjust
  let newName = name[0] + ext;
  fs.renameSync(directory + '/' + file, directory + '/' + newName);
  console.log("Renamed file: " + file + " to: " + newName);

});