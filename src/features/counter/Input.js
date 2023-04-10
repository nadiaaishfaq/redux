import React from 'react'
import { useSelector} from 'react-redux'

function Input() {
    const count = useSelector((state) => state.counter.value)
  return (
    <>
      <div>
        {/* {count} */}
        <input 
        type="text" 
        id="name" 
        name="name"
        value={count}/> 
      </div>
    </>
  )
}

export default Input
