import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'   

// from lecture 4
// function myApp(){
//   return(
//     <div>React Modification</div>
//   )
// }

// givinf the final parsed product directly to render
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  "click me to visit google"
)

createRoot(document.getElementById('root')).render(

  reactElement

)