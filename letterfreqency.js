const letterfrequency = (phrase) => {
    let resultobj = {}

    for (let letter of phrase) {
        if (letter in resultobj) {
            resultobj[letter] = resultobj[letter] + 1;
        }
        else {
            resultobj[letter] = 1;
        }

    }
    return resultobj
}

console.log(letterfrequency('haha'))