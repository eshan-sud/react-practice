import React from 'react'

export default function TodoItemF(props){
  return (
    <div className='bg-slate-800 rounded-xl m-5 px-5 py-3'>
      <h4 className='text-white'> {props.todo.title} </h4>
      <p className='text-white'> {props.todo.desc} </p>
      <button className='btn btn-sm btn-danger'
      onClick={() =>{props.onDelete(props.todo.sno)}}> Delete </button>
    </div>
  )
}