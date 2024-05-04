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
    </div>
  );
}

export default App;
