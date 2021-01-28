import React from 'react';
import './Searchbar.css'

class Searchbar extends React.Component {
  state = {
    term: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment searchbar">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Search me</label>
            <input 
            onChange={(e) => this.setState({term: e.target.value})} 
            type="text"
            value={this.state.term}/>
          </div>
        </form>
      </div>
    )
  }
}

export default Searchbar;