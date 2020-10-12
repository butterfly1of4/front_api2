import React, { Component } from "react";
import App from "../../App/App";
import { Link } from "react-router-dom";
import List from "../List/ListAll"

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";

const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class Update extends Component {
    constructor(props){
      super(props)
      this.state = {
        works: []
      }
    }//constructor
  
  componentWillMount() {
    fetch(hostURL, optionGET)
    .then((res) => res.json())
    .then((works) => {
      this.setState({works})
    })
    .then(console.log(this.state.works))
   
    .catch((err) => {
      console.lot(err)
    })
  }
    render() {
      let list = this.state.works.map((item) => {
        if(item.title === this.props.match.title){
          return(
            <>
              <form onSubmit={this.update}>
              <div class="ui input"><input type="text" placeholder="Enter..."/></div> 
              </form>
          <p>{item.title}</p>
            </>
          )
        }else {
          return null
        }
      })//map
      return (
        <div>
          {list}
        </div>
      )
    
  }//render
update = (e) => {
  e.preventDefault()
  console.dir(e.target[0].value)
  console.log(this.props.match.title)
  console.log(hostURL + this.props.match.title)
  const formData = {
    title: document.querySelector("input").value
  }
  console.log(formData)
  console.log("make it here")

  const optionPUT = {
    method: "PUT",
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify(formData)
  };
  fetch(hostURL +this.props.match.title, optionPUT)
  .then((res) => res.json())
  .then((works) => console.log(works))
  .catch((err) => {
    console.log(err)
  }) 
}
}//class
export default Update














import React, { Component } from "react";
import App from "../../App/App";
import { Link } from "react-router-dom";
import List from "../List/ListAll"

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";

const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class Update extends Component {
  constructor() {
    super();
    this.state = {
      works: [],
    };
  } //constructor

  componentDidMount() {
    fetch(hostURL, optionGET)
      .then((res) => res.json())
      .then((works) => this.setState({ works }))
      .then(console.log(this.state.works))
      .catch((err) =>{
          console.log(err)
      })
  }
  render(){
      let list = this.state.works.map((item) => {
          if(item.title === this.props.match.params.title){
              return (
                      <div>
                  <React.Fragment>
                      <form onSubmit={this.update}>
                          <input type="text" placeholder="Update"></input>
                          <input type="submit"></input>
                      </form>
              <p>{item.title}</p>
           
              </React.Fragment>
              </div>

              )
          } else {
              return null;
          }
      })
      return <div>{list}</div>
      //return
  }//render

  update = (e) => {
      e.preventDefault()
      console.dir(e.target[0].value)
      console.log(this.props.match.params.title)
      console.log(hostURL + this.props.match.title)
      const formData = {
          title: document.querySelector("input").value
      }
    
      console.log(formData)

      const optionPUT = {
        method: "PUT",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(formData)
      };
      
      fetch(hostURL + this.props.match.params.title, optionPUT)
      .then((res) => res.json())
      .then((works) => console.log(works))
      .catch((err) => {
          console.log(err)
      })
  }//update
} //component

export default Update









const mongoose = require("../db/connection");

const Schema = mongoose.Schema;
// const People = new Schema({
//     role: String,
//     birthplace: String,
//     name: String,
//     personid: Number,
//     deathplace: String
// })
const Records = new Schema({
  title: String,
  // "id": Number,
  classification: String,
  url: String,
  century: String,
  culture: String,
  primaryimageurl: String,
  medium: String,
  // people: [People]
});
module.exports = mongoose.model("Records", Records);
