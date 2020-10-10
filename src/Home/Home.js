import React, {Component} from "react"
import { Route, Link, Switch } from "react-router-dom";
import "../App/App"
import { Button, FormField } from "semantic-ui-react";
import HomeStyle from "./Home.css"



class Home extends Component {
    constructor(){
        super()
        this.state ={
            clicked: false
        }
    }
    
    render(){

        return(
            <div>
                <div className="butttonWrapper">
                <Switch>
                    <Link to="/listAll">
          <button className="ui orange button">All Works</button>
                    </Link>
                    </Switch> 
                <Switch>
                    <Link to ="/create">
          <button className="ui green button">Create</button>

                    </Link>
                </Switch>
                <Switch>
                    <Link to="/update">
          <button className="ui blue button">Update</button>

                    </Link>
                </Switch>
                <Switch>
                    <Link to="/delete">
          <button className="ui black button">Delete</button>

                    </Link>
                </Switch>
                </div>
            </div>
        )
    }
}
export default Home

