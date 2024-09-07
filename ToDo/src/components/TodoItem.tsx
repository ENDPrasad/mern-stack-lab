
import { title } from 'process';
import React from 'react';
import PropTypes, { InferProps } from 'prop-types'
import { ToDoItemType } from './props/ToDoItemType';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateStatus } from '../slices/todoSlice';


function TodoItem({todo, id}:InferProps<typeof TodoItem.propTypes>) {
  const dispatch = useDispatch()

  return (
    <div className="todo-item flex">
        <input onChange={(e:React.FormEvent<HTMLInputElement>)=>dispatch(updateStatus({id: id, status: e.currentTarget.checked? 'completed':'active'}))} className='checkbox' id={`${id}`} type='checkbox' checked={todo.status == 'completed'}/>
        <div className="flex todo-title">
        <h4 className={todo.status == 'completed'?'strike':''}>{todo.title}</h4>
        <div className='todo-date'>{todo.datetime}</div>
        </div>
        
        <button onClick={()=>dispatch(deleteTodo(id))} className='delete-btn'>x</button>
    </div>
  );
}


TodoItem.propTypes = {
    todo: ToDoItemType.isRequired,
    id: PropTypes.number.isRequired
}

export default TodoItem;
