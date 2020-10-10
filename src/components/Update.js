import React, { Component } from "react";
import App from "../App";
import { Link } from "react-router-dom";

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

  componentWillMount() {
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
                  <React.Fragment>
                      {/* <div className="list">{list}</div> */}
                      <form onSubmit={this.update}>
                          <input type="text" placeholder="Update"></input>
                          <input type="submit"></input>
                      </form>
              <p>{item.title}</p>
                  </React.Fragment>

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