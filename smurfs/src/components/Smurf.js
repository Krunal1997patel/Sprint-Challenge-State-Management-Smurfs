import React from 'react';


const Smurf = props => {

    // console.log(props.info)
   
    const person = props.info

    if(person.height === '5cm'){
        return (
            <div  className='card' key={person.id}>
            <h2>{person.name}</h2>
            <h3>Age: {person.age}</h3>
            <h3>Height: {person.height}</h3>
        </div>
     )
    }else{

        return(
            <div className='card' key={person.id}>
                <h2>{person.name}</h2>
                <h3>Age: {person.age}</h3>
                <h3>Height: {person.height}cm</h3>
            </div>
        )
    }

}

export default Smurf