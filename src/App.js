import './App.css';
import React,{useState,useEffect} from 'react'

function App() {
  const [num,setNum] = useState(0)
  useEffect(()=>{
    document.title=`点击了${num}次`
  }, [num])
  return (
    <div className="App">
      <p>点击{num}次</p>
      <button onClick={()=>{setNum(num+1)}}>BUTTON</button>
    </div>
  );
}

export default App;
