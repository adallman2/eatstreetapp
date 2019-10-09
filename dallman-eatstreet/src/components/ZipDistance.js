import React, { Component } from "react";
import "../App.css";
import "../index.js";
import '../backend.js'

class ZipDistance extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <form>
            <div class="row justify-content-md-center">
            <div class = "col-md-auto">
            <div class="row">
                <div class="col">
                    <input type="number" min="10000" max="99999" class="form-control" placeholder="Zip Code #1"></input>
                </div>
                <div class="col">
                    <input type="number" min="10000" max="99999" class="form-control" placeholder="Zip Code #2"></input>
                </div>
                <div class="col">
                    <input type="number" min="0" class="form-control" placeholder="Distance"></input>
                </div>
                </div>
                <div class="row justify-content-md-center">
                <div class="col">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="distanceUnit" id="inlineRadio1" value="option1" required defaultChecked></input>
                        <label class="form-check-label" for="inlineRadio1">Miles</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="distanceUnit" id="inlineRadio2" value="option2"></input>
                        <label class="form-check-label" for="inlineRadio2">Kilometers</label>
                        </div>
                    </div>
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

export default ZipDistance;