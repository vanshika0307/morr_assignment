import React from 'react'
import Header from './Componenets/header';
import Footer from './Componenets/footer';
import './App.css';
import Home from './Home/home';
import Series from './Series/series';
import Movies from './Movies/movies';
import Error from './Componenets/error'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  {fetchData} from './Api';




class App extends React.Component {
  state = {
    data: {},
    
  }
  async componentDidMount() {
    const Data = await fetchData();
    console.log(Data);
    this.setState({data: Data});
  }


  render(){
    const { data } = this.state;
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/series" exact render={(props) => <Series data= {data} {...props} />} />
            <Route path="/movies" exact render={(props) => <Movies data= {data} {...props}  />}/>
            <Route component={Error} />
        </Switch>
        <Footer/>
      
      </div>
    </Router>
  );
  }
}

export default App;
