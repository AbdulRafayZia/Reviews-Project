

import React ,{useState , useEffect} from  'react'
import Review from './Review';






function App() {
  return(
    <main>
      <article className='container' >
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review/>
      </article>
    </main>
  )


}

export default App;
