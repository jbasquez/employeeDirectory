import React, { Component } from "react";

class Form extends Component {
    state ={
        firstName: "",
        lastName: "",
        birthDate: "",
        hireDate: "",
        phoneNumber: ""
    };
    render() {
        return (
            <div>
                <p>Welcome!</p>
                <form className="form">
                    <input
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="First Name"
                    />
                    <input
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
                    />
                    <input
                    value={this.state.birthDate}
                    name="birthDate"
                    onChange={this.handleInputChange}
                    type="date"
                    placeholder="birth Day"
                    />
                </form>
            </div>
        )
    }
};

export default Form;