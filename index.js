const fs = require("fs");



//fs.writeFile("message.txt","Hello from Nodejs!", (err)=>{
    //if (err) throw err;
    //console.log("This message has been saved");
//});

fs.readFile("./message.txt",'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 

