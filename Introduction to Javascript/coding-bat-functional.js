//doubling 
function doubling(arr){
    for (let index = 0; index < arr.length; index++) {
        arr[index] *=2;
        
    }
    return arr;
}

console.log(doubling([2, 4, 6]));

//copies3 
function copies3(arr){
    for (let index = 0; index < arr.length; index++) {
        arr[index] += arr[index] + arr[index];
        
    }
    return arr;
}

console.log(copies3(["a", "bb", "ccc"]));

//rightdigit 
function rightdigit(arr){
    for (let index = 0; index < arr.length; index++) {
        arr[index] = arr[index]%10;
        
    }
    return arr;
}

console.log(rightdigit([1, 22, 93]));


