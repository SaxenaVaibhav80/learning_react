// NOTE---> memo  and useCallback are similar . the main difference is that useMemo returs a memoized value and useCallback returns a memoized function 

// To avoid unwanted rerendering of the child component in the parent component we use either use memo or useCallback

import { useState , memo} from "react";
import ChildTwo from "./ChildTwo";

const Memo=()=>
    {
      const [count,setCount]=useState(0)
        return(
            <>
             <ChildTwo></ChildTwo>  
               <h1> {count}</h1>
               <button onClick={()=>setCount(count+1)}>click</button> 
            </>
         
        )
        
    }

    // without useMemo if we click on the click button then childTwo will rerender with the UseMemo component to avoid this or enhance the performance we use useMemo

export default  memo(Memo)


