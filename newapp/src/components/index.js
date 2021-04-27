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
                </form>
            </div>
        )
    }
};

export default Form;