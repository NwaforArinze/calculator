function getHistory(){
    return document.getElementById('history-value').innerText;
}
//alert(getHistory());

function printHistory(num){
    document.getElementById('history-value').innerText = num;
}

//printHistory("61386+531573");
//alert(getHistory());

function getOutput(){
    return document.getElementById('output-value').innerText;
}
//alert(getOutput());

function printOutput(num){
    if(num==""){
        document.getElementById('output-value').innerText = num;
    }
    else{
        document.getElementById('output-value').innerText = getFormattedNumber(num);
    }
}

//printOutput('12334387962334');
//alert(getOutput());

function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

//printOutput('12334387962334');
//alert(getOutput());

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,""));
}

//alert(reverseNumberFormat(getOutput()));

var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener("click", function(){
        //alert(this.id);
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }

        else if(this.id=="backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){//if output has a value
                output = output.substr(0,output.length-1);
                printOutput(output);
            }  
        }

        else{
            var output = getOutput();
            var history = getHistory();
            if(output!=""){
                output = reverseNumberFormat(output);
                history = history + output;
                if(this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener("click", function(){
        //alert(this.id);
        var output = reverseNumberFormat(getOutput());
        if(output!=NaN){//if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}