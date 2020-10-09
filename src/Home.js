import React, {Component} from "react"
import { Route, Link, Switch } from "react-router-dom";
import "./App"
import { Button, FormField } from "semantic-ui-react";
import ListAll from "./components/ListAll"


class Home extends Component {
    constructor(){
        super()
        this.state ={}
    }
    render(){
        return(
            <div>
                <Switch>
                    <Link to="/listAll">
          <button className="ui red button">All Works</button>
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

            </div>
        )
    }
}
export default Home

