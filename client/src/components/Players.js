import React from "react";
import {useDarkMode} from "../hooks/useDarkMode";

const Players = (props) => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    }

    return (
        <div>
            <div data-testid="nav" className="nav">
                <h1 data-testid="title">Women's World Cup Players Search Interest from Google Trends</h1>
                <div data-testid="toggleButtonDiv"className="dark-mode__toggle">
                    <div
                    data-testid="toggleButtonItself"
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                    />
                </div>
            </div>
            <div data-testid="allPlayersContainer" className="allPlayersContainer">
                {props.players.map(player => (
                <div data-testid="playerCard" className="playerCard" key={player.id}>
                    <h2>{player.name}</h2>
                    <h3>Country: {player.country}</h3>
                    <h3>Searches: {player.searches}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Players;