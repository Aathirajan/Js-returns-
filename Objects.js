let person = {
    name: 'Aathi',
    age: '23',
    graduated: 'false',
    skill: 'Fsd'
  }
  console.log(person.name)
  console.log(person.age)
  console.log(person.graduated)
  
  console.log(person['age']);
  
  // assign new entries
  
  person.ph='6374654894'
  console.log(person)
  person.mother='fathima';
  console.log(person)
           
  
  //objects inside function 
  const introducer=(name,age,mother,asset,liablities) => {
    let person = {
    name: name,
    age: age,
    mother:mother,
    asset:asset,
    liablities:liablities,
    networth: function()
    {return this.asset-this.liablities}
  }
    const intro=`Hi!My name is ${person.name}. My age is ${person.age}.My mother name is ${person.mother}. My networth is ${person.networth()}
    Nandri!`
      return intro;
  }
  console.log(introducer('Aathi','23','fathima','100000','500000')) 