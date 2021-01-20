let arr = [];
let counter = 0;
let out = "";
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");    
    arr.push(input);
    out = "Element " + counter + ": " + input + "\n";
    counter++;
    output.innerText += out;
}