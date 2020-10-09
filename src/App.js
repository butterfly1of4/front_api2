import React, {Component} from 'react';
import './App.css';
import { Route, Link, Redirect, Switch } from "react-router-dom";
import ListAll from "./components/ListAll"
import Home from "./Home"


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
          <Link to='/'>
          <h1>Harvard Art API</h1>
          </Link>
        </nav>
        <main>
          {/* {this.state.list} */}
            <Home />
          <Switch>
          <Route exact path="/listAll" component={ListAll} />

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