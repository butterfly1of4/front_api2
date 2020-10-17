import React, { Component } from "react";
import App from "../../App/App";
import { Link } from "react-router-dom";
import Submit from "../Forms/Submit";
import Create from "./CreateNew.css";

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";

const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class CreateNew extends Component {
  constructor() {
    super();
    this.state = {
      works: [],
    };
  } //constructor
  render() {
    return (
      <div className="createContainer">
          <div className="introtext">To create a new entry for the api, please enter as much information as possible.</div>
        <div className="formConatiner">
          <form onSubmit={this.create}>
              <div className="inputWrapper">
               <div className="createlabel">Title: </div>   
            <div className="ui input item">
              <input type="text" placeholder="Title" />
            </div>
            <div className="createlabel">Classification: </div>
            <div className="ui input item">
              <input type="text" placeholder="Classification" />
            </div>
            <div className="createlabel">URL of the Work: </div>
            <div className="ui input item">
              <input type="text" placeholder="Work URL" />
            </div>
            <div className="createlabel">Century: </div>
            <div className="ui input item">
              <input type="text" placeholder="Century" />
            </div>
            <div className="createlabel">Culture: </div>
            <div className="ui input item">
              <input type="text" placeholder="Culture" />
            </div>
            <div className="createlabel">Medium: </div>
            <div className="ui input item">
              <input type="text" placeholder="Medium" />
            </div>
            <div className="createlabel">Image URL: </div>
            <div className="ui input item">
              <input type="text" placeholder="Image URL" />
            </div>
            
            <div className="submitbutton">
            <button
              className="ui green button"
              type="submit"
              placeholder="Create"
            >
              Create
            </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    );
  } //render
  create = (e) => {
    e.preventDefault();
    const formData = {
      title: document.querySelector("input").value,
    };
    const optionPOST = {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
    console.log(formData);

    fetch(hostURL, optionPOST)
      .then((res) => res.json())
      .then((works) => console.log(works))
      .catch((err) => console.log(err));
  };
} //component
export default CreateNew;
