import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 75%;
  max-width: 960px;
  margin: 0 auto;
  `;
const CharacterDisplay = styled.div`
  display: flex;
  flexWrap: wrap;
  justifyContent: space-evenly;
  align-content: space-around`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Set up state to hold character data from Star Wars API
  const [characterData, setCharacterData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        console.log(response.data);
        setCharacterData(response.data.results);
      })
      .catch(err => console.log(err))
  },[]);


  return (
    <div className="App">
      <Wrapper >
        <h1 className="Header">Star Wars Characters</h1>
        <CharacterDisplay >
        {
          characterData.map(character => (
            <Character key={character.created} swData={character} />
          ))
        }
        </CharacterDisplay>
      </Wrapper>
    </div>
  );
}

export default App;
