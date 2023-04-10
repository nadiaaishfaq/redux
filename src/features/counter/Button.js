import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Button() {
    const dispatch = useDispatch()
  return (
    <>
      <div>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  )
}

export default Button
