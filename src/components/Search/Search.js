import React, { Component } from "react";
import App from "../../App/App";
import { Link } from "react-router-dom";
import ListAll from "../List/ListAll"
import SearchForm from "../Forms/SearchForm"

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";
const optionGET = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};
var i = ''
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      entry: '',
      list: ''
    };
    this.findEntry = this.findEntry.bind(this)
    this.search = this.search.bind(this)
  
  }
  componentWillMount() {
    fetch(hostURL, optionGET)
      .then((res) => res.json())
      .then((works) => {
          console.log(works)
          this.setState({ works })})
      .catch((err) => {
        console.log(err);
      });
      return this.state.works
  }
  findEntry = (e) => {
      e.preventDefault()
      this.setState({
          list: {ListAll
     }
    })
  }
  search = (e) => {
      e.preventDefault()
    this.setState({
        entry: document.querySelector("#searchID").value
    })
    console.log(this.state.entry)
    console.log("me too")
    return(this.state.entry)
  }
  render () {
    console.log({ListAll})

      return(
          <div>
              <form>
                  <input type="text" placeholder="Enter" id="searchID" onSubmit={this.search}/>
               <button className="ui yellow button" onClick={this.findEntry}>Search</button>
              </form>
              <div>{this.entry}</div>
              <div>{this.works}</div>
            
          </div>
       
  
      )//render return
  }//render

} //component
export default Search;
