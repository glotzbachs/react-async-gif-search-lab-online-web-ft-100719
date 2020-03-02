import React, { Component } from 'react'

class GifSearch extends Component {
    state = {
        searchTerm: ""
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.searchTerm)
        this.setState({
            searchTerm: ""
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitForm}>
                    Search: 
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <input type='submit'></input>
                </form>
            </>
        )
    }
}

export default  GifSearch
