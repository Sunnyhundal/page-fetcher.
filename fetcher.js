const request = require('request');
const fs = require('fs');
const { log } = require('console');
const URL = process.argv [2]
const FILE = process.argv [3]


const download = function() {
  
  request(URL, function (error, response, body) {
    // console.log(`error:`, error);
    // console.log(`StatusCode`, response && response.statusCode);
    // console.log(`body:`, body);
  fs.writeFile (FILE, body, err =>{
    if (err){
      console.log(err);
  }
   fs.stat (FILE, (err, stats) => {
      if (err){
        console.log('File does not exist');
      }else{
        console.log('Downloaded and saved ', stats.size , ' bytes to ', FILE);
      }
    })
    
  });
  });
   
}
download();