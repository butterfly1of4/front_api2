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
        let list= this.state.works.map((item) => {
            return(
                <div className="container">
                    <div className="title" kye={item}>
                        {item.title}
                    </div>
                    <img src={item.primanyimageurl} />
                    <div className="button-class"><button className="delete" onClick={(e) => {
                        this.remove(item.title)
                    }}></button>{" "}
                    </div>

                </div>
            )
        })
        return (
            <React.Fragment>
                <div className='list'>{list}</div>
            </React.Fragment>
        )
    }//render
    remove(title) {
        fetch(hostURL + "/" + optionDELETE)
        .then(() => {
            console.log("removed")
            this.setState({
                works: this.state.works.filter((item) => {
                    return item.title !== title
                })
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    update(item){
        console.log("update works")
    }
}
export default Delete