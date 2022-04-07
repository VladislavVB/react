import React, { useState } from 'react'


function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState('fdsfdsf');

  const pluslike = () => {
    setLikes(likes + 1)
  }
  const minusLike = () => {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={pluslike}>Plus</button>
      <button onClick={minusLike}>Minus</button>
      <input 
        placeholder='input' 
        onChange={event => setValue(event.target.value)} 
        value={value} 
      />
      <h1>{value}</h1>
    </div>
  );
}

export default App;
