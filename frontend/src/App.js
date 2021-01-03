import './App.css';
import SourcesTable from './Components/SourcesTable/SourcesTable.js';
import CreateForm from './Components/CreateForm/CreateForm.js';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/sources/list`)
      .then(res => {
        setSources(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/sources/delete/${id}`)
      .then(res => {
        setSources(sources.filter(el => el.id !== res.data.id));
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleUpdate = (updatedSource) => {
    axios.put(`http://localhost:5000/sources/update/${updatedSource.id}`, updatedSource)
      .then(res => {
        setSources(
          sources.map(
            source => source.id === res.data.id ? res.data : source
          )
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleCreate = (newSource) => {
    axios.post(`http://localhost:5000/sources/create`, newSource)
      .then(res => {
        setSources([...sources, res.data])
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Sources</h1>
      <SourcesTable 
        sources={sources}
        onDelete={handleDelete}
        onUpdate={handleUpdate}/>
      <CreateForm
        onCreate={handleCreate}/>
    </div>
  );
}

export default App;
