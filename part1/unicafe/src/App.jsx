import { useState } from 'react'

const App = () => {

  // states
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // on click of either button, increment the state
  const badClick = () => setBad(bad + 1)
  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)

  return (
    <div>
      <h1> give feedback </h1>
      <Button text='good' onClick={goodClick} />
      <Button text='neutral' onClick={neutralClick} />
      <Button text='bad' onClick={badClick} />

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


// button component, returns button with given text and onClick function
const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}> {props.text} </button>
    </>
  )
}


const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all != 0) {
    let average = 0
    let positive = 0
    average = ((good - bad) / all) * 100
    positive = (good / all) * 100

    return (
      <div>
        <h1> statistics </h1>
        <StatisticLine text='good' value={good}/>
        <br/>
        <StatisticLine text='neutral' value={neutral}/>
        <br/>
        <StatisticLine text='bad' value={bad}/>
        <br/>
        <StatisticLine text='all' value={all}/>
        <br/>
        <StatisticLine text='average' value={average}/>
        <br/>
        <StatisticLine text='positive' value={positive}/>%
      </div>
    )
  }
  else {
    return (
      <div>
        <h1> statistics </h1>
        No feedback given
      </div>
    )
  }
}


const StatisticLine = ({ text, value }) => <> {text} {value} </>

export default App
