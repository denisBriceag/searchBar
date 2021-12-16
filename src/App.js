import './App.css';
import mock from './mock.json'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <input type='text' placeholder='Enter search query' onChange={(event) => setSearch(event.target.value)} />
      {mock.filter((name) => {
        if (search === '') {
          return name;
        } else if (name.name.toLowerCase().includes(search.toLowerCase())) {
          return name;
        }
      }).map((name, index) => {
        return <p>{name.name}</p>
      })}
    </div>
  );
}

export default App;
