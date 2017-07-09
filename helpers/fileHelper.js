var fs = require('fs');

fs.writeFile("./jasmineHelperOutput.txt", "Hey there!", function(err) {
    
    if(err) {
        return console.log(err);
    }

}); 

