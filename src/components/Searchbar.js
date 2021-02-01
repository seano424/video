import React, { useState } from 'react';
import './Searchbar.css'

const Searchbar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term)
  }

  return (
    <div className="ui segment searchbar">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search me</label>
          <input 
          onChange={event => setTerm(event.target.value)} 
          type="text"
          value={term}/>
        </div>
      </form>
    </div>
  )
}

export default Searchbar;