import React from 'react';

import { connect } from 'react-redux'

import { deleteSmurf } from '../action'

const Smurf = props => {

    // console.log(props.info.id)
   
    const person = props.info

    if(person.height === '5cm'){
        return (
            <div  className='card' key={person.id}>
            <h2>{person.name}</h2>
            <h3>Age: {person.age}</h3>
            <h3>Height: {person.height}</h3>
            <button className='button' onClick={() => props.deleteSmurf(person.id)} >Moving out</button>
        </div>
     )
    }else{

        return(
            <div className='card' key={person.id}>
                <h2>{person.name}</h2>
                <h3>Age: {person.age}</h3>
                <h3>Height: {person.height}cm</h3>
                <button className='button' onClick={() => props.deleteSmurf(person.id)} >Moving out</button>
            </div>
        )
    }

}

// export default Smurf

export default connect( null, { deleteSmurf } )(Smurf)