let intro = (name, Age, phone, mother) => {
    let person = { name: name, Age: Age, phone: phone, mother: mother }

    let introduction = `Hi! My name is ${person.name}, my age is ${person.Age}. My phone number is ${person.phone} and my mother name is ${person.mother}.`

    return introduction;
}


console.log(intro('Aathi', '25', '9047540800', 'Fathima'))
