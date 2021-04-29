import React, { Component } from "react";
class Search extends Component {
    state={
        firstName:""
    }
   
        handleInputChange = event => {
            // Getting the value and name of the input which triggered the change
            let value = event.target.value;
            const name = event.target.name;
            
            // Updating the input's state
            this.setState({
              [name]: value
            });
            this.props.handleFilterByFirstName(value)
          };
    render() {
        
            return(
                <div>
                    <input
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="First Name"
                    />
                </div>
            )
    }
}
export default Search;