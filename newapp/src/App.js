import React, { Component}  from "react";
import Navbar from "./components/nav";
import Search from './components/search';
import"./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      filtered: [],
      loading: false,
      search: "",
      sortType:""
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=200")
    .then((response)=> response.json())
    .then((response)=>{
      this.setState({
        employees: response.results,
        filtered: response.results,
        loading: true
      })
    })
  }

  handleFilterByFirstName(value){
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
        const sorted=filtered.sort((a, b) =>{
          const isReversed =(this.state.sortType==="asc") ? 1 : -1;
          return isReversed * a.name.first.localeCompare(b.name.first)
        })
        return (
          <>
            <Navbar />
            <div className="searchContainer">
            <Search handleFilterByFirstName ={(e)=>this.handleFilterByFirstName(e)} />
            <button className="button margin" onClick={()=>this.setState({sortType: "asc"})}>Sort A-Z</button>
            <button className="button" onClick={()=>this.setState({sortType: "desc"})}>Sort Z-A</button>
            </div>
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
                  sorted.map(emp => (
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
