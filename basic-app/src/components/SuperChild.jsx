import { useContext } from "react";
import { GlobalInfo } from "../App";

function SuperChild()

{

    const {Globalcolor,Getday} = useContext(GlobalInfo)
    const day="sunday"
    return(
        <>
              <h1>color of superchild {Globalcolor}</h1>
              <button onClick={()=>Getday(day)}>get day</button>
        </>
  
    )
}


export default SuperChild