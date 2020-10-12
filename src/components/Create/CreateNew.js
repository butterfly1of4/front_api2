import React, {Component} from "react"
import App from "../../App/App"
import {Link } from "react-router-dom"

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";

const optionGET = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
  
class CreateNew extends Component{
    constructor(){
        super()
        this.state = {
            works: []
        }
    }//constructor
    render (){
        return(
            <div>
                
            <form onSubmit={this.create}>
                <input type="text" placeholder="Create New" />
                <input type="submit" />
            </form>

            </div>
        )
    }//render
create = (e) => {
    e.preventDefault()
    const formData = {
        title: document.querySelector("input").value
    }
    const optionPOST = {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: JSON.stringify(formData)
    } 
    console.log(formData)

    fetch(hostURL, optionPOST)
    .then((res) => res.json())
    .then((works) => console.log(works))
    .catch((err) => console.log(err))
    };
}//component
  export default CreateNew