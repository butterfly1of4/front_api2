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
        let list = this.state.works.map((allitems) => {
          return(
            <div className="listContainer">
              <>
              <div className="entry" key={allitems}>
             {allitems.title},
             <br />

               <span>{allitems.classification},
               </span><br />
               <span>
                {allitems.url},
                <br />
                </span>
                <span>
                {allitems.century},
                <br />
                </span>
                <span>
                {allitems.culture},
                <br />
                </span>
                <span>
                {allitems.medium},</span> 
                <br />
                <span><a target="_blank" href="">{allitems.primaryimageurl}</a></span>
                <hr className="entryDivider"></hr>
                <br />
              </div>
              </>
            </div>
          )
          console.log(allitems)
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
