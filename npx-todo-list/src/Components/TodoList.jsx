import React from 'react'
import TodoItemF from './TodoItemF'

export default function TodoList(props){
  return (
    <div className='container'>
      <h3 className='text-center my-5 text-black font-bold text-3xl '>Todos List</h3>
      {
        props.todos.map(
          (todo => {
            return(<TodoItemF todo={todo} key={todo.sno} onDelete={props.onDelete} />)
          })
        )
      }
    </div>
  )
}