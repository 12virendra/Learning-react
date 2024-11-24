import { useState } from 'react'

import './App.css'

function App() {
   const[Counter , setcounter]=useState(15)

  function addvalue(){
    setcounter(Counter+1)
  }

  function removevalue(){    
    if(Counter>0){
    setcounter(Counter-1);
  }
    
}

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value = {Counter}</h2>
      <button onClick={addvalue} >Add value</button>
      <br /><br />
      <button onClick={removevalue}>Remove Value</button>
      
    </>
  )
}

export default App
