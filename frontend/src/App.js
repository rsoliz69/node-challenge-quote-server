
import './App.css';
import react, {useEffect,useState} from "react"

function App() {
  const [quotesData, setQuotesData] = useState([]);
  useEffect(()=>{ fetch(
    '/quotes/random'
  )
.then((res)=> res.json())
.then((data)=> {
  console.log("data",data)
  
  setQuotesData(data)
})},[])
 
  return (
    <div className="App">
      <header className="App-header">
        <p>{quotesData.quote}</p>
        <h5>{quotesData.author}</h5>
      </header>
    </div>
  );
}

export default App;
