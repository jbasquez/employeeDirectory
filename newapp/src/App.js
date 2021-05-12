import React, { Component, useState }  from "react";
import Navbar from "./components/nav";
import Search from './components/search';
import Header from "./components/header";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      filtered: [],
      loading: false,
      search: ""
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=20")
    .then((response)=> response.json())
    .then((response)=>{
      this.setState({
        employees: response.results,
        filtered: response.results,
        loading: true
      })
      // console.log("testin1234", this.state.employees);
      // console.log(response.results);
      
    })
  }

  handleFilterByFirstName(value){
    console.log(value);

    const filtered =this.state.employees.filter(employee=>{
      return employee.name.first.includes(value)
    })
    this.setState({filtered: filtered})
  }

  render(){
    const {filtered, loading} = this.state;
      if(!loading){
        return (
        <div>
          loading...
        </div>
        )
      }else{
        return (
          <>
            <Navbar />
            <Search handleFilterByFirstName ={(e)=>this.handleFilterByFirstName(e)} />
            <div className="container">
              
              
              <table className="table tble-striped table-hover">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                {
                  filtered.map(emp => (
                    <tr>
                      <td>{emp.name.first}</td>
                      <td>{emp.name.last}</td>
                      <td>{emp.gender}</td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
          </>
        )
      }
  }
}

export default App;
