import React from 'react';
import './SearchBox.css';


class search extends React.Component {

    render() {
        return (

            <div className='box'>
                <input onChange = { (event) => {
                    this.props.onInputChange(event.target.value)
                    
                } } className="searchbox" type="text" placeholder='Enter keywords here' />

                
            </div>
        )
    }

}

export default search;