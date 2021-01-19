function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
function evenGetDashes (num){
    let strNum = num.toString();
    let newStr = strNum[0];
    for(let i = 1; i < strNum.length; i++){
        if((parseInt(strNum[i-1]) % 2 === 0) && (parseInt(strNum[i]) % 2 === 0)){
            newStr = newStr + "-" + strNum[i];
        }
        else{
            newStr = newStr + strNum[i];

        }

    }
    return newStr;
}


out = evenGetDashes(input);
/**/
output.innerText = out;
}
