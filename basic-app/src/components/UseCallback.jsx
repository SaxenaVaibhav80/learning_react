// NOTE---> memo  and useCallback are similar . the main difference is that useMemo returs a memoized value and useCallback returns a memoized function 
// To avoid unwanted rerendering of the child component in the parent component we use either use  memo or useCallback


// Why use callback  if memo is sufficient ?

// no memo is not sufficient because in memo.jsx we saw that it stop the rerendering of the child element but what if i pass a function in the child as prop , on rerendering of the component the child component will also re-render because of the refrential equality in that case if parent component load and the function in that component will aslo recreate and when if that function pass to the child function as props then child component will think that there is some change and get re render

// practical example----->
import { useCallback } from "react"
import { useState } from "react"
import ChildThree from './ChildThree'

function UseCallback()
{
    const helloIAmChild=useCallback(()=>
        {
            console.log("heyy i am child ")
        },[])
    const [count,setCount]=useState(0)
    return(
        <>
          <ChildThree helloIAmChild={helloIAmChild}></ChildThree>
          <h1>{count}</h1>
          <button onClick={()=>setCount(count+1)}>click</button>
        </>
    )
}
export default (UseCallback)
// export default memo(UseCallback)  // on doing this child will also rerender