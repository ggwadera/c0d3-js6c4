import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useDebounce from '../utils/useDebounce';
import sendQuery from '../utils/sendQuery';
import PokemonSelection from '../components/PokemonSelection'
import PokemonResult from '../components/PokemonResult'

const PokemonLogin = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState({});

  const debouncedSearch = useDebounce(search, 500);
  const history = useHistory();

  const handleLoadSelection = (name) => {
    sendQuery(`{getPokemon(str:"${name}"){name, image}}`).then((result) => {
      setSelected(result.getPokemon);
      setResults([]);
    });
  };

  const handleLogin = () => {
    sendQuery(`{login (pokemon: "${selected.name}") {name}}`).then((result) => {
      history.go();
    });
  };

  useEffect(
    () => {
      async function fetchData() {
        // Make sure we have a value (user has entered something in input)
        if (debouncedSearch) {
          // Fire off our API call
          const queryResult = await sendQuery(`{search(str: "${search}") {name}}`);
          setResults(queryResult.search || []);
        } else {
          setResults([]);
        }
      }
      fetchData();
    },
    // execute if (search) hasn't changed for more than 500ms.
    [debouncedSearch]
  );

  return (
    <div>
      <h1>Pokemon Search</h1>
      <input className="searchBox" type="text" onChange={(e) => setSearch(e.target.value)} />
      <hr />
      <div className="suggestions">
        {results.map((result) => {
          return (
            <PokemonResult
              key={result.name}
              name={result.name}
              search={search}
              onClick={() => handleLoadSelection(result.name)}
            />
          );
        })}
      </div>
      {selected.name && <div>
        <PokemonSelection name={selected.name} image={selected.image} />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>}
    </div>
  );
};

export default PokemonLogin;
