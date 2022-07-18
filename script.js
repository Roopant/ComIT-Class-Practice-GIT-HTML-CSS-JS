/*scope and closure*/

const sum =(a,b)=>a+b// javascript understand it as {return a+b}
const sub=(a,b)=> a-b

const calculate =(a,op,b)=>
{
if (op==='+') return sum(a,b)
if (op==='-') return sub (a,b)

}
console.log(calculate(2,'+',4))
console.log (calculate(2,'-',4))

const result='str'//This result is defined globally
const calculate2 =(a,op,b)=>
{
    const result = 0//this result is defined inside calculate2 function { }
if (op==='+') {const result =sum(a,b); return result}// this result is defined here { }
if (op==='-') {const result= sub(a,b); return result}// this result is defined here { }

}
console.log(calculate2(4,'+',6))
console.log (calculate(10,'-',2))

/*Variable result is defined again and again irrespective of constant keyword 
due to its local scope { } and global scope. Any variable defines within { } lives and
dies within that scope only. It is defined in memory only when it enters {
    and is deleted from memory when } ends. That variable is not accessible from outside
    its scope.*/

    const division = (a,b)=>{
        const divide= a/b
        return divide
    }
    console.log(division(3,2))

    /*console.log(divide)-it will Throw an error because divide is not defined here , it is defined in local scope { } of function division
    we are in global scope and by being in global scope, we can't access variable divide- outside from local scope { } 
    but viceversa is possible -means local scope has access to global scope but not other local scopes*/



    const logging =()=>{
       const i=10
       if(i===10) {
        const j=20
        console.log (i,j)

       }// This local scope of code block has access to i which is defined in global scope of function logging
      //if (j===20)-if we run this in below code without defining j , it will throw an error because below code scope has no access to scope of above code

      {  const k=30
        const j=40
        const i =60// it will again define i with new value 50, but we just write i=50 without const,it will throw an error that assignment to constant variable because it will access global scope where it has been defined already as constant variable
      console.log(i,j,k)}// value of i here in local scope overrides value of global scope if defined again
    }
  // This overriding thing create bugs,so it is always preffered to define variables in local scope ,not global scope in order to avoid such ambuiguities.
    
  logging()

  /* So understanding the scope, scope has access to its own scope, scope of its parents
  and its grand parents and above also, but it doesn't have access to scope of its
  siblings and no access to scope of its children too.
  Goes from inside to outside*/

  /*Best Practices for defining functions-
  1) use camelCase
  2) use verb to define what function will do
  3) use isOpen like name if result is boolean-true or false
  4) parameters should be named meaningful
  */