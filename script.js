/*Errors*/

/*Type Error

const i= 2
i=5

*/

 /*Reference Error

 console.log(j) */// if something is undefined ,then reference error

 /*Throw Error yourself*/

 const sum=(a,b)=>{
if ((a!==0 && !a) || (b!==0 && !b)) throw new TypeError('Invalid Arg.')
return a+b
 }

 console.log(sum(1,1))
 console.log(sum(1,0))
 //console.log(sum(2))//it will throw an error with our comment- Throw is keyword & new is also keyword but it is also used to make new objects in classes

 /*Handling Errors in code*/

 try {
  console.log(sum(1,2))
 } catch (error) {
  console.log('We got an error')//this will only run if there is error in try
 } finally{
console.log('we are at final step')
 }

 try {
  console.log(sum(1))
 } catch (error) {
  console.log('We got an error')// there is error in try, so it catch error and instead of throwing error and terminating the program, it do whatever is there in 'catch'
 } finally{
console.log('we are at final step')
 }

 try {
  console.log(sum())
 } catch (error) {
  console.log('We got an error')// there is error in try, so it catch error and instead of throwing error and terminating the program, it do whatever is there in 'catch'
  console.error(error)//by doing this we can display error to programmer just like actual error is shown in code, but it will not break the program
} finally{
console.log('we are at final step')
 }
 
 try {
  console.log(sum())
 } catch {// we can omit the (error) or (e) if we are not dealing with error in code below
  console.log('We got an error')// there is error in try, so it catch error and instead of throwing error and terminating the program, it do whatever is there in 'catch'
} finally{
console.log('we are at final step')
 }


 const foo= ()=>{
  try {
    console.log(sum())
   } catch (error) {
    console.log('We got an error')// there is error in try, so it catch error and instead of throwing error and terminating the program, it do whatever is there in 'catch'
    throw error//it will execute line 65 and line 68 but after that it will throw error at next programmer whoever is calling foo function in line 73 and break the program at that point
  } finally{
  console.log('we are at final step')
   }


 }
 //foo()// This will throw error and break code due to line 66