import React from 'react';

class SearchBar extends React.Component {
    state={
        term:''
    }

    onChangeInput = (event) =>{
       this.setState({term:event.target.value})
        console.log(event.target.value)
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        
        //callback from parent App here
        this.props.getTermFromBar(this.state.term)
    }

   


    render() {
        return (

            <div>
                <div className="search-bar ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">   
                    <label htmlFor="search" className="text-light">Search for: </label>
                        <input className="form-control" id="search" onChange={this.onChangeInput}></input>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;