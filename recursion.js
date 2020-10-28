// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(arr){
    if(arr.length===0) return 1;
    return arr.shift() * productOfArray(arr)

}
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
function contains(obj,val){
    for(var key in obj){
        if(typeof obj[key]=== 'object'){
            return contains(obj[key],val);
        }
        if(obj[key]=== val){
            return true;
        }
    }
    return false;
}