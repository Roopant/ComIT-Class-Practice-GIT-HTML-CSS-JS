/*Conditional Statements*/


/*if(is a keyword) (condition){
    run a code
}*/

const temp=-10

if (temp<0){
    console.log('wear a coat')
}

/*if (condition) { 
    run this code
}
else {run this another code
}*/

if (temp>0){
    console.log('wear a t-shirt')
} else {
    console.log('wear a coat')
}

/*if(condition){
    run this code
} else if (new condition){
    run this another code
}*/

const rain=true
if (temp <0 && rain){
    console.log('wear jacket & take umbrella')
} else if ( temp <0 && !rain){
    console.log('wear a jacket')
}

/*switch statement-another way to run conditional statement*/
switch (temp) {
    case 10:// you have to examine against pre-determined values ,not ranges < or >
        console.log('temperature is high')
        break
    case 0:
        console.log('temperature is low')
        break
    case -10:
        console.log ('temperature is cold')
        break// break is control statement , they control the flow of program, break will stop execution of program at this point and terminate block of code we are running at.
    default:// if none of the pre-determined values are met,then default behaviour
      console.log('no predetermined value of temp present')
        break;
}

let temperature= 20

if (temperature >0){
    console.log('wear t-shirt') // it is one liner -means one line of code
}else {
    console.log('wear shirt')// we can remove {} in one liner
}

temperature =-10
if (temperature<0)console.log('wear shirt')
else console.log('wear t-shirt')

/*ternary operator- condition? case.1: case.2*///for single line of code in if else statement
temperature=15
console.log(temperature>0? 'wear t-shirt':'wear shirt')

/*Short-Circuiting-direct conditions and console.log*/
let a= 2
let b =-3

a>0 && b<0 && console.log(a+b)// javascript will evaluate from left to right- true and true will be true so it will evaluate what is inside the console.log
a>0 && b>0 && console.log(a+b)// true and false would be false , so short circuit happens here and javascript will stop here and console.log wouldnt be evaluated
a<0 || b<0 && console.log(a+b)// false or true would be true and there is and sign, so javascript would evalute the console.log
a<0 || b>0 || console.log(a)// there is OR condition, first is false, so it will go on to see if second is false or true, second is also false and then it will evaluate the third condition, no short circuit here but if there was true found, javascript would stop and do short circuit and doesn't move to next condition
a>0 || b>0 || console.log(b)// true is found at first condition only, so javascript stops there only
a>0 && b>0 || console. log(b)// true and false would be false, so it moves to next condition to see if it is true and by doing this, it evaluates the console.log
a>0 && b<0 || console.log(b)//true and true would be true, so javascript stop here.



/*truthy and falsy- if we provide non-boolean variables with conditional operators
, javascript would try to make sense what the programmer is doing
in terms of boolean expression-whether true or false*/

console.log(Boolean(10))//Boolean expression of 10 is true.its truthy value

console.log(10 && 'string')// javascript looked at 10 and it is truthy value in boolean context and it moves next and string is also truthy value and it evaluates the last value string and console.log it

/*Data types in terms of Truthy and Falsy
               Falsy  Truthy
String          ""     "character" or "emptyspace"
Number           0      any other number
Boolean        false    true
Undefined  always falsy
Null       always falsy 
Array                   always truthy even empty array []//it has reference in memory ,it exits
Object                  always truthy
*/

console.log(Boolean(''))//empty string
console.log(Boolean(' '))//empty space
console.log(Boolean(0))// zero
console.log(Boolean(true))//boolean
console.log(Boolean(undefined))//always false
console.log(Boolean(null))//always false
console.log(Boolean([]))//array always true
console.log(Boolean({}))//object always true

/*combining truthy and falsy concept with short-circuiting*/
console.log(a>0 && b>0 && console.log(a+b))//true and false  would return false

console.log(0 && 10)//0 is falsy value and there is and ahead, so falsy value , no need to go ahead, output would be 0 because javascript evaluate the last value before the code is terminated
console.log(a>0 && b<0 && (a+b))

console.log(10 && 20 && 30,true && false)