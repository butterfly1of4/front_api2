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

const optionDELETE = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  };

class Delete extends Component {
    constructor() {
        super()
        this.state = {
            works: [],
            search: "",
            clicked: true
        }
    }//constructor
    componentWillMount(){
        fetch(hostURL, optionGET)
        .then((res) => res.json())
        .then((works) => this.setState({works}))
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        let list= this.state.works.map((deleteitem) => {
            return(
              
                <div className="deleteContainer">
                    <div className="deleteentry">
                    <div className="title" key={deleteitem}>
                        {deleteitem.title}
                    </div>
                    </div>
                    <div className="deleteentry">
                    <div className="button-class"><button className="delete ui black button" onClick={(e) => {
                        this.remove(deleteitem.title)
                    }}>Delete</button>{" "}
                    </div>
                    </div>
                    </div>
                
            )
        })
        return (
            <React.Fragment>
                <div className="deleteList">{list}</div>
            </React.Fragment>
        )
    }//render
    remove(title) {
        fetch(hostURL + "/" + optionDELETE)
        .then(() => {
            console.log("removed")
            this.setState({
                works: this.state.works.filter((deleteitem) => {
                    return deleteitem.title !== title
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    update(deleteitem){
        console.log("update works")
    }
}
export default Delete