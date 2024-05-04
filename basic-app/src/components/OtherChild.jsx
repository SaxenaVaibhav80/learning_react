import { useContext } from "react";
import { GlobalInfo } from "../App";

function OtherChild()
{
    const {Globalcolor} = useContext(GlobalInfo)

    return(
        <h1>color of other child is {Globalcolor}</h1>
    )
}


export default OtherChild