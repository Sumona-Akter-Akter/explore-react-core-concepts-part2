import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'





function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  return (
    <>
      
      <h1>React Core concepts</h1>
      <Users></Users>

      <Counter></Counter>

      <Team></Team>

      <Friend></Friend>




      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick}>click2</button>
      <button onClick ={() => alert('third clicked')}>third </button>
      {/*vejaila */}
      <button onClick={() =>addToFive(3)}>Four</button>
      
    </>
  )
}

export default App

