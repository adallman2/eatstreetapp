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
                    <h5 class="card-title">{this.props.zipCode}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{this.props.city}, {this.props.st}</h6>
                    <p class="card-text">Latitude: {this.props.lat}</p>
                    <p class="card-text">Longitude: {this.props.long}</p>
                    <p class="card-text">Timezone: {this.props.timezone}({this.props.timezoneAbbr}) Offset(UTC): {this.props.offset}</p>
                    <p class="card-text">Other Names: {this.props.oNames != null ? this.props.oNames : "none"}</p>
                    <p class="card-text">Area Codes: {this.props.areaCodes}</p>
                </div>
            </div>
        )
    }
}

export default ZipData;