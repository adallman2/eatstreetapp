import React, { Component } from "react";
import "../App.css";
import "../index.js";

class ZipData extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">53018</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Delafield, WI</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}

export default ZipData;