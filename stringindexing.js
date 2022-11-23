let length = (phrase) => {

    let result = 0;

    for (let index in phrase) {
        // console.log(Number(index)+1)
        result = Number(index) + 1

    }

    return { result }
}

// let phrase ='Hi how are you?'

let phrase = prompt('Enter your String here')
console.log(length(phrase))
