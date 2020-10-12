import React, { Component } from "react";
import App from "../../App/App";
import { Link } from "react-router-dom";

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";
const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      entry: ''
    };
   
    this.search = this.search.bind(this)
    this.findEntry = this.findEntry.bind(this)
  }
  componentWillMount() {
    fetch(hostURL, optionGET)
      .then((res) => res.json())
      .then((works) => this.setState({ works }))
      .catch((err) => {
        console.log(err);
      });
  }
  findEntry = (e) => {
    

  }
  search = (e) => {
      e.preventDefault()
    this.setState({
        entry: e.target.value
    })
    console.log(e.entry)
    console.log("me too")
  }
  render () {
   
      console.log(this.works)
        console.log(this.props.works)
    console.log(this.entry)
    console.log(this.props.entry)

      return(
          <div>
              <form>
                  <input type="text" placeholder="Enter" id="searchID" onSubmit={this.search}/>
               <button className="ui yellow button" onClick={this.findEntry}>Search</button>
              </form>
              <div>{this.entry}</div>
          </div>
       

      )//render return
  }//render

} //component
export default Search;
