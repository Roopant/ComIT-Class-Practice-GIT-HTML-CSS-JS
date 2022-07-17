const users=[
    {name : 'Roopant',
        age :29},
        {
            name: 'Kavita',
            age:29

        },
        {
            name: 'Nikunj',
            age:10
        },
        {
        name: 'naveen',
          age:40
        }
    ]

/*Functions*/// It is a way to reuse code again and again. To use logic, piece of code in a reusable state
//you can't use same function name multiple times

/* function keyword , then specific function name , then paranthesis()
and block of code inside function body{}
In () , parameters of functions are given*/

function greetOverEighteen(age,name){
if(age >=18){
    let greeting =`hello ${name}`
    console.log(greeting)
}
}
/* we have defined a function above with specific function name
greetOverEighteen with parameters inside paranthesis(),-age and name
and block of code is written inside function body{}. Please note that javascript
will not know what is age and name in block of code by themselves.
 First we have to define age and name as parameters in scope of function.
 So,this greetOverEighteen(age, name) is known as function signature
because it has to be used in exact name and exact order whenever to 
be called anywhere */

// now lets use this function in a loop

for(let i=0; i<users.length;i++){
    greetOverEighteen(users[i].age,users[i].name)

}
/* in above loop, on every iteration, we are passing an 
argument with the exact order as per function signature,
this loop would run & on each run, it will make a call to 
function "greetOverEighteen" and then this function would
be executed on each iteration. when we call function, arguments such
as age and name are passed but when we define function,those are called parameters*/

//if I want to greet One single person anywhere in my application
// I just write function name and pass 2 parameters

greetOverEighteen(10,'Nikunj')// it will not display as logic is not met
greetOverEighteen(50,'Kusam')//it will display as logic is met, age>18, so name would be console.log

/*Another way of defining functions as Arrow function syntax
const variable name = (parameters) => {code block} */

const greetUnderEighteen = (age ,name) => {
    if(age <18){
        let greeting =`hello ${name}`
        console.log(greeting)
    }
}
greetUnderEighteen(20,'Ram')
greetUnderEighteen(17,'Ram')

greetUnderEighteen()/*javascript will not throw any error 
if arguments are not passed in function call , 
it will think variable parameters are yet undefined
In such cases we can do something like this as below*/

const  elderToMe= (age ,name) => {
    if (!age || !name){
        console.log ('please enter valid data')
        return
    }
    if(age > 29){
        let Elder =`hello big elder ${name}`
        console.log(Elder)
    } // this is no logic after this bracket and after this there is closing bracket  of function,so at this point ,javascript automatically assume that you want to return at this point without any value ,so it terminates, there is no need to right return here
} 

elderToMe(30,'sham')
elderToMe() // () is calling a function but if  we are using call back function-like newfunction (elderToME), we are giving reference to this elderToME function,without (),not calling it


/* what this function will do, if there is no age or no name
like it is null, undefined or empty string, it would be false
but we are putting ! sign so it would evaluate as truthy value
and it will console. log 'please enter valid data' in such cases and
then return is a keyword to return a value in a function
- if anywhere return is mentioned without any parameters
what it will do, it will just terminate the execution of function at that point and come out of
the function*/

/* Currency Convertor*/
const currencyConvertor =(amount,rate)=>{
    return amount* rate//here parameter is mentioned after return , so it would return a value and that value would be amount * rate 
}
const rupee =currencyConvertor(100,60)// return value is assigned to rupee variable
console.log(rupee)

/*Fun Quiz Score*/
const funQuizScore =(scores)=>{    //scores as an array
    if (!scores?.length) return// it is optional chaining , under hood it will check first whether scores is an array or not and if yes it will check its length
    let quizSum=0
    scores.forEach((user)=>{  // this is anonymous function as it has no name
           quizSum+=user
    })
    return quizSum
}

/*!scores?.length means if scores doesn't have length property, please don't throw error at me
under the hood if !(Array.isArray (scores) && scores.length===0)
means if it is array -truthy && has length-truthy-so whole condition truthy
and !truthy is falsy, so it will nor return and function would go on
but if it is not array, it would be falsy and short-circuiting would happen
and !falsy is truthy ,so function will return and terminate right away*/

console.log(funQuizScore([1,2,3]))// first quiz sum =0 , then its become 0+1=1, then 1+2=3, then 3+3=6, so output=6
console.log(funQuizScore(20))// undefined because 20 is not array, it will return undefined due to optional chaining
console.log(funQuizScore({}))//undefined as it is an object, not array

/*console.log(funQuizScore('name'))// it will return an error because for each is not valid for strings
in case of strings, it will not be undefined, because string is generally an array of characters.
so it will pass optional chaining but get failed at forEach. In order to avoid this passing,
we have to give extra different condition  before optional chaining to check if scores is a string or not*/

/*Fun Quiz Score*/
const funQuiz =(scores)=>{    //scores as an array
    if(typeof scores==='string') return
    if (!scores?.length) return// it is optional chaining , under hood it will check first whether scores is an array or not and if yes it will check its length
    let quizSum=0
    scores.forEach((user)=>{  // this is anonymous function as it has no name
           quizSum+=user
    })
    return quizSum
}
console.log(funQuiz('roopant'))//now result is undefined because first scores checked for data type


/* New Currency Convertor if we have default parameters and we dont want to get undefined/NaN as a result
in case we don't pass any arguments */

const newCurrencyConvertor =(amount=100,rate=2)=>{
    return amount*rate
}
console.log(newCurrencyConvertor())//in case of no arguments will not return undefined, because we gave default value, so 100*2=200
console.log(newCurrencyConvertor(undefined, 4))//undefined will not be considered, default 100 is considered, and rate 4 overrides default value so, result would be 400
console.log(newCurrencyConvertor('roopant',5))//would return NaN (not a number), string*number is undefined which would converted to NaN under hood by javascript
console.log(newCurrencyConvertor(undefined,undefined))//would take default parameters
console.log(newCurrencyConvertor(undefined))//instead of undefined, it would take 100 and 2nd argument is not there ,so it will take 2, so answer=100*2=200

console.log(newCurrencyConvertor(null))/* it would give 0 becoz javascript would
do type conversion to number under the hood, null would converted to 0 and 0*2 would be 0*/

console.log(currencyConvertor(null))/* under the hood, first parameter null would be type
converted to 0 and another parameter we didn't give ,it is undefined, so 0*undefined would 
be undefined which is converted to NaN by javascript, so we get null as result*/

