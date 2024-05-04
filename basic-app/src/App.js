// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Footer from './components/Footer';
import Message from './components/Message';
import Counter from './components/Counter';
import CounterFive from './components/CounterFive';

function App() {
  return (
    <div className="App">
     <Heading></Heading>
     <Greet name='VAIBHAV'></Greet>
     <Paragraph name="webdev"><p>We are writing paragraph of my self below</p></Paragraph>
     <Footer></Footer>
     <Message></Message>
     <Counter></Counter>
     <CounterFive></CounterFive>
    </div>
  );
}

export default App;
