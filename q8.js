function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
function binarySort(arr,num){    
    let firstIndex = 0;
    let lastIndex = arr.length;
    let middleIndex  = Math.floor((firstIndex + lastIndex)/2);
    while(arr[middleIndex] !== num){
        middleIndex = Math.floor((firstIndex + lastIndex)/2);
        if(num > arr[middleIndex])
        {
            firstIndex = middleIndex ;
        }
        else if(num < arr[middleIndex])
        {
            lastIndex = middleIndex ;
        }
    }
    return middleIndex;
}
let temp = JSON.parse(input)
out = binarySort(temp[0], temp[1]);
/**/
 output.innerText = out;
}






