import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import MoreDataButton from './components/MoreDataButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 75%;
  max-width: 960px;
  margin: 0 auto;
  `;
const Title = styled.h1`
font-size: 3rem;
font-family: 'Turret Road', cursive;
font-weight: 700;
`;

const CharacterDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Set up state to hold character data from Star Wars API
  const [characterData, setCharacterData] = useState([]);

  // Create a state data to get additional characters from the api
  
  // Get the next url for more results
  const [nextUrl, setNextUrl] = useState('');

  function cleanData(dataArr){
    return dataArr.map(character => {
      const newCharacterObj = {
        name: character.name,
        birthYear: character.birth_year,
        gender: character.gender,
        height: character.height,
        mass: character.mass,
        hairColor: character.hair_color,
        eyeColor: character.eye_color,
        skinColor: character.skin_color,
        url: character.url
      }
      return newCharacterObj;
    })
  }
function nextCharacters(){
  if (nextUrl === null){
    setNextUrl(`https://swapi.dev/api/people/`)
  }
  axios.get(`${nextUrl}`)
  .then(response => {
    console.log(response.data);
    setNextUrl(response.data.next);
    return response.data.results;

  })
  .then(dataList => {
    const characterData = cleanData(dataList);
    console.log(characterData);
    setCharacterData(characterData);
  })
  .catch(err => console.log(err))
}
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        console.log(response.data);
        setNextUrl(response.data.next);
        return response.data.results;

      })
      .then(dataList => {
        const characterData = cleanData(dataList);
        console.log(characterData);
        setCharacterData(characterData);
      })
      .catch(err => console.log(err))
  },[]);

  
  return (
    <div className="App">
      <Wrapper >
        <Title>Star Wars Characters</Title>
        <CharacterDisplay >
        {
          characterData.map(character => (
            <Character key={character.url} swData={character} />
          ))
        }
        </CharacterDisplay>
        <MoreDataButton nextCharacters={nextCharacters}/>
      </Wrapper>
    </div>
  );
}

export default App;
