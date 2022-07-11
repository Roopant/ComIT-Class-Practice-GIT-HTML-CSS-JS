/* how to check array is empty- we have to check for the length*/

let mark=[10,0]
console.log(mark.length)//length lists the no. of elements in array
console.log(mark? 'pass':'fail')

mark=[]
console.log(mark? 'pass':'fail')//still be pass because empty array is truthy

console.log(mark.length? 'pass': 'fail')//now fail because length is 0 which is falsy value

/* how to check for empty object*/

let user={
    Name :'Roopant',
    age : 29
}
const objKeys = Object.keys(user)//This Object.keys will give all keys of objects in form of array
console.log(objKeys)

console.log(objKeys.length? 'pass':'true')//length is 2

user ={}
console.log(user? 'pass':'fail')//pass because empty object always truthy value
console.log(Object.keys(user).length? 'pass':'fail')//this would be fail because object keys would return array whose length would be zero
