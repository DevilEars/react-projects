import React from 'react';

const SearchBox = (props) => {
    return (
        <div className='col col-sm-4'>
            <input
                className='form-control'
                value={props.value}
                onChange={(evt) => props.setSearchValue(evt.target.value)}
                placeholder='Type to search...'
                >
            </input>
        </div>
    );
};

export default SearchBox;