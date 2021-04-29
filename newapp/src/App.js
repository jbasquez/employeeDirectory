import React, { Component } from "react";
import Navbar from "./components/nav";
import Search from './components/search';

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
        loading: true
      })
    })
  }

  handleFilterByFirstName(value){
    const filtered =this.state.employees.filter(employee=>{
      employee.name.first.includes(value)
    })
    this.setState({employees: filtered})
  }

  render(){
    const {employees, loading} = this.state;
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
            <Search handleFilterByFirstName ={this.handleFilterByFirstName} />
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
                  employees.map(emp => (
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
