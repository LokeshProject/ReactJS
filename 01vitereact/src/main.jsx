import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function Das() {
  return (
    <>
      <h3>Lokesh H3 normal</h3>
      <h1>Lokesh H1</h1>
    </>
  )
};

// const reactElement = {
//     type :'a',
//     props:{
//         href: 'https://www.youtube.com/',
//         target: '_blank',

//     },
//     children: 'Lokesh Das',
// }

const anotherElement = (
  <a href="https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4" target="_blank">
    Lokesh Das
  </a>
)


const reactElement = React.createElement(
  'a',
  { href: 'https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4', target:'_blank' },
  'Lokesh Dass',
)

createRoot(document.getElementById('root')).render(

anotherElement
  // reactElement
// Das()
    // <Das />
    // <App />

)
