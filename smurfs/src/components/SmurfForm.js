import React, {useState} from 'react'
import { postSmurf } from '../action'
import { connect } from 'react-redux'

const SmurfForm = props => {

    const [info, setInfo] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleSubmit = e =>{
        e.preventDefault();
        props.postSmurf(info);
        setInfo({
            name: '',
            age: '',
            height: ''
        })
    }

    const handleChange = e => {
    //    console.log(e.target.name,  e.target.value)
        setInfo({
            ...info,
            [e.target.name]: [e.target.value]
        })
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className='input'
                    type='text'
                    placeholder='Smurf Name'
                    name='name'
                    value={info.name}
                    onChange={handleChange}
                    required
                />

                <br/>

                <input                    
                    className='input'
                    type='number'
                    placeholder='Age'
                    name='age'
                    value={info.age}
                    onChange={handleChange}
                    required
                />

                <br/>

                <input
                    className='input'
                    type='number'
                    placeholder='Height'
                    name='height'
                    value={info.height}
                    onChange={handleChange}
                    required
                />  

                <br/>  

                <button className='button' type='submit'>Join</button>
            </form>
        </div>
    )
    


}

// export default Form

export default connect(null ,{ postSmurf })(SmurfForm);