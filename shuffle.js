// Shuffle
// Recreate the ​shuffle()​built into JavaScript, to efficiently shuffle 
// a given array’s values. Do you need to return anything from your function?

function shuffle(array) {

    for (let i = 0; i < array.length; i++) {
        let placeHolder = array[i]
        let randomIndex = Math.floor((Math.random() * array.length))
        console.log(randomIndex);
        let placeHolder2 = array[randomIndex]
        array[i] = placeHolder2
        array[randomIndex] = placeHolder

    }

    return array;
}

console.log(shuffle([1, 2, 3, 4, 5]))