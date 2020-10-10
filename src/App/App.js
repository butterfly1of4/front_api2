import React, {Component} from 'react';
import './App.css';
import { Route, Link, Redirect, Switch } from "react-router-dom";
import ListAll from "../components/List/ListAll.js"
import Home from "../Home/Home"
import CreateNew from "../components/Create/CreateNew.js"
import Update from "../components/Update/Update.js"
import Delete from "../components/Delete/Delete.js"
import Logo from "../assets/harvard_shield_wreath.png"

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";
//GET REQUESTS

//http://localhost:3000/record
//http://localhost:3000/record
//POST REQUESTS
//http://localhost:3000/record/_id/
//UPDATE/PUT REQUESTS
//http://localhost:3000/record/_'anyId'/
//DELETE REQUESTS
//http://localhost:3000/record/_'anyId'/

const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const optionPOST = {
  method: "POST",
  headers: {
    Accept: "application/json",
  },
};

const optionPUT = {
  method: "PUT",
  headers: {
    Accept: "application/json",
  },
};

const optionDELETE = {
  method: "DELETE",
  headers: {
    Accept: "application/json",
  },
};

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: ''
    }
    this.setState=this.setState.bind(this)
  }

  render(){
    return(
      <div>
        <nav>
        <div className="navWrapper">
        <img src={Logo} className="logo"/>
          <Link id="navTitle" to='/'>
          <h1 className="welcome">Harvard Art API</h1>
          </Link>
        </div>
        </nav>
        <main>
          <div className="introduction">
            <h1 className="hello">Welcome to the Harvard Art API list</h1>
            <h4 className="about">Here you can find a small list of the works in the art collection of Harvard.</h4>
            <p className="model">Here is the format for the information retrieved: <br />
            <ul className="modelList">
              <li className="modelitem">Title </li>
              <li className="modelitem">Classification</li>
              <li className="modelitem">Work URL</li>
              <li className="modelitem">Century </li>
              <li className="modelitem">Culture</li>
              <li className="modelitem">Medium</li>
              <li className="modelitem">Primary Image URL</li>
            </ul>
             </p>
          </div>
          {/* {this.state.list} */}
            <Home />
          <Switch>
          <Route exact path="/listAll" component={ListAll} />
          {/* <Route exact path="/search" component={Search} /> */}
          <Route exact path="/create" component={CreateNew} />
          <Route exact path="/update" component={Update} />
          <Route exact path="/delete" component={Delete} />
          </Switch>
        </main>
      </div>
    )
  }//render
 
  componentDidMount() {
    fetch(
    hostURL,
    optionGET
    // DeleteOne, GetOne, PutUpdate, post
  )
 
    .then((res) => res.json())
    .then((readJson) => {
      console.log(readJson);
      console.log(readJson[0].title)
      console.log(this.list);
      this.setState({
        list: readJson[0].title
      })
      return this.state.list
    })
    .catch((err) => {console.log(err)})
}

}//component

export default App;


// componentDidUpdate() {
//   console.log("the end");
//   console.log(this.state.list);
//}