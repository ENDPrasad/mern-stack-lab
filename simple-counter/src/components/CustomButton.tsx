import React, { EventHandler, MouseEventHandler } from 'react';
import { Children } from 'react';


type Props = {
    children: string,
    clickHandler: MouseEventHandler
}

function CustomButton({children, clickHandler}:Props) {
  return (
    <button onClick={clickHandler}>{children}</button>
  );
}

export default CustomButton;