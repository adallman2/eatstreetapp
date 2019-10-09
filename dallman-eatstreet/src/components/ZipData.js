import React, { Component } from "react";
import "../App.css";
import "../index.js";

class ZipData extends React.Component {
    
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">53018</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Delafield, WI</h6>
                    <p class="card-text">Latitude: </p>
                    <p class="card-text">Longitude: </p>
                    <p class="card-text">Timezone: () Offset(UTC): </p>
                    <p class="card-text">Other Names: </p>
                    <p class="card-text">Area Codes: </p>
                </div>
            </div>
        )
    }
}

export default ZipData;