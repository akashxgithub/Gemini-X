import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main';
import geminiIcon from './assets/gemini_icon.png';


const App = () => {
  return (
    <>
    <head>
        <link rel="icon" href={geminiIcon} type="image/png" /> {/* Add the gemini icon as a favicon */}
        <title>Your App Title</title>
      </head>
     <Sidebar/> 
     <Main/>
    </>
  )
}

export default App
