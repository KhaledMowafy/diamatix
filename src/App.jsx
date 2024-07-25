import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dropdown from './atoms/Dropdown/Dropdown'
import Chart from './atoms/Chart/Chart'
function App() {
  const [count, setCount] = useState(0)
  const data = [{id:1, name:'A'}, {id:2, name:'B'}];
  return (
    <>
      <Dropdown name="Customers" options={data}/>
      <Chart type='pie'/>
      <Chart type='line'/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="p-4 bg-blue-500 text-primary">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-sm">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
