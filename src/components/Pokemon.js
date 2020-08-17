import React, { Component } from "react"
import Stats from "./Stats"

class Pokemon extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            image:"",
            id: Math.floor(Math.random()*649),
            pokeData: {},
            stats: []
        }

        
    }

    componentDidMount(){

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}/`)
            .then(response => response.json())
            .then(response => {
                const pack = response
                this.setState({ pokeData : pack})
                console.log(this.state.pokeData)
            })
            .then(data => {
                let tempName= this.state.pokeData.name
                tempName = tempName.charAt(0).toUpperCase() + tempName.slice(1)
                this.setState({ name : tempName})

            } )
            .then(data => {
                const stats = []
                for( let i = 0 ; i < this.state.pokeData.stats.length ; i++){
                    stats.push(this.state.pokeData.stats[i].base_stat)
                }
                console.log("these are stats " +stats)
                this.setState({ stats: stats})
                
            })

    }


    render(){
        let pokeImage= `https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`

        return (
            <div className="pokemon">
                <div className="presentation">
                    <h2 className="poke-name">{this.state.id} {this.state.name}</h2>
                    <img className="poke-img" src={pokeImage} ></img> 
                </div>
                 
                <Stats  stats={this.state.stats}/>
                
            </div>
            
            

        )
    }

}

export default Pokemon