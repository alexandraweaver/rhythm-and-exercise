/*
This component can be plugged in anywhere, but the following must be set up on the parent component:
    1. A function called handleSubmit() that uses the search word
    2. const [searchWord, setSearchWord] = useState("")
    3. When using this component, you must hand down props liek this:
        <SearchInput handleSubmit={handleSubmit} searchWord={searchWord} setSearchWord={setSearchWord}/>
*/

function SearchInput({ handleSubmit, searchWord, setSearchWord }) {
    return ( 
        <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <b>Word: </b>
          <input 
            type="text"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}>
          </input>
        </form>
        <br/>
      </div>
    );
}

export default SearchInput;