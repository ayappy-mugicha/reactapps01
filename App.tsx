import { useState } from 'react'
import './App.css'

function Profile () {
  return (
    <a href="https://www.solid-ui.com/docs/installation/vite" target="_blank">
      <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="katherine johnson"
      />
    </a>
    
  )
}
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Profile />
      </div>
      <h1>katherine johnson</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          it <code>console.log("helloworlid")</code> is js code
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

