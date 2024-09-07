import React, { ChangeEvent, useState } from 'react';
import { addTodo } from '../slices/todoSlice';
import { useDispatch } from 'react-redux';


function CustomInput() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  
  return (
    <div >
        <input onChange={(e:React.FormEvent<HTMLInputElement>)=>setTitle(e.currentTarget.value)} type="text" placeholder='what needs to be done?' value={title}/>
        <button onClick={()=>{
          dispatch(addTodo({title: title, status: 'active', datetime: new Date().toDateString()}))
          setTitle('')
          }} className='add-btn'>add</button>
    </div>
  );
}

export default CustomInput;
