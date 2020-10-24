import React from 'react';

export default function MoreDataButton(props){
    const {nextCharacters} = props;
    return(
        <div class='moreDataBtn'>
            <button onClick={nextCharacters}>See More Characters</button>
        </div>
    )
}