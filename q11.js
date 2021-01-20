function removeNotNumber(arr)
{
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if((typeof arr[i] === "number") && (arr[i] !== 0) &&  (arr[i].toString() !== "NaN")){
             newArray.push(arr[i]);    
        }
    }
    return newArray;
}
console.log(removeNotNumber([NaN, 0, 15, false, -22, '',undefined, 47, null]));