import React, {Component} from "react"
import App from "../../App/App"
import {Link } from "react-router-dom"
import "../List/List.css"

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
             <br />

               <span>{item.classification},
               </span><br />
               <span>
                {item.url},
                <br />
                </span>
                <span>
                {item.century},
                <br />
                </span>
                <span>
                {item.culture},
                <br />
                </span>
                <span>
                {item.medium},</span> 
                <br />
                <span><a target="_blank" href="">{item.primaryimageurl}</a></span>
                <hr className="entryDivider"></hr>
                <br />
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
              {/* console.log(list) */}
            </div>
          )
      }
  }
  export default ListAll
