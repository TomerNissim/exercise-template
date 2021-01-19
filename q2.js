function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
function firstArray(arr,index){
    
    let newArray = [];
    if(arr.length === 0)
        return arr;
    if(index > 0){
        for(let i = 0; i < index && i < arr.length; i++){
            newArray.push(arr[i]);
        }
        return newArray;
    }
    if(index <= 0){
        return newArray; 
    }
    return arr[0];
        
}       


//לא הצלחתי לגרום שאני אכניס באינפוט 2 פרמטרים שונים 
out = firstArray(JSON.parse(input),1) ;
/**/
output.innerText = out;
}