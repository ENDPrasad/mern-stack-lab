import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Quote from './components/Quote';
import CustomButton from './components/CustomButton';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState({quote:'You Only Live Once - YOLO',author:'unknown'})

  async function clickHandle() {
    await axios.get("http://localhost:5000/random").then(res=>{console.log(res);return res.data}).then(data=>setQuote({quote: data[0]['q'], author:data[0]['a']})).catch(err=>console.log(err))
    
  }

  return (
    <div className="App">
      <Title />
      <Quote quote={quote} />
      <CustomButton clickHandle={clickHandle} />
    </div>
  );
}

export default App;
