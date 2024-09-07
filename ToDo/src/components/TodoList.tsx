import React from 'react';
import TodoItem from './TodoItem';
import PropTypes, { arrayOf, InferProps } from 'prop-types'
import { ToDoItemType } from './props/ToDoItemType';
import { JSX } from 'react/jsx-runtime';


function TodoList({todos}:InferProps<typeof TodoList.propTypes>) {
  return (
    <div className="todo-list">
        <div className='flex'>
            {todos.map((todo: NonNullable<PropTypes.InferProps<{ title: PropTypes.Validator<string>; datetime: PropTypes.Validator<string>; status: PropTypes.Requireable<string>; }>>, id:number)=><TodoItem todo={todo} id={id}/>)}
        </div>
    </div>
  );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf<typeof ToDoItemType>
}

export default TodoList;
