
import { useReducer } from "react"; 


// function UseReducer()
// {
//     const initialstate=0
//     const reducer = (state,action)=>
//         {
//            switch(action)
//            {
//              case "Increment":
//                 return state=state+1
//              case "Decrement":
//                 return state=state-1
//              default:
//                 return state
//             }
//         }
//         const [count,dispatch]= useReducer(reducer,initialstate)
//         console.log(useReducer(reducer,initialstate))
//     return(
//        <>
//          <h1>{count}</h1>
//          <button onClick={()=>dispatch("Incremet")}>increment</button>
//          <button onClick={()=>dispatch("Decrement")}>decrement</button>
//        </>
//     )
// }



function UseReducer() {
    const initialstate = 0;
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;
            default:
                return state;
        }
    };

    const [count, dispatch] = useReducer(reducer, initialstate);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </>
    );
}

// Note-> this is the goood practice means action are store in the js object with "type" property 

export default UseReducer;


/*ABOUT useReducer---->

useReducer is a react hook used for state management
it is a alternative of useState() hook
preferable for complex state management logic or to hadle multiple states */ 

// NOTE-->
// dispatch is a function returned by useReducer. It allows you to send (or "dispatch") an action to the reducer function.

// The dispatch function acts as the interface between your component and the reducer logic. It ensures that the reducer function is called with the    
// correct context (current state and action), updating the component's state and triggering a re-render if necessary.

// IF WE CAN NOT PASS REDUCER Function IN THE useReducer then it will not return any function so you will store undefined in the dipatch variable to avoid this you need to pass reducer in the useReducer

