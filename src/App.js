import './App.scss';
import Sidebar from './components/sidebar';
import Projects from './components/projects'
import Project from './components/project';
import Popup from './components/popup';
import Carousel from './components/projects/carousel';

function App() {
  return (
    <>
      <div className="container">
        <div className="tasks">
          <ul>
            <li>Transformar cada div em um route</li>
            <li>Criar folder para upload</li>
            <li>Começar a estudar postgres com react.</li>
          </ul>
        </div>
        
        <Popup>
          <Carousel />
        </Popup>

        <Sidebar />

        <Projects>
        
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />

        </ Projects>
      </div>
    </>
  );
}

export default App;
