

/*Non-Primitive data type- OBJECT/

/*Array-subcategory of object*/

const kids=['Nikunj','Prisha','Nayra']
console.log(typeof kids)
console.log(kids)
console.log(kids[1])
console.log(kids[4])//undefined-javascript dont have any information about fourth element as it doesn't exist ,so it is default behaviour

/*Array with mix data type*/
const nephew=['Nikunj',10,true]
console.log(nephew)
console.log (nephew[2]) //access true value

/*array within array*/
const niece=['Prisha',14,['girl',true]]
console.log(niece)

console.log(niece[2][0])// access girl value

/* to reassign values*/
 niece[1]=15
 console.log[niece]
console.log(typeof niece)

niece[1]=16
console.log[niece]


/*Object-subcategory of object*/
const person={
    name:'Roopant',
    age:29,
    isCanadian:false,
}
console.log('person:',person)
console.log(typeof person)
console.log(person.age)//roopant age by dot notation
console.log(person['name'])//Roopant name by square notation
person.name='Roopant kalra' //to reassign value
console.log(person)

niece[0]='Parisha'
console.log(niece)