import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [cenotes, setCenotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cenotes')
      .then(res => setCenotes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Yucatan Cenote Cave Maps</h1>
      <ul>
        {cenotes.map(cenote => (
          <li key={cenote.id} style={{ marginBottom: 24 }}>
            <h2>{cenote.name}</h2>
            <p><strong>Location:</strong> {cenote.location}</p>
            <p>{cenote.description}</p>
            <img src={cenote.mapImageUrl} alt={cenote.name + ' map'} style={{ maxWidth: 400, border: '1px solid #ccc' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
