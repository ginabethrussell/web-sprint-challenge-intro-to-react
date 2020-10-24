// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
    width: 30%;
    border: 2px solid black;
    background-color: white;
    color: black;
    `;

const CardTitle = styled.h2`
    font-size: 2 rem;
    `;

const CardInfo = styled.ul`
    listType = none;
    `;
export default function Character(props){
    const {swData} = props;

    return(
        <CharacterCard>
            <CardTitle>{swData.name}</CardTitle>
            <CardInfo>
                <li>Birth Year: {swData.birth_year}</li>
                <li>Gender: {swData.gender}</li>
                <li>Height: {swData.height}</li>
                <li>Mass: {swData.mass}</li>
                <li>Hair color: {swData.hair_color}</li>
                <li>Eye color: {swData.eye_color}</li>
                <li>Skin color: {swData.skin_color}</li>
            </CardInfo>

        </CharacterCard>
    )

}