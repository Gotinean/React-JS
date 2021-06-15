import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/NaviBar';
import Home from './home';
import About from './pages/about/about';
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WeatherApp from './pages/weather/weather';
import ToDo from './pages/todo/toDo';
import Gallery from './pages/gallery/gallery';



function App() {
  return (
    <>
    <Router>
    <NaviBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/weather" component={WeatherApp} />
      <Route exact path="/todo" component={ToDo} />
      <Route exact path="/gallery" component={Gallery} />
    </Switch>
    </Router>
    </>
  );
  }

export default App;
