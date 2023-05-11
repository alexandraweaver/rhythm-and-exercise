import React, { useState } from 'react';
import useAxios from './hooks/useAxios';

// import WordSearchInput from './components/WordSearchInput';

import './App.css';

function App() {
  const [searchWord, setSearchWord] = useState("");

  const [setUrl, data, loading, setLoading, error] = useAxios();

  function handleSubmit(e) {
    e.preventDefault();

    setUrl(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
    setLoading(true);
  }

  return (
    <div className="App">
      <h1>Rhythm&</h1>
      <br/>
      
      <form onSubmit={(e) => handleSubmit(e)}>
        <h4>Word Is Bond: </h4>
        <input 
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}>
        </input>
      </form>
      {!loading && data ?
        <h1>Search Complete</h1>
        :
        <h1>Loading</h1>
      }

      {/* Definition component */}
    </div>
  );
}

export default App;
