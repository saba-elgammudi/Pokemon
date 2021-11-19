import React, { useState, useEffect } from 'react'
import { api } from './apiService';
import Pokemons from './component/Pokemons';
import Details from './component/Details';


const App = () => {
  const [list, setList] = useState([]);
  const [final, setFinal] = useState([]);
  const [pokemon, setPokemon] = useState({});

  //#region custom functions
  /**
   * Fetch all pokemons with pagination
   * @param {string} url 
   * @param {number} limit 
   * @param {number} offset 
   * @returns void
   */
  const fetchAll = async (url, limit, offset) => {
    const cApi = url ? url : `${process.env.REACT_APP_URL}?limit=${limit}&offset=${offset}`;
    const all = await api('get', cApi);
    const { results } = all;

    let eachPok = [];
    results.map(async result => {
      const image_url = result.url;
      const image = await api('get', image_url);
      const { sprites: { back_default }, abilities } = image;
      eachPok.push(
        {
          name: result.name,
          url: result.url,
          image: back_default,
          description: `${result.name} has ${abilities[0].ability.name} ability`
        }
      )
      setList([...eachPok])
    })

    const finalResult = {
      count: all.count,
      next: all.next,
      previous: all.previous,
      results: list
    }
    setFinal(finalResult)
  }
  /**
   * Get one pokemon
   */
  const getOne = async (url) => {
    const details = await api('get', url);
    setPokemon(details)
  }
  //#endregion

  useEffect(() => {
    fetchAll(null, 16, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="main-container">
      <Pokemons
        fetchAll={fetchAll}
        list={list}
        final={final}
        getOne={getOne}
      />
      <Details pokemon={pokemon} />
    </div>
  );
}

export default App;
