import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [step, setStep] = useState(0)
  const [existsInDb, setExistsInDb] = useState(false)

  const API_BASE = "http://localhost:8000/steps/first-steps"

  useEffect(() => {
    async function fetchStep() {
      try {
        const response = await fetch(`${API_BASE}/1/`)
        if (response.ok) {
          const data = await response.json()
          setStep(data.steps_taken)
          setExistsInDb(true)
        }
      } catch (err) {
        console.error('No existing step found, starting at 0')
      }
    }
    fetchStep()
  }, [])

  async function handleClick() {
    const newStep = step + 1
    setStep(newStep)

    try {
      if (existsInDb) {
        await fetch(`${API_BASE}/1/`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ steps_taken: newStep }),
        })
      } else {
        await fetch(`${API_BASE}/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ steps_taken: newStep }),
        })
        setExistsInDb(true)
      }
    } catch (err) {
      console.error('Failed to save:', err)
    }
  }



  return (
    <>
        <button
          type="button"
          className="counter"
          onClick={handleClick}
        >
          Steps Taken: {step}
        </button>
   
    </>
  )
}

export default App
