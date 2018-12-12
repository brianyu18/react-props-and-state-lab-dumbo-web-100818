import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (animalType) => {
    this.setState({
      filters:{
        type: animalType
      }
    })
  }

  onFindPetsClick = () => {
    let link = '/api/pets'
    let petType = this.state.filters.type
    let url = petType === 'all' ? link : `${link}?type=${petType}`
    fetch(url)
    .then(res => res.json())
    .then(petsList => {
      console.log(petsList)
      this.setState({pets: petsList})
    })
  }

  onAdoptPet = (id) => {
    this.state.pets.forEach(pet => {
      if(pet.id === id){
        pet.isAdopted = true
      }
    })
    this.setState({pets: this.state.pets})
    // fetch('/api/pets/id', {
    //   method: 'POST',
    //   headers: {'Content-Type':'application/json'},
    //   body: JSON.stringify({isAdopted: true})
    // })
    // .then(res => res.json())
    // .then(()=>{
    //   this.onFindPetsClick()})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
