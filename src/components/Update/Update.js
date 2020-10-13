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
        works: [],
        entry: ''
      }
      // this.handleChange = this.handleChange.bind(this)
      // this.handleSubmit = this.handleSubmit.bind(this)
    }//constructor
  
  componentWillMount() {
    fetch(hostURL, optionGET)
    .then((res) => res.json())
    .then((works) => {
      this.setState({works})
    })
    .catch((err) => {
      console.lot(err)
    })
  }
    render() {
      let list = this.state.works.map((updateitem) => {
        return (
          <div className="updateList">
            <>
            <div className="entry" key={updateitem}>

            </div>
            </>
          </div>
        )
      })//map
      return (
        <>
       
          {list}
        </>
      )//render retturn
    
  }//render

}//class
export default Update





// update = (e) => {
//   e.preventDefault()
//   console.dir(e.target[0].value)
//   console.log(this.props.match.title)
//   console.log(hostURL + this.props.match.title)
//   const formData = {
//     title: document.querySelector("input").value
//   }
//   console.log(formData)
//   console.log("make it here")

//   const optionPUT = {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData)
//   };
//   fetch(hostURL +this.props.match.title, optionPUT)
//   .then((res) => res.json())
//   .then((works) => console.log(works))
//   .catch((err) => {
//     console.log(err)
//   }) 
// }