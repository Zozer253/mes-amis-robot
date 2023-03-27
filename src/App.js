import React, { useEffect, useState } from 'react';
import './App.css';
import RobotCard from './RobotCard';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchRobots = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setRobots(data);
  
  };

  const filterRobots = () => {
    if (searchTerm.trim().length < 3) {
      return robots;
    }
    return robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    fetchRobots();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MES AMIS ROBOTS</h1>
        <input
          placeholder="Rechercher par nom"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <div className="robots">
        {filterRobots().length > 0 ? (
          filterRobots().map((robot) => <RobotCard robot={robot} />)
        ) : (
          <div className="empty">
            <h2>Pas de robot trouvé</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
