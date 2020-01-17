import React from 'react';
import Axios from "axios";
import Players from "./components/Players";
import './App.css';

class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount(){
    console.log("app mounted")
    Axios
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      console.log(res.data)
      this.setState({
        players: res.data
        
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    console.log("app rendered")
    return (
    <div className="App">
      <Players players={this.state.players}/>
    </div>
    );
  }
  
}

export default App;
