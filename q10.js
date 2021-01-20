let newArray = [];
function compare(a,b)
{
    return a - b;
}
function union(array1,array2)
{
    array1 = array1.sort(compare);
    array2 = array2.sort(compare);
    console.log(array1);
    console.log(array2);
    let index1 = 0; 
    let index2 = 0;
    while((index1 < array1.length) && (index2 < array2.length))
    {
        if(array1[index1] > array2[index2])
        {
            if(!newArray.includes(array2[index2])){
                newArray.push(array2[index2]);
            }
            index2++;
        }
        else if(array1[index1] < array2[index2])
        {
            if(!newArray.includes(array1[index1])){
                newArray.push(array1[index1]);
            }
            index1++;
        }
        else
        {
            if(!newArray.includes(array1[index1])){
                newArray.push(array1[index1]);
                index1++;
            }
        }
    }

    while(index1 < array1.length)
    {
        if(!newArray.includes(array1[index1])){
            newArray.push(array1[index1]);
        }
        index1++;
    }
    while(index2 < array2.length)
    {
        if(!newArray.includes(array2[index2])){
            newArray.push(array2[index2]);
        }
        index2++;
    }
    return newArray;  
}    
console.log(union([1,5,8,4],[2,6,5,8,2,100,2])) ;
