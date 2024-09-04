import React from 'react';


type Props = {
    value: number,
    text:string
} 

function Display({value, text}:Props) {
  return (
    <div className="display flex">
        <span className='type flex'>{text}</span>
    <span className='data'>
        {value}
    </span>
    </div>
  );
}

export default Display;