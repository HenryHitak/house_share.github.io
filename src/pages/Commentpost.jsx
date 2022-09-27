import React from 'react';
import Todo from './Comment';

export const Commentpost = ({comments, toggleDelete})=>{
  return (
    comments.map((comment) => <Todo comment={comment} key={comment.id} toggleDelete={toggleDelete}/>)

  );
};

export default Commentpost;