// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
    width: 30%;
    border: 2px solid black;
    background-color: white;
    color: black;
    margin-bottom: 20px;
    @media(max-width: 800px){
        width:45%;
    }
    @media(max-width: 500px){
        width: 75%;
    }
    `;

const CardTitle = styled.h2`
    font-size: 2rem;
    background-color: #b08d6f;
    margin-top: 0;
    padding: 8px;
    font-family: 'Turret Road', cursive;
    font-weight: 700;
    `;

const CardInfo = styled.ul`
    listType = none;
    `;

const CharacterInfoItem = styled.li`
    list-style: none;
    text-align: left;
    font-size: 1.6rem;
    margin-bottom: 8px;
    font-family: monospace;
`;
export default function Character(props){
    const {swData} = props;

    return(
        <CharacterCard>
            <CardTitle>{swData.name}</CardTitle>
            <CardInfo>
                <CharacterInfoItem>Birth Year: {swData.birth_year}</CharacterInfoItem>
                <CharacterInfoItem>Gender: {swData.gender}</CharacterInfoItem>
                <CharacterInfoItem>Height: {swData.height}</CharacterInfoItem>
                <CharacterInfoItem>Mass: {swData.mass}</CharacterInfoItem>
                <CharacterInfoItem>Hair color: {swData.hair_color}</CharacterInfoItem>
                <CharacterInfoItem>Eye color: {swData.eye_color}</CharacterInfoItem>
                <CharacterInfoItem>Skin color: {swData.skin_color}</CharacterInfoItem>
            </CardInfo>

        </CharacterCard>
    )

}