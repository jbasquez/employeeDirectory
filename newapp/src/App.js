import React, { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      loading: false
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=20")
    .then((response)=> response.json())
    .then((response)=>{
      this.setState({
        items: response.results,
        loading: true
      })
    })
  }
  render(){
    var {items, loading} = this.state
      if(!loading){
        return (
        <div>
          loading...
        </div>
        )
      }else{
        return (
          <div className="container">
            {
              items.map(item => (
                <div>
                <h1>{item.name.first} {item.name.last}</h1>
                <h2>{item.gender}</h2>
                </div>
 
              ))
            }
          </div>
        )
      }
  }
}

export default App;
