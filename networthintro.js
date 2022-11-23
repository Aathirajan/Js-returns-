
let intro = (name, Age, phone, mother) => {
    let person = {
        name: name, Age: Age, phone: phone, mother: mother, Asset: 50000, Liabilities: 25000,
        networth: function () { return this.Asset - this.Liabilities; }
    }

    let introduction = `Hi! My name is ${person.name}, my age is ${person.Age}. My phone number is ${person.phone} and my mother name is ${person.mother}. My networth is ${person.networth()}`

    return introduction;
}


console.log(intro('Aathi', '25', '9047540800', 'Fathima'))