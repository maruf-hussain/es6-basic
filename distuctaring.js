const Person = {
    name: 'Maruf',
    age: 27,
    phone: 52456211,
    address:{
        city: 'satkhira',
        zip: 9400,
        state: 'khulna'

    }

};

const {name,age,address} = Person;
console.log(address.zip);