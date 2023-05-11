import React, { useState } from 'react';
import useAxios from './hooks/useAxios';
import useAxiosUD from './hooks/useAxiosUD';

// import WordSearchInput from './components/WordSearchInput';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';

import DefinitionMW from './components/DefinitionMW';
import DefinitionUD from './components/DefinitionUD';
import SearchInput from './hooks/SearchInput';

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [word, setWord] = useState("");

  const [setUrl, data, loading, setLoading, error] = useAxios();

  const [setParamsUD, dataUD, loadingUD, setLoadingUD, errorUD] = useAxiosUD();

  function handleSubmit(e) {
    e.preventDefault();

    setWord(searchWord);

    // Merriam-Webster
    setUrl(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);

    // Urban Dictionary
    setParamsUD(searchWord);

    setLoading(true);
  }

  return (
    <div className="App">
      <Container>
        <h1>Rhythm&</h1>
        <i>Word Is Bond</i>
        <br/><br/>
      </Container>
      <br/>

      <Container>
        <SearchInput handleSubmit={handleSubmit} searchWord={searchWord} setSearchWord={setSearchWord}/>
      </Container>
      <br/>

      <Container>
        <DefinitionMW word={word} loading={loading} data={data} error={error}/>
      </Container>
      <br/>

      <Container>
        <DefinitionUD word={word} loading={loadingUD} data={dataUD} error={errorUD}/>
      </Container>
      <br/>
    </div>
  );
}

export default App;
