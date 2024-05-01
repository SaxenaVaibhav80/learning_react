// import { useState } from "react"  // state for functional component 
import React ,{Component} from 'react' // state for class component 

// Yes, that's generally correct. Let's delve into the differences between props and state in React to understand why props are considered static while state is considered dynamic.

// Props---->


// Definition: "Props" (short for properties) are inputs to a React component. They are used to pass data from a parent component to a child component.

// Static in Nature: Props are considered "static" because they are passed down from parent to child and do not change within the component that      receives them. The parent component controls props, and if they need to change, the parent must update them, causing the child component to re-render with the new props.

// Immutable: Once a component receives props, it should not modify them. Props should be treated as read-only within the component, ensuring that data flows in one direction—from parent to child.

// Usage: Props are typically used for communication between components, providing configuration, and supplying data for rendering.

// State--->



// Definition: "State" refers to data managed internally within a component. Components can maintain state that can change over time based on user interactions, asynchronous data, or other logic.

// Dynamic in Nature: State is considered "dynamic" because it can change within the component, leading to re-renders and updates to the user interface. Components can have internal logic that updates state in response to events or other factors.

// Mutable: Unlike props, state can be changed within the component using React's useState hook (in functional components) or setState (in class-based components). This allows components to be interactive and responsive to user input.

// Usage: State is used when a component needs to manage data that changes over time, such as form inputs, toggle states, or asynchronous data from APIs.



// Now i want to do that clicking on click button i want to change 'visite my site' to ' thanks for visiting'
// method 1 using functional component-->
// method 2 using class component-->



// USING METHOD 1---->

// function Message()
// {
//   const [head,setHead] = useState("Visit my site")
//   function handleClick()
//   {
//     setHead('Thanks for visiting')
//   }

//   return(
//     <>
//       <h1>{head}</h1>
//       <button onClick={()=>handleClick()}>click</button>
//     </>
//   )

// }


// USING METHOD 2-->

class Welcome extends Component{

  constructor()
  {
    super()
    this.state={
       message:'visite my website'
    }
  }

  handleClick()
  {
    this.setState({
      message:'thanks for visiting'
    })
  }
  render()
 {
  return (
  <>
     <h1>{this.state.message}</h1>
     <button onClick={()=>this.handleClick()}>click</button>
  </>

  )

 }
}


// ABOUT CLASS BASED COMPONENT IN REACT ----->
   
  //  constructor: This is a special method used in class-based components to initialize state and bind event handlers. It's called when a new   instance of the class is created.



// WHY REQUIRE SUPER METHOD ?------>

/*
 When using class-based inheritance in JavaScript, including React class components, it's essential to call super() in the child class's         constructor to initialize the parent class. This ensures that the child class inherits the parent class's properties and methods and behaves correctly according to JavaScript's object-oriented principles.
*/

/* Note->  When a child class has a constructor, it must call the parent class's constructor using super() to maintain the inheritance chain.
           This process is known as "constructor chaining." */

//   Initialization of Parent Class:--> 
//       The parent class might have its initialization logic, state setup, or other configurations that need to 
//       run before the child class's constructor. By calling super(), you ensure the parent class's constructor is executed, allowing it to set 
//       up any required context

//    Access to 'this':--> 
//       In JavaScript class-based inheritance,the this keyword in the child class's constructor is not available until super() 
//       has been called.This limitation ensures that the parent class is properly initialized before the child class attempts to reference itself.
  
//     Inheriting Properties and Methods:-->  
//        "Even if the child class doesn't explicitly use the parent class's properties or methods",
//         calling super() ensures that the child class inherits these features and behaves as expected in the class hierarchy.



export default Welcome