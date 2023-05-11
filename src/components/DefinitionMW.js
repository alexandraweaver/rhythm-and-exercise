import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function DefinitionMW({ word, loading, data, error }) {
    // Displayed before a word is searched for
    if(!word) {
        return (<h2>Search for a word</h2>)
    }

    // Displays between searching & getting back response
    if(loading && !data) {
        return (<h2>Loading...</h2>);
    }

    // Displays if user searches for an incorrect word/term
    if(error) {
        return <h2>An error has occured: {error}</h2>
    }

    // Displays the data returned from the API for the search word
    // Note: this code is data-structure specific.
    // API: https://dictionaryapi.dev/
    return ( 
        <Container>
            <Row>
                <h2>Merriam-Webster</h2>
                <i>Search complete for the word: </i>
            </Row>

            <Row>
                <h3>{word}</h3>
            </Row>

            <Row>
                <b>Phonetics: </b> <br/>
                {data[0].phonetics.map((phonetic, index) => {return(
                    <span key={index}> {phonetic.text} </span>
                );})}
            </Row>
            <br/>

            <Row>
                <b>Meanings: </b> <br/>

                {/* meaning.partOfSpeech can be used as a key because it has unique values in this particular data structure */}
                {data[0].meanings.map((meaning, index) => {return(
                    <div key={meaning.partOfSpeech}> 
                        <b>{meaning.partOfSpeech}: </b>
                        <br/>
                        {meaning.definitions.map((definition, index) => {return (
                            <ul key={index}> 
                                <li>{definition.definition}</li>
                            </ul>
                        );})}
                    </div>
                );})}
            </Row>

            <Row>
                <b>Sources: </b> <br/>
                {data[0].sourceUrls.map((source, index) => {return(
                    <span key={index}>
                        <a href={source}>{source}</a>
                    </span>
                );})}
            </Row>
        </Container>
     );
}

export default DefinitionMW;