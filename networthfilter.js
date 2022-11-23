let actors = [
    { name: 'vijay', Networth: 4000000 },
    { name: 'Ajith', Networth: 800000 },
    {
        name: 'Simbu', Networth: 9000
    }
]
console.log(actors.filter(actor => actor.Networth < 10000))