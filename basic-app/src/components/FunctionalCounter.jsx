import { useState } from "react";

function FunctionalCounter (){


 const [count,setCount]=useState(0)

 function increment()
 {
    setCount(count+1)
 }

    return(
        <>
          {count}
          <button onClick={()=>increment()}>increment</button>
        </>
    )


}

export default FunctionalCounter 


// here's what happens:

// 1. Initialization of State---->

// useState Hook: The useState hook initializes a new piece of state with an initial value (0 in this case).
// Tuple Return: It returns a tuple with two elements:
// Current State (count): Represents the current value of the state.
// State Setter (setCount): A function used to update the state.