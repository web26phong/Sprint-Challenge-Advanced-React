import React from 'react';
import Axios from "axios";
import Players from "./components/Players";
import './App.css';

class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount(){
    Axios
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      this.setState({
        players: res.data
        
      })
    })
    .catch(err => {
      console.log("There seems to be a problem!")
    })
  }

  render(){
    return (
    <div className="App">
      <Players players={this.state.players}/>
    </div>
    );
  }
  
}

export default App;
