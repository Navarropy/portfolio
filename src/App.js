import './App.scss';
import Sidebar from './components/sidebar';
import Projects from './components/projects'
import Project from './components/project';

function App() {
  return (
    <>
     <div className="container">
        <Sidebar />

        <Projects>
          <Project background="https://i.imgur.com/dk4aYlz.png" positiob="center" link="https://eager-darwin-1ca60b.netlify.app/"/>
          <Project background="https://i.imgur.com/WsstlRQ.png" position="center" link="https://codepen.io/navarropy/pen/RwjGdbb"/>
          <Project background="https://i.imgur.com/nyNeano.png" position="center" link="https://codepen.io/navarropy/pen/dyZpyyx"/>
          <Project background="https://i.imgur.com/Lypuuco.png" position="center" link="https://codepen.io/navarropy/pen/RwjoeGJ"/>
          <Project background="https://i.imgur.com/FIYV2pc.png" position="center" link="https://codepen.io/navarropy/pen/MWObyLm"/>
          <Project background="https://i.imgur.com/vEVSdtY.png" position="center" link="https://codepen.io/navarropy/pen/gOXgGRd"/>
          <Project background="https://i.imgur.com/fUW1voO.png" position="center" link="https://codepen.io/navarropy/pen/vYWyymz?editors=0010"/>
          <Project background="https://i.imgur.com/lg65yEd.png" position="center" link="https://zealous-lichterman-8b1db8.netlify.app/"/>
          <Project background="https://i.imgur.com/QSiUddb.png" position="contain" link="https://condescending-dubinsky-9e3c42.netlify.app/"/>
        </Projects>
      </div>
    </>
  );
}

export default App;
