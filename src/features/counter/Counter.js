import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'
import { decrement, increment } from './counterSlice'
import Input from './Input'


export function Counter() {
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()

  return (
    <div>
      <div>
        
        <Button/>

        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button> */}

        {/* <span>{count}</span> */}
        <Input/>

        {/* <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button> */}
      </div>
    </div>
  )
}