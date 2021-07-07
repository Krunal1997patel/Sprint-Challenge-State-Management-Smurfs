import {

    FETCH_SUCCESS,
    FETCH_FAILURE,
    START_FETCHING,
    POSTING_DATA,
    POSTING_DATA_SUCCESS,
    POSTING_DATA_FAILURE,
    DELETING_DATA,
    DELETING_DATA_SUCCESS,
    DELETING_DATA_FAILURE

} from '../action'


const initialState = {
    smurfs:[],
    isFeatching: false,
    error: ''
}


const reducer = (state = initialState, action) =>{

    // console.log(state)

    switch(action.type){

        case FETCH_SUCCESS:
            return{ ...state, smurfs: action.payload, isFeatching: false }

        case FETCH_FAILURE:
            return{ ...state, isFeatching: false, error: action.payload }

        case START_FETCHING:
            return{ ...state, isFeatching: true }

        case POSTING_DATA:
            return{ ...state, isFeatching: true }

        case POSTING_DATA_SUCCESS:
            return{ ...state, isFeatching: false, smurfs: action.payload }

        case POSTING_DATA_FAILURE:
            return { ...state, error: action.payload, isFeatching: false }

        case DELETING_DATA:
            return{ ...state, isFeatching: true }

        case DELETING_DATA_SUCCESS:
            return { ...state, smurfs: action.payload, isFeatching: false }

        case DELETING_DATA_FAILURE:
            return { ...state, error: action.payload }

        default: 
        return state
    }
}

export default reducer