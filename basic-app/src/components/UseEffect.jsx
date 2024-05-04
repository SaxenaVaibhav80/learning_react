import { useEffect,useState} from "react";

function  UseEffect ()
{
   const [count , setState]=useState(0)
 
    const increment=()=>
        {
            setState(count+1)
        }

      //   useEffect(()=>          // will work when component load first time or when you change ANY variable's  state 
      //    {
      //       alert('effect work')
      //    })


      // useEffect(()=>          // will work only when component load first time 
      // {
      //    alert('effect work')
      // },[])

      useEffect(()=>          // will work only when component load first time  and when count will set or update 
      {
         alert('effect work')
      },[count])

    return (
       <>
          <h1>{count}</h1>
          <button onClick={()=>increment()}>increment</button>
       </>
    )

   

}

export default UseEffect