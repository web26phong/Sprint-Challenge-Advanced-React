import React from 'react';
import Axios from "axios";
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
      <h1>Women's World Cup Players Search Interest from Google Trends</h1>
      <div className="allPlayersContainer">
        {this.state.players.map(player => (
          <div className="playerCard" key={player.id}>
            <h2>{player.name}</h2>
            <h3>Country: {player.country}</h3>
            <h3>Searches: {player.searches}</h3>
          </div>
        ))}
      </div>
    </div>
    );
  }
  
}

export default App;
