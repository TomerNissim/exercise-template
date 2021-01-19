    function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
   function isArray(input){
       if(toString.call(input) === "[object Array]")
            return true;
        else 
            return false;     
   }
   out = isArray(JSON.parse(input));
/**/
    output.innerText = out;
}