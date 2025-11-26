import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './diveRiteTheme.css';

function App() {
  const [cenotes, setCenotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cenotes')
      .then(res => setCenotes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 0, minHeight: '100vh' }}>
      <header style={{ background: '#e30613', padding: '24px 0', textAlign: 'center', boxShadow: '0 2px 8px #000' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', margin: 0, fontWeight: 'bold', letterSpacing: '2px' }}>Yucatan Cenote Cave Maps</h1>
      </header>
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '32px 16px' }}>
        <section style={{ display: 'flex', alignItems: 'center', background: '#1a1a1a', border: '2px solid #e30613', borderRadius: 8, marginBottom: 40, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
          <img src={process.env.PUBLIC_URL + '/img/Ricardo.jpg'} alt="Roberto Castillo" style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', border: '3px solid #e30613', marginRight: 32, background: '#fff' }} />
          <div>
            <h2 style={{ color: '#e30613', marginBottom: 8 }}>Roberto Castillo</h2>
            <p style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>
              Roberto Castillo is a renowned cave diver and explorer from Mexico, known for his extensive work mapping and documenting the underwater cave systems of the Yucatan Peninsula. His expertise and dedication have contributed greatly to the understanding and conservation of these unique environments, inspiring divers worldwide.
            </p>
          </div>
        </section>
        <ul className="cenote-list">
          {cenotes.map(cenote => (
            <li key={cenote.id} className="cenote-item">
              <div className="cenote-details">
                <h2>{cenote.name}</h2>
                <p><strong>Location:</strong> {cenote.location}</p>
                <p>{cenote.description}</p>
              </div>
              <img className="cenote-img" src={cenote.mapImageUrl} alt={cenote.name + ' map'} />
            </li>
          ))}
        </ul>
      </main>
      <footer style={{ background: '#1a1a1a', color: '#fff', textAlign: 'center', padding: '16px 0', borderTop: '2px solid #e30613' }}>
        <span style={{ color: '#e30613', fontWeight: 'bold' }}>Dive Rite Style</span> &copy; 2025
      </footer>
    </div>
  );
}

export default App;
