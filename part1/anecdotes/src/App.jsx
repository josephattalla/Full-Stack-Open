import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  // states
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [mostVotes, setMost] = useState({votes: 0, anecdote: anecdotes[0]})

  // store the current anecdotes votes
  let curVotes = votes[selected]

  let mostVotesDisp = {...mostVotes}

  // set selected anecdote to a random index
  const setRandom = () => setSelected(Math.floor(Math.random() * 8))

  // increase votes for selected anecdote
  const onVote = () => {
    let newState = [...votes]
    newState[selected] += 1
    curVotes += 1
    setVotes(newState)

    // if current state has most votes, update mostVotes state
    if (curVotes > mostVotes.votes) {
      let newState = {votes: curVotes, anecdote: anecdotes[selected]}
      setMost(newState)
      mostVotesDisp = newState
    }
  }

  return (
    <div>
      <h1> Anecdote of the day </h1>
      {anecdotes[selected]}
      <br/>
      has {curVotes} votes
      <br/>
      <button onClick={onVote}> vote </button> 
      <button onClick={setRandom}> next anecdote </button> 
      <MostVotes mostVotesDisp={mostVotesDisp} />
    </div>
  )
}


const MostVotes = ({ mostVotesDisp }) => {
  if (mostVotesDisp.votes === 0) {
    return (<></>)
  }
  return (
    <div>
      <h1> Anecdote with most votes </h1>
      {mostVotesDisp.anecdote}
      <br/>
      has {mostVotesDisp.votes} votes
    </div>
  )
}

export default App
