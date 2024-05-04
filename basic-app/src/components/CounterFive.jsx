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

      this.setState(function(prevState) {
         console.log("ps",prevState)
        return { count: prevState.count + 1 };
      });
      console.log(this.state.count);
      
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