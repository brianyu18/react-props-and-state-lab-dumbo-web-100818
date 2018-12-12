import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  adoptPet = (id) => {
    this.props.onAdoptPet(id)
  }

  render() {
    let petCards = this.props.petData.map(pet => {
      return <Pet pet={pet} adoptPet={this.adoptPet}/>
    })
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
