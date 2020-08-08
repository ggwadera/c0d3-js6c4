import React, { useState, useEffect } from 'react';
import sendQuery from '../utils/sendQuery';

import PokemonLogin from './PokemonLogin';
import PokemonLessons from './PokemonLessons';

import '../styles/pokemon.css';

const PokemonLanding = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const queryResult = await sendQuery(`{
        user {name, image},
      }`);
      if (queryResult.user) {
        setUser(queryResult.user);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <main>
      {isLoading 
        ? <h1>Loading...</h1>
        : user.name
          ? <PokemonLessons name={user.name} image={user.image} />
          : <PokemonLogin />}
    </main>
  );
};

export default PokemonLanding;
