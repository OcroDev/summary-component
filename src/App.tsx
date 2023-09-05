import './App.css'

import { Summary } from './components/summary'
import data from '../data.json'
import { useState } from 'react'
import { type Data } from './types';
import { Results } from './components/results';

function App() {
  const [summary] = useState<Data[]>(data)

  console.log(data)
  return (
    <>
      <main className='main'>
        <Results />
        <Summary summary={summary} />
      </main>
      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">OcroDev</a>.
        </div>
      </footer>
    </>
  )
}

export default App
