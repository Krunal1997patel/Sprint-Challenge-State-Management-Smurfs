import axios from 'axios'

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const POSTING_DATA = 'POSTING_DATA';
export const POSTING_DATA_SUCCESS = 'POSTING_DATA_SUCCESS';
export const POSTING_DATA_FAILURE = 'POSTING_DATA_FAILURE';

export const DELETING_DATA = 'DELETING_DATA';
export const DELETING_DATA_SUCCESS = 'DELETING_DATA_SUCCESS';
export const DELETING_DATA_FAILURE = 'DELETING_DATA_FAILURE';



export const fetchSmurf = () => dispatch => {
    dispatch( {  type: START_FETCHING  } );

    axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => dispatch( { type: FETCH_SUCCESS, payload: response.data } ))
    .catch(err => dispatch( { type: FETCH_FAILURE, payload: err.response } ) )
}

export const postSmurf = smurfInfo => dispatch => {
    dispatch({ type: POSTING_DATA });

    axios
    .post('http://localhost:3333/smurfs', smurfInfo)
    .then( response => dispatch( { type: POSTING_DATA_SUCCESS, payload: response.data } ))
    .catch( err => dispatch( { type: POSTING_DATA_FAILURE, payload: err.response } ))
}

export const deleteSmurf = smurfID => dispatch => {
    dispatch( {  type:  DELETING_DATA } );

    axios
    .delete(`http://localhost:3333/smurfs/${smurfID}`)
    .then( response => dispatch( { type: DELETING_DATA_SUCCESS, payload: response.data } ))
    .catch( err => dispatch( { type: DELETING_DATA_FAILURE, payload: err.response } ))
}