const { useState, useEffect } = React;

function App() {
  const [visits, setVisits] = useState(0);
  const [loading, setLoading] = useState(true);  

  const fetchVisits = async () => {
    setLoading(true); 
    try {
      const response = await fetch('/api/visits');
      const data = await response.json();
      setVisits(data.visits);
    } catch (err) {
      console.error('Error fetching visits:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVisits();
  }, []);

  return (
    <div className="app">
      <h1>CSC468 Visitor Counter</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="visit-count">
          <p>Number of visits: <strong>{visits}</strong></p>
        </div>
      )}
      <button onClick={fetchVisits}>Refresh Count</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);