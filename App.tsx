import { useState } from 'react'
import './App.css'

function Profile () {
  return (
    <a target="_blank">
      <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="katherine johnson"
      width={500}
      height={200}
      />
    </a>
  )
}
function Avatar() {
  const img = "https://i.imgur.com/7vQD0fPs.jpg";
  const name = "Gregorio Y. Zara";
  const wid = 580;
  const hei = 200;
  return (
    <img
      className='avatar'
      src= {img}
      alt= {name}
      width={wid}
      height={hei}

      />
  );
}
function TodoList() {
  const img = "https://i.imgur.com/yXOvdOSs.jpg";
  const name = "Hedy Lamarr";
  return (
  <>
    <h1>Hedy Lamarr's Todos</h1>

    <ul style={
      {
        backgroundColor: 'black',
        color:'pink'
      }
    }>
    
    <img
      src= {img}
      alt= {name}
      width={230}
      height={9084}
      className="photo"
    />
    <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve the spectrum technology</li>
    </ul>
    </ul>
  </>
  )
  
}

function Fantastic() {
  const imgurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsGAODK--WfuYDTlACMweG94SrV6x5ID7xeVjqBMEbGleezdxr73Ocan0a1RGBOhg1vw&usqp=CAU";
  const name = "fantastic"

  return(
    <>
      <h1>{name}!!!</h1>
      <img
        src= {imgurl}
        alt= {name}
      />
    </>
    
  )
}
function Cocacolastic() {
  const imgurl = "https://cdn.dribbble.com/userupload/15181480/file/still-57724bd4472895755c6990c7c202e9c0.png?resize=1600x1200"
  const name = "cocacolastic"

  return (
    <>
      <h1>{name}!!!</h1>
      <img
        src= {imgurl}
        alt= {name}
        width={200}
        height={200}
        
      />
    </>
  )
}
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Profile />
        <TodoList />
        <Avatar />
      </div>
      <h1>katherine johnson</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <Fantastic />
        <Cocacolastic />
      </div>
      
    </>
  )
}

