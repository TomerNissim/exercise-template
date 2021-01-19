function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
function sortArray(arr){
    let newArray = [];
    let index = arr[0];
    let indexLocation;
    let arrLength = arr.length;
    for(let i = 0 ; i < arrLength; i++)   {
        for(let j = 0; j < arr.length; j++){
            if(arr[j] < index ){
                index = arr[j];
                indexLocation = j;
            }
        }
        newArray.push(index);
        arr.splice(indexLocation,1)
        index = Infinity;
    }
    return newArray;
}
out = sortArray(JSON.parse(input));
/**/
output.innerText = out;
}