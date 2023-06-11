import React from 'react'
// import img1 from './images/itachi.jpg'
import img2 from './images/akatsukilogo.png'
import { useState } from 'react';


function Explore() {

  const [count,setCount] = useState(0);
  return (
    <div>
      {/* <img src={img1} alt='img'></img> */}
      <img src={img2} alt='img'></img>
      <img src="\images\itachi.jpg" alt='img'></img>
      
      <button className='countButton' onClick={() => setCount(count+1)}>
    {count}
  </button>

    </div>





  )
}

export default Explore