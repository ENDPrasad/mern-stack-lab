import React, { MouseEventHandler, useCallback, useMemo, useState } from 'react';
import './App.css';
import Title from './components/Title';
import CustomButton from './components/CustomButton';
import Display from './components/Display';
import { count } from 'console';

function App() {
  const [counter, setCounter] = useState(0)

  const computedVal = useMemo(()=>{
    return counter * 2
  }, [counter])

  const onClick = useCallback(()=>{
    setCounter((prev) => prev+1)
  }, [])
  return (
    <div className="App flex">
      <div className='counter flex column-flex'>

      <Title />
      <Display text='useCallBack' value={counter} />
      <Display text='useMemo' value={computedVal} />
      <div className='btns flex'>
      <CustomButton clickHandler={onClick}>
        + 1
      </CustomButton>
      </div>
      </div>
    </div>
  );
}

export default App;
