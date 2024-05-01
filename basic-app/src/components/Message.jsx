import { useState } from "react"
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


function Message(){

  const [para,setPara] = useState("Visit my site")

function handleClick(){

  setPara('Thanks for visiting')
  
}

return(
    <>
      <h1>{para}</h1>
      <button onClick={()=>handleClick()}>click</button>
    </>
)


}


// no i want to do that clicking on click button i want to change 'visite my site' to ' thanks for visiting'

export default Message 