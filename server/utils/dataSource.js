const fs = require("fs");
const csv = require("fast-csv");

let stream  = null;
let testData = [];
try{
    stream  = fs.createReadStream("server/utils/files/expenditur.csv");
}
catch(error){
    console.log("Error reading files: " + error);
}

let csvStream = csv()
    .on("data", function(data){
        testData.push(data);
    })
    .on("end", function(){
        createJsonString(testData); 
    })
    stream.pipe(csvStream);


function createJsonString(data){

    let expenditureArray = [];

    for(let i =1; i<data.length;i++){
        let expenditure = data[i];
        let jsonData = {}
        for(let j =0; j<expenditure.length; j++){
           jsonData[data[0][j]] = expenditure[j];
        }
        expenditureArray.push(jsonData);
    }

    console.log(expenditureArray);
    writeToJsonFile(expenditureArray);
    
}

function writeToJsonFile(jsonData){
    jsonData = JSON.stringify(jsonData);
    fs.writeFile("data.json", jsonData, function(err){
        if(err){
            console.log("Cannot write to file: " + err);
        }
    });
}