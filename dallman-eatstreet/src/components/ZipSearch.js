import React, { Component } from "react";
import "../App.css";
import "../index.js";

class ZipSearch extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <form>
            <div class = "row justify-content-md-center">
            <div class="col col-lg-2">
                <div class="active-pink-3 active-pink-4 mb-4">
                <input class="form-control" type="number" min="10000" max="99999" placeholder="Enter a Zip Code" aria-label="Search"></input>
            </div>
            </div>
            <div class="col-md-auto">
                <button type="button" class="btn btn-primary">Submit</button>
            </div>
            </div>
            </form>
        )
    }
}

export default ZipSearch;