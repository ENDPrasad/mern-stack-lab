import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';


function CustomButton() {
  const dispatch = useDispatch()
  return (
    <button className='add-btn'>add</button>
  );
}

export default CustomButton;
