//DOM discussion//
//DOM is basically model which shows properties of different elements of  document in the form of objects.

// Everytime we open a new tab in browser, JavaScript would create a new window object specific to that tab
//document object in console is your DOM and document is webpage 

console.dir(document.body)// to see body element of document in object representation

/*if we see body, we can see children of body, it is HTML collection
collection means an array, like all the elements under parent"body"
in the form of array with index numbers. and inside each index element
, it shows all the properties that an element can take. So basically
children become an array of objects */

/*JavaScript has capability to read and write to DOM. Going everytime
in console to understand the DOM structure is very tedious.
So Browser gave API Application Programming Interface to deal with DOM
APIs are basically functions only which can be used to deal with application itself*/

// function when attached to an object or class is known as method

//Node is basically every object located within a document

/*Create element and inject it to DOM*/

const para=document.createElement('p') // create a new element with p tag in javascript memory
const body=document.querySelector('body')//getting reference to body, queryselector works same as the way selectors work in CSS
body.appendChild(para)// making p as child of body -linking both body and p as parent and child respectively. Append child means adding para as child of body
para.innerHTML='hello child'/* writing inside p tag between opening and closing tags of element 
and can also add even whole new elements ,not just text -
like whatever you want for example <div>hello</div> will be shown in body as 
<p> 
<div>hello</div>
<p>*/

/*changing element style*/

para.style.color = 'red'
para.style.fontWeight= 900
para.style.fontSize= '10px'// we have to mention in '' bcoz css understand 32px but for javaScript it is a string

/*Try to change multiple CSS properties of element in one go- 
because we can't do para.style={ } as it will change reference 
and .style is read only property.so we have to write single single CSS to change as line 33-35
Another method is shown below if we have to do it in one go, we can use CssText and with a back-tick `*/

const heading= document.querySelector('h1')
heading.style.cssText=
`color:red;text-decoration:underline;`


/*changing element attributes*/

para.setAttribute('class','dom-newelement')//attribute name and attribute value
console.log(para.getAttribute('class'))//to display value of attribute

/*events- As a webpage,click a button,motion, scrolling, page is loading,close window
All these events are being monitored continously by browser and we are able to listen to events and
do something about them */

const btn =document.createElement('button')
body.appendChild(btn)
btn.textContent= 'click me!'// textcontent to edit text content inside element

const htmlButton = document.querySelector('.html-button')//by this we give reference to element from html

para.textContent='nothing to submit'
para.classList.add('hide') // to add a class to element



htmlButton.addEventListener('click',()=>{                //we are listening events on htmlButton element, it takes two paramaters- event and function
    console.log('hey , i am clicked')
    para.classList.remove('hide')// so when we click button ,class hide and its CSS property is removed and p is displayed
})// so when we click htmlButton, code block inside would run



