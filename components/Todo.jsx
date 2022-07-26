import React from 'react'

const Todo = ({data,deleteTodo}) => {
  return (
    <div className='item' key={data.id}><p>{data.name}</p> <button onClick={() => deleteTodo(data.id)}>Delete</button></div>
  )
}

export default Todo