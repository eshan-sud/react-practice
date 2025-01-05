import React from 'react'

function Products({passedValue, data}) {
  return (
    <div className='w-full h-96 bg-zinc-800 text-white'>
      <h1 className='w-full '> {passedValue} </h1>
      <h2> {data.age} </h2>
      <h2> {data.name} </h2>
    </div>
  )
}

export default Products