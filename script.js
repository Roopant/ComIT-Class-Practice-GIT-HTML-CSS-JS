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

/*Loops and Iterations
Loop is piece of code to repeat over and over again
until there is a condition that is not valid anymore
and that code is terminated*/

/* ; semi-colon in javascript terminates the line*/

/*for loop- 
first initate the variable,
first we start with i = 0// INITIALISE
then we check condition i<users.length //CHECK CONDITION
then we run the code inside {}//RUN THE CODE
then increment i & assign to left, new i=i+1 //INCREMENT
then again check condition new i <users.length// CHECK CONDITION
then again run code // RUN CODE
then increment new i & assign to left , new new i= new i+1 // INCREMENT 
LOOP GOING ON

*/

for (let i=0; i < users.length ; i=i+1 ) {
    console.log(`${i}:`,users[i].name)
}

/*Augmented Operators*/
// i=i+1  i++  short hands
// i=i-1  i--  short hands
// i= i+1  ++i  short hands
// i=i-1   --i  short hands

/*there is difference between ++i and i++ but i would by incremented by 1 in both cases
In i++ , increment operations happens after the assignment phase*/

let a=0
let b= a++//first assignment from right to left would happen and then increment of a
console.log (b)//b would be 0 but a is incremented
console.log(a)// a would be 1

a=0
b=++a//first increment of a would happen and then evaluation result would be assigned from right to left
console.log(b)// a would be incremented and evaluated result would be assigned so 1
console.log(a)//a would be 1 

/* when you pass an expression like a++ or ++a 
to function console.log,it is similar to assigning
a variable like above b case*/

console.log(a++)//first do assignment to log and then increment
console.log(++a)//first increment and then return

/* Augmented Assignment operators*/
//i=i+1  i+=1 short hands
// i=i-1   i-=1 short hands
// i=i*3   i*=3 short hands
// i=i/4   i/=4 short hands
// i=i%2   i%=2 short hands

for (let i=0; i < users.length ; i++ ) {
    console.log(`${i}:`,users[i].age)
}
/* in above example, i is loop counter
let i=0 is loop initialiser
i<users.length is loop condition
i++ is loop increment /loop action*/

/*While Loop*/
//if you know condition where your iteration should end, while loop should be your first choice
// while loop run on loop condition, not loop counter , we don't know how many iterations would go on and we check on condition
// used in search operations

const familyname='Kavita'//we are searching for this specifically
let i=0
let neighbour=users[i].name // this variable is placeholder for name 
while(neighbour!==familyname)// to check condition if neighbour name is not equal to familyname which we are searching, execute the below code
{ i++
neighbour=users[i].name}
console.log(`Kavita is object no.${i}`)

/* to explain this, first we define what we are looking for
then we started with i= 0 to look that name
then we defined a neighbour placeholder for names
then we define condition that if this neighbour name is not equal to familyname
increment i and now new i, so new neighbour name 
check condition again -is new neighbour name is equal to familyname, if not keep going
otherwise if equal,come out of while loop, break code and exits and toward the end, console.log */

/*do-while loop-
it runs the first iteration without 
checking the condition*/

const broName= 'naveen'
k=0
do {
neighbour=users[k].name
k++
}
while (neighbour!==broName)
console.log(`Naveen is object no.${k-1}`)


/* in above example, first of all, code inside do {} would run atleast once 
without checking the condition- neighbour and then k++
then condition would be checked if  neighbour 
is equal to broName or not and if not then repeat
otherwise  if it is equal so when loop breaks
as k++ is after neighbour, so it would be
already incremented by 1 ,so console.log 
k would be one extra unncessary value.
so we do (k-1) to see true result.
 */



/*Short hand ways of using loops*/

const result=users.find((user)=>user.name ===broName)

console.log(result)

/*1) find will perform a search operation for us 
and it takes a function with parameter "user" and condition
and for each user in this array and user is treated
as elements of array and in this case those are
objects. and we need to check condition if user.name is broName.
So, basically users(array) would use find method to loop through each user (element of array)
which is basically object here to see if this condition is met or not.
when condition is met at any point, find would stop
and return the user (that element , in this case--- object) .
and that evaluation would be assigned from right to left.
So, basically we see console.log (user) when
condition is met*/


/*2) if you want to itierate without condition
like repeat the process from start to end of array
without termination condition, we use forEach*/

users.forEach((user)=>{
    console.log(user)
})

users.forEach((user)=>{
    console.log(`hello ${user.name}`)
})

/*basically forEach method is going to each user(element of array) and 
repeating the code written for each element (user)*/

//3) Short hand for objects(elements) of array

family=[
    {relation:'Son',
    age:29},
    {
        relation:'mother',
        age:52
    },
    {relation:'wife',
      age:29},
    { relation : 'brother',
        age:40}
]


for (let user of family){
    console.log(user)
}
/* define a variable 'user' is placeholder for iteration & assign the first index and return its value to variable 
and it will iterate from start of array till it reach end of array
and console.log all user (elements) which are objects in this case*/

for (members of family){
    console.log(members)
}
/*in above case,you can notice even without defining a variable, we are still 
able to see the results-need to ask Amr? */

//4)Short hand for keys of object

for (key in family[1]){
    console.log(key)
}
//basically iterating through keys of object

for (let key in family[1]){
    console.log(key)
}
//same result with let- then why let required? need to ask Amr