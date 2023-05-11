import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import IconButton from '@mui/material/IconButton';
import { FaExternalLinkAlt } from 'react-icons/fa'

function DefinitionUD({ word, loading, data, error }) {
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
    // API: https://rapidapi.com/community/api/urban-dictionary
    return ( 
        <Container>
            <Row>
                <h2>Urban Dictionary</h2>
                <i>Search complete for the word: </i>
            </Row>

            <Row>
                <h3>{word}</h3>
            </Row>

            <Row>
                <b>Definitions: </b> <br/>
                <p>Data: {JSON.stringify(data)}</p>

                {/*
                <div>
                    {data.list.map((def, index) => {return(
                        <Card key={index}>
                            <Card.Body>
                                <Card.Title>{def.word}</Card.Title>
                                <Card.Text>
                                    Definition: {def.definition} <br/>
                                    Example: {def.example} <br/>
                                    Written by {def.author} on {def.written_on}
                                </Card.Text>
                                <IconButton variant="primary" href={def.permalink}><FaExternalLinkAlt/></IconButton>
                            </Card.Body>
                        </Card>
                    );})}
                </div>
                */}
            </Row>
        </Container>
     );
}

export default DefinitionUD;