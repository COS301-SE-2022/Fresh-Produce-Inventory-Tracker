const fs = require('fs');

var data = fs.readFileSync('../client/pages/data/data.json');
var myObject = JSON.parse(data);

let newData = JSON.stringify(myObject);

newData = newData.substring(0,newData.length-2) + ',{"id":1,"message":"Hello"}]}';

console.log(newData);

fs.writeFile('../client/pages/data/data.json', newData, err => {
    // error checking
    if(err) throw err;
    
    console.log("New data added");
});  