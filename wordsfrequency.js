// Now we are about to practice word frequency

const Wordfrequency = (phrase) => {
    let result = {}
    let words = phrase.split(' ')
    for (let word of words) {

        if (word in result) {
            result[word] += 1;
        } else {
            result[word] = 1;
        }

    }
    return result

}
let UserInput = prompt('Enter your sentence...')
console.log(Wordfrequency(UserInput))