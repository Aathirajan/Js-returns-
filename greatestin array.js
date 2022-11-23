const Higharray = (array) => {
    let result = 0;
    for (let i of array) {
        if (i > result) {
            result = i;
        }
        else {
            return result
        }

    }
    console.log(result)
}

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
Higharray(x)
