// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Footer from './components/Footer';
import Message from './components/Message';
import Counter from './components/Counter';
import CounterFive from './components/CounterFive';
import FunctionalCounter from './components/FunctionalCounter';
import UseEffect from './components/UseEffect';
import Child from './components/Child'
import OtherChild from './components/OtherChild';
import { createContext } from 'react';



// The createContext() function is a method provided by the React library that creates a new context object. This context object can be used to share data across a React component tree without having to pass props down through every level of the tree. It allows components to "subscribe" to certain values or states and react to changes in those values.

// What createContext() Returns
// When you call createContext(), it returns an object with two main components:

// Provider: A component that allows you to specify what value(s) should be made available to all components within its subtree. You set these values via the value prop.
// Consumer: A component that allows you to consume or "subscribe" to the context's values. It uses a render prop to access the current context value.


export const GlobalInfo = createContext()
const color="red"
const GetDay= (day)=>
  {
    console.log(day)
  }
function App() {
  return (
    <div className="App">
     <Heading></Heading>
     <Greet name='VAIBHAV'></Greet>
     <Paragraph name="webdev"><p>We are writing paragraph of my self below</p></Paragraph>
     <Footer></Footer>
     <Message></Message>
     <h1>This is normal counter using class component</h1>
     <Counter ></Counter>
     <h1>This is  counter using 'useState" in functional component</h1>
     <FunctionalCounter ></FunctionalCounter>
     <h1>This is counter , counting in multiple of 5 using prev state, using class component</h1>
     <CounterFive></CounterFive>
     <UseEffect></UseEffect>
     <h1>child component</h1>
    <GlobalInfo.Provider value={{Globalcolor:color,Getday:GetDay}}>
      <Child></Child>
      <OtherChild></OtherChild>
    </GlobalInfo.Provider>
   
    </div>
  );
}

export default App;


// Note---> 

