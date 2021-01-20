function elementInArray(arr, property){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].hasOwnProperty(property)){
            newArray.push(arr[i][property]);
        } 
            
    }
    return newArray;
}

let library = [{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}];
   
    console.log(elementInArray(library,'author'));
