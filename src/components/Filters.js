import React from 'react'

class Filters extends React.Component {

  pickType = (e) => {
    console.log(e.target.value)
    this.props.onChangeType(e.target.value)
  }

  fetchPet = () => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.pickType} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.fetchPet} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
