import React, {Component} from 'react';
import {BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import TransForm from './pages/Transform';
import List from './pages/List';
import Home from './pages/Lists/Home';
import Contact from './pages/Lists/Contact';
import Settings from './pages/Lists/Settings';
import Header from './pages/header';
import SignUp from './pages/SignUp';
import Register from './pages/Register';
import Learning from './pages/Lists/Learning/Learning';
import Audio from './pages/Lists/Audio/audio';
import Reading from './pages/Lists/Reading/Reading';
import './App.css';

class App extends Component {
  state = {
    TransformOpen: false
  }

  TransformHandle = () => {
    this.setState( (prevState) =>{
      return{
        TransformOpen: !prevState.TransformOpen
      }
    });
  }


  render(){
  return (
    <Router>
      <div>
        <Header />
      </div>
    <div className="App"> 
      <TransForm klik={this.TransformHandle}/>
      <List show={this.state.TransformOpen}/>
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/Contact" component={Contact}/>
       <Route path="/Settings" component={Settings} />
       <Route path="/Login" component={SignUp} />
       <Route path="/Register" component={Register} />
       <Route path="/learning" component={Learning} />
       <Route path="/audio" component={Audio} />
       <Route path="/reading" component={Reading} />
      </Switch>
    </div>
    </Router>
  );
}
}
export default App;
