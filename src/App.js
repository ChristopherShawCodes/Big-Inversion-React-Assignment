import './App.css';
import PersonCard from './Components/PersonCard'

function App() {
  return (
    <div className="App">
    <PersonCard firstName='Christopher' lastName='Shaw' age = {33} hairColor = 'brown'/>
    <PersonCard firstName='Brittany' lastName='Shaw' age = {32} hairColor = 'black'/>
    <PersonCard firstName='Alyssa' lastName='Shaw' age = {12} hairColor = 'black'/>
    <PersonCard firstName='Aiden' lastName='Shaw' age = {9} hairColor = 'black'/>

    </div>
  );
}

export default App;
