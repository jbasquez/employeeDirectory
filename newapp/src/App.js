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
          <div>
            {
              items.map(item => (
                <h1>{item.name.first} {item.name.last}</h1>
              ))
            }
          </div>
        )
      }
  }
}

export default App;
