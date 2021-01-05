const fs = require("fs");
const passeports = fs
.readFileSync(`${__dirname}/input4.txt`)
.toString()
.split("\n\n");

//console.log(passeports.length);

let validPasseports = [];

for (let i = 0; i < passeports.length; i++) {
    let fields = passeports[i].toString().split(/\n|\s/);  
    if (fields.length === 8) {
        validPasseports.push(fields);
    }else if (fields.length === 7) {  
        if (!fields.toString().includes("cid")) {
            validPasseports.push(fields);
        }
    };
};    
for (let a = 0; a < validPasseports.length; a++) {
    let line = validPasseports[a].toString().split(",");
    line.sort();
    console.log(line[5]);
    for (let b = 0; b < line.length; b++) {
        let miniLine = line[b].toString().split(":");
        var key = miniLine[0];
        var value = miniLine[1];
    }
    // console.log(key);
    // console.log(value);
    //console.log(validPasseports); 
 };
// console.log(key);
// console.log(value);

//console.log(validPasseports);