// Solution 1
function convertFahrToCelsius(fahr) {
    var msg = "";

    //check for data type of parameter
    if (typeof(fahr) === "boolean"){
        msg = fahr + ' is not a number but a/an ' + typeof(fahr);
        console.log(msg);
        return msg;

    }else if (Array.isArray(fahr)){
        fahrA = JSON.stringify(fahr)
        msg = fahrA + ' is not a number but a/an array';
        console.log(msg);
        return msg;

    } else if (isNaN(fahr)) {
        msg = fahr + ' is not a number but a/an ' + typeof(fahr);
        console.log(msg);
        return msg;
    }

    //Coversion formula
    else{
        //convert to number
        var cFahr = Number(fahr);
        var celc = ((cFahr - 32) * (5 / 9)).toFixed(4);
        console.log(celc);
        return celc;
    }
}




// Solution 2
function checkYuGiOh(num) {
    var numArray = [];
    var msg = "";
     
    // Check for parameter type
    if (isNaN(num)) {
        msg = 'Invalid parameter: ' + num;
        console.log(msg);
        return msg;
    }else if(typeof(num) === "boolean"){
        msg = 'Invalid parameter: ' + num;
        console.log(msg);
        return msg;
    }

    //convert to Number
    var val = Number(num);
    
    //yu-gi-oh algorithm
    for (let i = 1; i < val + 1; i++) {
        if (i % 30 == 0) {
            numArray.push("yu-gi-oh");
        }
        else if(i % 15 == 0 ) { 
            numArray.push("gi-oh");
        }
        else if(i % 10 == 0 ) {
            numArray.push("yu-oh");
        }
        else if(i % 6 == 0 ) { 
            numArray.push("yu-gi");
        }
        else if(i % 5 == 0 ) { 
            numArray.push("oh");
        }
        else if(i % 3 == 0 ) {
            numArray.push("gi");
        }
        else if(i % 2 == 0 ) { 
            numArray.push("yu");
        }
        else {
            numArray.push(i);
        }
    }
    console.log(numArray);
    return numArray;
}


//Test cases for Solition 1
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius(2);
convertFahrToCelsius("2");
convertFahrToCelsius("yes");
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});
convertFahrToCelsius(true);

//Test cases for solution 2
checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh(5);
checkYuGiOh("fizzbuzz is meh");
checkYuGiOh(true);

