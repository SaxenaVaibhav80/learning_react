import { useState ,useRef} from "react"

function UseRef()
{

    const [num,setNum]=useState(0)
    const inputone = useRef()
    const inputtwo=useRef()
    console.log(inputone)
   
    const printHello=()=>
        {
            console.log("helllo")
            console.log(inputone.current)
            inputone.current.style.width="400px"
            
        }
    const printWorld=()=>
    {
        console.log('world')
        console.log(inputtwo.current)
    }
    return(
        <>
           <input value={num} type="number" ref={inputone}  onChange={(e)=>
            {
                
                setNum(e.target.value)
            }
           }/>

           {/* Note=>        
              When you create a ref and pass it to a any component, the ref holds a reference to the instance of that component, allowing you to interact with it directly through the ref.current property. 
              
               When you use a ref attribute like ref={inputone}, it passes the reference of that component (or DOM element) to the current property of the inputone ref
          */}

           <input value={num} type="text"  ref={inputtwo} onChange={(e)=>
            {
                setNum(e.target.value)
            }
           }/>
             
           <button onClick={()=>printHello()}>hello</button>
           <button onClick={()=>printWorld()}>world</button>
        </>
    )
}


// NOTE FOR INPUT---->In React, input elements can be either controlled or uncontrolled:

// Controlled Components: The component's state is linked to the input field's value. This typically happens when the value prop is set on the input field, making React control the value. Changes to this value must go through React state management.

// Uncontrolled Components: The input field manages its own state, similar to a plain HTML input. React doesn't control the value, allowing it to change freely without interference from React's state system.



// why we use on change here?

// as that component is controlled so updation will not visible at frontend till state is not manage so we can manage state with two method

// mathod1-- use onclick funtion to run function and that will set your state
// method2-- use onChange function 
export default UseRef