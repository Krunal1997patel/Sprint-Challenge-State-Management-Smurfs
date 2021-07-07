import React,{useEffect} from 'react';

import { connect } from 'react-redux'

import { fetchSmurf } from '../action';

import Smurf from './Smurf';

const SmurfList = props => {

    useEffect(() => {
        props.fetchSmurf();
    },[])

    if(props.isFeatching){
       return <h1>Lodind...</h1> 
    }


    return(
        <div>
            <h2>Total population: {props.smurfs.length}</h2>
            <div className='smurf-card'>
                {props.error && <p>{props.error}</p>}
                {props.smurfs.map(info => (
                <Smurf  key={info.id} info={info}/>
                ))}
            </div>
        </div>
    )
    
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isFeatching: state.isFeatching,
        error: state.error
    }
}


export default connect( mapStateToProps, { fetchSmurf } )(SmurfList)