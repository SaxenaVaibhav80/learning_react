// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
     <Heading></Heading>
     <Greet name='VAIBHAV'></Greet>
     <Paragraph></Paragraph>
     <Footer></Footer>
    </div>
  );
}

export default App;
