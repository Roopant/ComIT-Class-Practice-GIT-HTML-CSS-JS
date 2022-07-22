/*Node Architecure*/

console.log('first statement')

setTimeout(()=>{                       
    console.log('inside time out')
},1000)                          ////This operation will take minimum guarannted time 1000millisecond ,maybe more

console.log('last statement')

/*As node can be perceived as multi-threaded and non blocking, so line 3 will run first
and then line 9 and then after 1000 milli second,function SetTimeOut would try to execute.
We can see in terminal. Basically when there is such operation like SetTimeOut,Javascript
sends it to Node Environment to deal with it and it moves out of program under the hood and moves to
next line thread line 9 . Node see ok you want me to wait for 1second minimum and then it send that function
to callback Queue and wait for callstack (where all other threads like line 9 and so on are being executed currently) 
to get empty and after that function is sent in JavaScript for execution. This is event loop basically*/

//console.log(window)// we get error because window is in browser only, here we write "global"
console.log(global)