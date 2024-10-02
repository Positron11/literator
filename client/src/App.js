import './App.css';
import Home from './pages/Home';

import React, {useState, useEffect} from 'react'

function App() {

  const [apiData, setApiData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setApiData(data)
      })
  }, [])

  return (
    <div>

      {/* {(typeof apiData.stories === 'undefined') ? (<p>Loading...</p>) : apiData.stories.map((story, key) =>
        <div>
          <h1 key={key}>{story.title}</h1>
          <p key={key}>{story.content}</p>
          <span key={key}>{story.authors}</span>
        </div>
      )} */}

      <Home />

    </div>
  )
}

export default App;
