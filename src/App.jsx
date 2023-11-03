// react, components, estáticos
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'
import { Category } from './components/Category'

import './App.css'
import './index.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
   <div className="app">
    <h1>Quiz de Programação</h1>
    {quizState.gameState === "Start" && <Welcome />}
    {quizState.gameState === "Category" && <Category />}
    {quizState.gameState === "Playing" && <Question />}
    {quizState.gameState === "End" && <GameOver />}
   </div>
  )
}

export default App