import { useContext } from "react";
import { GlobalInfo } from "../App";
import SuperChild from "./SuperChild";

function Child()
{
    const {Globalcolor} = useContext(GlobalInfo)

    return(
        <>
          <h1>this is child and color is {Globalcolor}</h1><br>
          </br>
          <h1>This is super child </h1>
          <SuperChild></SuperChild>
        </>
        
    )
}


export default Child


