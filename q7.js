function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");    
    let out = "";
/**/
function leapYear(year1,year2){
    let arr = [];
    for(let i = year1; i <= year2; i++){
        if(i % 400 === 0){
            arr.push(i);
        }
        else if((i % 4 === 0) && (i % 100 !== 0) ){
            arr.push(i);
        }
    }

    return arr;
}


let temp = (JSON.parse(input));
out = leapYear(temp[0],temp[1]);
/**/
 output.innerText = out;
}