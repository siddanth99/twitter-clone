import React from 'react'
import { useState } from 'react'

function Shop() {

  const [count,setCount] = useState(0);

  return (

    <button className='countButton' onClick={() => setCount(count+1)}>
      {count}
    </button>

  )
}

export default Shop