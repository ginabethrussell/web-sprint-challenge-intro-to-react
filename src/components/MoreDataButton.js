import React from 'react';
import styled from 'styled-components';

const MoreDataBtn = styled.button`
    width: 200px;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 2rem;
    background-color: #b08d6f;
    margin-top: 0;
    padding: 8px;
    font-family: 'Turret Road', cursive;
    font-weight: 700;
    margin-bottom: 20px;
    `;


export default function MoreDataButton(props){
    const {nextCharacters, nextUrl} = props;
    return(
        <div class='moreDataBtn'>
            <MoreDataBtn onClick={nextCharacters}>See More Characters</MoreDataBtn>
        </div>
    )
}