import React from 'react';
import './Cell.css';
import classNames from 'classnames';

export const Cell= (props)=>{
    const cellClasses= classNames({
        cell:true ,
        winner: props.canHighlight
    });
    const  cellContentClasses= classNames({
        'cell-content':true ,
         populated : props.value
    });

return (
          <button className={cellClasses} onClick={props.onClick}>
              <span className={cellContentClasses}>{props.value}</span>
          </button>       
  );
}


