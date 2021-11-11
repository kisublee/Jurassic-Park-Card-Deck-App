
import { Component } from "react";

import species from "../data/species";
import ParkInfo from "./ParkInfo";
import Park from "./Park";
import Buttons from "./Buttons";

class MainDino extends Component {

constructor () {
    super ()
    this.state = {
        dinos: [],
        numberOfDinos: 0,
        currentSpecies: species[0]
    }
}


getRandomDinos = () => {

    let randomIndex = Math.floor(Math.random() * species.length)
    this.setState ({
        currentSpecies: species[randomIndex],
    })

}

addDino = () => {
this.state.dinos.push(this.state.currentSpecies)
this.setState ({
    currentSpecies: this.state.currentSpecies,
    numberOfDinos: this.state.numberOfDinos += 1,
})

}

resetPark = () => {

this.setState ({
    dinos: [],
    numberOfDinos: 0,
})

}



    render () {
        const {dinos, numberOfDinos, currentSpecies} = this.state
        return (
            <>
            <Buttons 
            getRandomDinos = {this.getRandomDinos}
            addDino = {this.addDino}
            resetPark = {this.resetPark}
            />
            <ParkInfo
            currentSpecies = {currentSpecies.name}
            numberOfDinos = {numberOfDinos}
            />
            <Park  dinos = {dinos}/>
            </>
        )
    }

}


export default MainDino;