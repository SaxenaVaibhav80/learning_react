import React from 'react'

// function Greet()
// {
//     return <h1>hello mr. vaibhav god morning</h1>  // this is jsx syntax and that jsx will converted into js using babel 
// }


// NOTE->JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML but is not natively understood by JavaScript engines. It's used to make React code more readable and expressive, allowing developers to write components and elements in a familiar, HTML-like syntax. However, JSX must be transformed into plain JavaScript to be understood by browsers or JavaScript environments.


// jsx syntax can be converted into the js syntax using babel
   const Greet = () =>{
     return React.createElement(
    'div',
    null,
    React.createElement('h1',null,'hello mr. vaibhav god morning')
   )
}


// PROPS--->
// 1-Props are arguments passed into React components.
// 2-Props are passed to components via HTML attributes.


// const greet =(props)=>
// {  console.log(props.name)
//     return <h1>hello mr. vaibhav god morning</h1>  // this is jsx syntax and that jsx will converted into js using babel 
// }


// using multiple component as a single component and exporting it --->

function Alert(props)
{
   return(
      <div>
         <Greet/>
         <h1>READ CAREFULLYYYY {props.name}</h1>
      </div>
   )
}



export default Alert