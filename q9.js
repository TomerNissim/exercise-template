function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
function duplicate(arr){
    let duplicateArray = [];
    for (let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                if(!duplicateArray.includes(arr[j])){
                    duplicateArray.push(arr[j]);
                }

            }
        }
    }
    return duplicateArray;
}    
out = duplicate(JSON.parse(input));
/**/
 output.innerText = out;
}