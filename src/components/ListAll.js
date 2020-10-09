import React, {Component} from "react"
import App from "../App"
import {Link } from "react-router-dom"


const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record";
const optionGET = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  class ListAll extends Component {
      constructor() {
          super() 
          this.state = {
              works: []
          }
      }//constructor
      componentWillMount(){
        fetch( hostURL,ListAll)
          .then((res) => res.json())
  
          .then((works) => this.setState({works}))
          
          .catch((err) => console.log(err))
      }
      render() {
        let list = this.state.works.map((item) => {
          return(
            <div className="container">
              <>
              <div className="entry" key={item}>
                {item.title},
                {/* {item.classification},
                {item.url},
                {item.century},
                {item.culture},
                {item.medium}, */}
                {item.primaryimageurl}
                
              </div>
              </>
            </div>
          )
          console.log(item)
        })
        console.log(list)
          return (
            <div className="list">
              {list}
              console.log(list)
            </div>
          )
      }
  }
  export default ListAll
