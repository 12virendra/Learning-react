import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



function MyApp(){
  return(
    <h2>Hello virendra kaira </h2>
  )
}



const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>  //simple HTML is written .
)

//syntax  to create react element with help of ( React.createElement() ) .
const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google'
)


createRoot(document.getElementById('root')).render(

 //  <App/>  //we can't call <App/> and <MyApp/> together without applying <StrictMode> inside <StrictMode> we can call them together .same goes
            // for object (reactElement and anotherElement ) which is maded by us but also we cannot call reactElement and anotherElement individually 
            // inside <StrictMode> we can only call them if there is no <StrictMode/> but still only one can be called one time not both .
    
    // reactElement 

    // anotherElement

    // <MyApp/>

    <StrictMode>

       <App/>
       <MyApp/>

    </StrictMode>


    

    )
