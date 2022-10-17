// InvertHash
// Create invertHash(assocArr) that converts a hash’s keys 
// to values and values to corresponding keys. 
// Example: given ​{"name": "Zaphod"; "numHeads": 2}​, return ​{"Zaphod": "name"; 2: "numHeads"}​. 
// You will need to learn and use a JavaScript ​for ... in​ h​ere!

function invertHash(map) {
    let newMap = {}
    for (let key in map) {
        console.log("next round");
        let placeholder = key;
        newMap[map[key]] = placeholder
        console.log("here it is ", newMap)
    }

    return newMap
}

console.log(invertHash({ "name": "Zaphod", "numHeads": 2 }))