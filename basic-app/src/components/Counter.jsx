import { Component } from "react";


class Counter extends Component{

 constructor()
 {
    super()

    this.state={
        count:0
    }
 }

 increment(){

    this.setState({
        count:this.state.count+1
    })
    console.log(this.state.count) 
 }
 render()
 {
    return(
        <>
          {this.state.count}
          <button onClick={()=>this.increment()}>increment</button>
        </>
    )
 }

}

export default Counter 



// why on console there is a counter less by 1 from the counter in the frontend or app?----->

// If the console output is showing a count that's one less than the displayed value in the frontend, the likely cause is that setState is asynchronous in React. This means that when you update the state, React doesn't immediately update the state and re-render the component. Instead, it batches state updates and re-renders for efficiency.




// How to Address This Issue--->

// Using a Callback:--->
// you can use a callback. This callback is executed after React completes the state update and  re-rendering.

// increment() {
//   this.setState(
//     {
//       count: this.state.count + 1,
//     },
//     () => {
//       console.log(this.state.count); // This will show the updated count
//     }
//   );
// }

// By providing a callback function as the second argument to setState, you ensure that the code inside the callback executes after React has completed updating the state and re-rendering the component.