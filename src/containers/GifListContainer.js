import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends Component {

    state = {
        pictures: []
    }

    handleOnSubmit = (term) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(gifs => {
            this.setState({
                pictures: gifs.data.slice(0,3)
            })
        })
    }

    render() {
        
        return (
            <div>
               <GifSearch handleSubmit={this.handleOnSubmit}/>
               <GifList pictures={this.state.pictures}/> 
            </div>
        )
    }
}

export default GifListContainer


// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g