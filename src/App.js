import Header from './Componenets/header';
import Footer from './Componenets/footer';
import './App.css';
import Home from './Home/home';
import Series from './Series/series';
import Movies from './Movies/movies';
import Error from './Componenets/error'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/series" exact component={Series} />
            <Route path="/movies" exact component={Movies} />
            <Route component={Error} />
        </Switch>
        <Footer/>
      
      </div>
    </Router>
  );
}

export default App;
