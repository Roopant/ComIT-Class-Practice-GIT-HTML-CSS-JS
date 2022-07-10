

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

/*Operators*/

/*Assignment Operators*/
const example ={
    name: 'Roopant',
}
console.log(example)

/*Arithmetic Operators + - * / %(Modulus)*/

const x = 7
const y = 2
const z= x%y
console.log('x%y =',z)


/*Comparison Operators >, >=, < , <= ,==,===,!=,!==)*/

const a=2
const b=4
c= a<b
console.log('c:',c)

const d=2
const e=3
const f = d >=e
console.log ('f:',f)

const g=1
const h='1'
let i = g==h
console.log ('i:',i)

i=g===h // strict equality -data type check also
console.log('strict i:',i)

i= g!=h//g not equal to h loose not equality
console.log('loose i:',i)// they are equal in value , so false

i=g!==h// g not equal to h strict equality
console.log('not equal i :',i)// they are equal in value, not equal in data type,so true

/*logical operators- (&&-And, ||- Or, !-Not- these operators are used if we like to compare two or more conditions/comparisons*/
const isFromAlberta = false
const isFromIndia = true

let winner= isFromAlberta && isFromIndia //And
console.log('winner:',winner)

winner= isFromAlberta || isFromIndia // OR
console.log('winner:',winner)

winner = !isFromAlberta// !Not flipps the condition
console.log('winner:',winner)

console.log('mathquiz:', (10>2) && !(5<2))// true && !(false)

/*string operators*/

let p = '1'+ '2'// here operands 1 and 2 are not numbers , they are strings so + doesn't act as addition operator
console.log(p)// + concantenate 

p='1  '+'2'
console.log(p)// Concantination doesnt introduce space by itself, we have to give space like in this example

/*another way to concentate using template literals*/
let r ='kavita'
let q='sethi'
p=`${r} ${q} is my wife`// this ` back tick is used to define template and {} is a placeholder for variables and "is my wife"is literal string and if we omit $ sign before the placeholder{}, only variable name would be displayed, not its value.
console.log(p)//$ is required to display the value of variable

r= 'Roopant'
q='kalra'

p=`${r} ${q} ,   is alone in this world without happiness`
console.log(p)