//mapBully
function mapBully(map){
    map["b"] = map["a"];
    map["a"] = "";
    return map; 
}
console.log(mapBully({'a':'candy', 'b':'dirt'}));

//topping1

function topping1(map){
    map["bread"] = "butter";
    if(map["icecream"]){
        map["icecream"] = "cherry";
    }

    return map; 
}
console.log(topping1({"pancake": "syrup"}));

function mapAB2(map){
    if(map["a"] === map ["b"]){
        map.splice(0,2);
    }
    return map;
}
console.log("hi");
console.log(mapAB2({"a": "aaa", "b": "aaa", "c": "cake"}));