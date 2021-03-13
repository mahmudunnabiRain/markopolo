import './App.css';
import Header from './components/Header'
import Admin from './components/Admin'
import axios from 'axios'
import { useEffect } from 'react'

function App() {


  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/helloWorld')
    console.log(results)
  }



  return (
    <div className="Container">
      <Header title="Markopolo.Ai"/>
      <Admin />
      <p></p>
    </div>
  );
}

export default App;
