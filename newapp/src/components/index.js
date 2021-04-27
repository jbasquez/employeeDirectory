import React, { Component } from "react";

class Form extends Component {
    state ={
        firstName: "",
        lastName: "",
        birthDate: "",
        hireDate: "",
        phoneNumber: ""
    };
    formSubmit = event => {
        event.preventDefault();
        if(!this.state.firstName || !this.state.lastName){
            alert("Please enter your first and/or last name");
        }else if(!this.state.birthDate || !this.state.hireDate){
            alert("Please enter your birthday and/or the day you were hired");
        }else if(!this.state.phoneNumber){
            alert("Please enter your phone number");
        }else{
            <p>thanks for your help</p>
        }
    }
    render() {
        return (
            <div>
                <p>Welcome!</p>
                <form className="form">
                    <p>First Name</p>
                    <input
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="First Name"
                    />
                    <p>Last Name</p>
                    <input
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                    />
                    <p>Birthday</p>
                    <input
                    value={this.state.birthDate}
                    name="birthDate"
                    onChange={this.handleInputChange}
                    type="date"
                    placeholder="birth Day"
                    />
                    <p>Hire Date</p>
                    <input
                    value={this.state.hireDate}
                    name="birthDate"
                    onChange={this.handleInputChange}
                    type="date"
                    placeholder="Day of hiring"
                    />
                    <p>Phone Number</p>
                    <input
                    value={this.state.phoneNumber}
                    name="birthDate"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="xxx-xxx-xxxx"
                    />
                    <button onClick={this.formSubmit} className="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;