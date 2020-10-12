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