import React, {useState} from 'react';
import Header from './components/Header';
import'./App.css';
import backgroundImage from './assets/background.jpg';

function App (){
  const [projects, setProjects] = useState(['Back end with Node JS', 'Front end with ReactJS']);

  function handleAddProject(){
    setProjects([...projects,`New Project - ${Date.now()}`])
  }

  return (
    <>
      <Header title="Projects"/>

      <img width={340} src={backgroundImage}/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add Project</button>
    </>
  );
}

export default App;