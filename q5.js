function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
let newArray = [];
function printArray(arr){
    for(let i = 0; i < arr.length; i++ ){
        newArray.push("row "+i);
        for(let j = 0; j < arr[i].length; j++){
            newArray.push(arr[i][j]);
        }
    }
  return newArray;
}
out = printArray(JSON.parse(input));
/**/
 output.innerText = out;
}