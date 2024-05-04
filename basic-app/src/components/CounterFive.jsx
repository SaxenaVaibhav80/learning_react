import { Component } from "react";


class CounterFive extends Component{

 constructor()
 {
    super()

    this.state={
        count:0
    }
 }

 increment(){

  // ES6 syntax->

   // increment(){
   //    this.setState((prevState)=>({count:prevState.count+1}))
   //    console.log(this.state.count)
     
   //  }

   // ES5 syntax-->

      this.setState(function(prevState) {
         console.log("ps",prevState)
        return { count: prevState.count + 1 };
      });
      console.log(this.state.count);

   // using only set state->

   // this.setState({
   //      count:this.state.count+1
   //  })
   //  console.log(this.state.count) 

}

 
 incrementFive()
 {
    this.increment()
    console.log('a')
    this.increment()
    console.log('b')
    this.increment()
    console.log('c')
    this.increment()
    console.log('d')
    this.increment()
    console.log('e')
 }
 render()
 {
    return(
        <>
          {this.state.count}
          <button onClick={()=>this.incrementFive()}>increment</button>
        </>
    )
 }

}

export default CounterFive

// case 1 when you use directly the setState------------>


// React's setState Function:

// In React, setState is used to update the state of a component. However, it doesn't immediately update the state. Instead, it schedules a state update. This asynchronous behavior is important to understand.
// State Update in React:

// When you call setState, React doesn't update the state instantly. Instead, it combines multiple state updates into a single re-render. This is called "batching." It means that if you call setState multiple times in quick succession, React may group those updates together and render once, rather than multiple times.


// First Scenario:

// Here's the increment function with the first pattern:

// increment() {
//   this.setState({
//       count: this.state.count + 1
//   });
//   console.log(this.state.count);
// }

// In this case, you're using the current state directly (this.state.count) and adding 1. But since React's setState is asynchronous, the new state value isn't immediately reflected when you call console.log(this.state.count). It may still show the old value.
// If you call this function 5 times (like you would in incrementFive), React might "batch" those updates and perform a single re-render. The output might not be the expected value since all the updates could be based on the same initial state.

// --------------------------------------------------------------------- CASE 2----------------------------------------------------------


// on scenario 2 or case 2----->


// increment()
// {
//    this.setState(function(prevState) {
//       console.log("ps",prevState)
//      return { count: prevState.count + 1 };
//    });
//    console.log(this.state.count);
// }

// basicallly on clicking btn the function execute incrementFive then its 1st line execute this.increment and controle  reaches to increment function as setstate is async so it take time to setstate but immediately console.log in increment function execute then control recahes to incrementfive then console(a) will print then increment function call then control reaches to increment funcion again setstate function execute  but it add prev state to count and doesnot updae immediately and console.log will print 0 and control reach to incrementfive and then increment function call.... after last increment function call the site will rerender and throw output on screen 




// CONSOLE RESULTS ---->

// CounterFive.jsx:31 0
// CounterFive.jsx:46 a
// CounterFive.jsx:31 0
// CounterFive.jsx:48 b
// CounterFive.jsx:31 0
// CounterFive.jsx:50 c
// CounterFive.jsx:31 0
// CounterFive.jsx:52 d
// CounterFive.jsx:31 0
// CounterFive.jsx:54 e
// CounterFive.jsx:28 ps {count: 0}
// CounterFive.jsx:28 ps {count: 1}
// CounterFive.jsx:28 ps {count: 2}
// CounterFive.jsx:28 ps {count: 3}
// CounterFive.jsx:28 ps {count: 4}
// CounterFive.jsx:31 5
// CounterFive.jsx:46 a
// CounterFive.jsx:31 5
// CounterFive.jsx:48 b
// CounterFive.jsx:31 5
// CounterFive.jsx:50 c
// CounterFive.jsx:31 5
// CounterFive.jsx:52 d
// CounterFive.jsx:31 5
// CounterFive.jsx:54 e
// CounterFive.jsx:28 ps {count: 5}
// CounterFive.jsx:28 ps {count: 6}
// CounterFive.jsx:28 ps {count: 7}
// CounterFive.jsx:28 ps {count: 8}
// CounterFive.jsx:28 ps {count: 9}

// NOTE--> here 28,52,54,31,50, is line number of code 


// Batching in React -->

// Batching and State Updates in React
// In React, updates to state may be batched to improve performance. This means that if several state updates are made within a short timeframe, React might group them together to avoid unnecessary re-rendering. When you call setState, React doesn't immediately update the component's state. Instead, it marks the component as "dirty" and schedules a re-render. As a result, any subsequent calls to setState within the same execution cycle can be batched together, with React applying the updates in a single re-render.


//NOTE-> in above code batching is done in both case to avoid unnecessary rendering 